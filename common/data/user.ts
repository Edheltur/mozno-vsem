import { isString } from "common/validators/String";

export interface IUser {
  name: string;
  phone: string;
  address: string;
}

export function isUser(user: any): user is IUser {
  return (
    isString(user?.name, 50) &&
    isString(user?.phone, 25) &&
    isString(user?.address, 150)
  );
}
