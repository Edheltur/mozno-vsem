import * as statusCodes from "http-status-codes";

const {
  getStatusCode: getStatusCodeRaw,
  getStatusText: getStatusTextRaw,
  ...HttpStatuses
} = statusCodes;

export type THttpStatusReason = keyof typeof HttpStatuses;
export type THttpStatusCode = typeof HttpStatuses[THttpStatusReason];
export const HttpStatus = HttpStatuses;

export function getStatusCode(
  reasonPhrase: THttpStatusReason
): THttpStatusCode {
  return getStatusCodeRaw(reasonPhrase) as THttpStatusCode;
}

export function getStatusText(statusCode: THttpStatusCode): THttpStatusReason {
  return getStatusTextRaw(statusCode) as THttpStatusReason;
}
