import { getStatusText, HttpStatus, THttpStatusCode } from "./HttpStatus";

export class HttpError extends Error {
  readonly statusCode: THttpStatusCode;

  constructor(statusCode: THttpStatusCode, message?: string) {
    super(message ?? getStatusText(statusCode));
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super(HttpStatus.NOT_FOUND);
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(HttpStatus.BAD_REQUEST);
  }
}

export class InternalServerError extends HttpError {
  constructor() {
    super(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
