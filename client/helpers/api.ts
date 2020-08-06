import { TApiResponseError, TApiResponseResult } from "common/api";
import { HttpError, THttpMethod } from "common/http";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function fetchApi<
  TSpecificEndpoint extends { [method in TMethod]: TApiResponseResult },
  TMethod extends keyof TSpecificEndpoint & THttpMethod
>(
  url: string,
  method: TMethod,
  data?: object
): Promise<TSpecificEndpoint[TMethod]["data"]> {
  const body = JSON.stringify(data);
  const response = await fetch(url, {
    method,
    body,
    headers,
  });

  if (response.ok) {
    const result: TSpecificEndpoint[TMethod] = await response.json();
    return result.data;
  }

  const result: TApiResponseError = await response.json();
  throw new HttpError(result.statusCode, result.errorMessage);
}
