export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
  HEAD: "HEAD",
  TRACE: "TRACE",
  OPTIONS: "OPTIONS",
  CONNECT: "CONNECT",
} as const;

export type THttpMethod = typeof HttpMethod[keyof typeof HttpMethod];
