import { NextApiResponse } from "next";
import { THttpStatusCode } from "common/http/HttpStatus";
import { getStatusText } from "http-status-codes";
import {
  TApiResponse,
  TApiResponseError,
  TApiResponseResult,
} from "common/api";

export function responseWithError(
  res: NextApiResponse<TApiResponseError>,
  statusCode: THttpStatusCode
) {
  responseWith(res, {
    errorMessage: getStatusText(statusCode),
    statusCode,
  });
}

export function responseWithData<T>(
  res: NextApiResponse<TApiResponseResult<T>>,
  statusCode: THttpStatusCode,
  data: T
) {
  responseWith(res, {
    data: data,
    statusCode,
  });
}

function responseWith<T extends TApiResponse<any>>(
  res: NextApiResponse<T>,
  body: T
) {
  res.statusCode = body.statusCode;
  res.json(body);
}
