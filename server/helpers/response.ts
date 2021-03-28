import { NextApiResponse } from "next";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

import {
  TApiResponse,
  TApiResponseError,
  TApiResponseResult,
} from "common/api";

export function responseWithError(
  res: NextApiResponse<TApiResponseError>,
  statusCode: StatusCodes
) {
  responseWith(res, {
    errorMessage: getReasonPhrase(statusCode),
    statusCode,
  });
}

export function responseWithData<T>(
  res: NextApiResponse<TApiResponseResult<T>>,
  statusCode: StatusCodes,
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
