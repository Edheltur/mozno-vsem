export function isInteger(
  number: any,
  min?: number,
  max?: number
): number is number {
  if (typeof number !== "number") return false;

  if (!Number.isInteger(number)) return false;

  if (min !== undefined && number < min) {
    return false;
  }

  if (max !== undefined && number > max) {
    return false;
  }

  return true;
}

export const Integer = (min?: number, max?: number) => ({
  min,
  max,
  validate(value: any): value is number {
    return isInteger(value, this.min, this.max);
  },
});
