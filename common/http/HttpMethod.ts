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

export function isHttpValidMethod(method?: string): method is THttpMethod {
  return typeof method === "string" && method in HttpMethod;
}
