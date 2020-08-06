import { THttpMethod } from "common/http";
import { TApiResponseResult } from "common/api";

export type TApiEndpoint = {
  [method in THttpMethod]?: TApiResponseResult;
};
