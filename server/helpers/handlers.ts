import { HttpError, HttpStatus, isHttpValidMethod } from "common/http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { responseWithError } from "server/helpers/response";
import { TApiEndpoint } from "common/api";

function delegateResponseToHandler<T>(
  handler: NextApiHandler<T>,
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return handler(req, res);
  } catch (e) {
    if (e instanceof HttpError) {
      responseWithError(res, e.statusCode);
    }
    responseWithError(res, HttpStatus.INTERNAL_SERVER_ERROR);
    throw e;
  }
}

export function createHandler<TEndpointConfig extends TApiEndpoint>(
  handlers: {
    [method in keyof TEndpointConfig]: NextApiHandler<TEndpointConfig[method]>;
  }
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (isHttpValidMethod(method)) {
      const handler = handlers[method];
      if (typeof handler === "function") {
        return delegateResponseToHandler(handler, req, res);
      }
    }

    return responseWithError(res, HttpStatus.METHOD_NOT_ALLOWED);
  };
}
