export function isInteger(number: any): number is number {
  return typeof number === "number" && Number.isInteger(number);
}
