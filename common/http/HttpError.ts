import { getReasonPhrase, StatusCodes } from "http-status-codes";

export class HttpError extends Error {
  readonly statusCode: StatusCodes;

  constructor(statusCode: number, message?: string) {
    super(message ?? getReasonPhrase(statusCode));
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super(StatusCodes.NOT_FOUND);
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(StatusCodes.BAD_REQUEST);
  }
}

export class InternalServerError extends HttpError {
  constructor() {
    super(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
