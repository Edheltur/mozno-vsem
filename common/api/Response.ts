import { StatusCodes } from "http-status-codes";

export type TApiResponse<T> = TApiResponseResult<T> | TApiResponseError;

export type TApiResponseResult<T = any> = {
  data: T;
  statusCode: number;
};

export type TApiResponseError = {
  errorMessage: string;
  statusCode: StatusCodes;
};
