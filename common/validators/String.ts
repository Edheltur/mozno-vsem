export function isString(string: any, maxLength?: number): string is string {
  if (typeof string === "string") {
    return !(maxLength && string.length > maxLength);
  }
  return false;
}

export const String = (maxLength?: number) => ({
  maxLength,
  validate(value: any): value is string {
    return isString(value, this.maxLength);
  },
});
