import { String } from "common/validators";
import { is, TModel } from "common/validators";

export const User = {
  name: String(50),
  phone: String(25),
  address: String(150),
  entrance: String(4),
  apartment: String(6),
  intercomCode: String(6),
  floor: String(2),
} as const;

export const isUser = is(User);

export type TUser = TModel<typeof User>;
