import { HttpError, HttpStatus } from "common/http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { responseWithError } from "server/helpers/response";
import { TApiEndpoint } from "common/api";
import { isHttpValidMethod } from "common/validators";

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

type THandlers<TEndpoint> = {
  [method in keyof Required<TEndpoint>]: NextApiHandler<TEndpoint[method]>;
};

export function createHandler<TEndpoint extends TApiEndpoint>(
  handlers: THandlers<TEndpoint>
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    return isHttpValidMethod(method)
      ? delegateResponseToHandler(handlers[method], req, res)
      : responseWithError(res, HttpStatus.METHOD_NOT_ALLOWED);
  };
}
