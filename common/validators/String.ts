export function isString(string: any, maxLength?: number): string is string {
  if (typeof string === "string") {
    return !(maxLength && string.length > maxLength);
  }
  return false;
}
