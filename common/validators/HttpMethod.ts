import { HttpMethod, THttpMethod } from "common/http";

export function isHttpValidMethod(method?: string): method is THttpMethod {
  return typeof method === "string" && method in HttpMethod;
}
