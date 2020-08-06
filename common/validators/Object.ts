export function isObject<TKey extends string, TValue>(
  object: any,
  isKeyValid: (key: string) => key is TKey,
  isValueValid: (value: any) => value is TValue,
  maxSize?: Number
): object is Record<TKey, TValue> {
  if (typeof object !== "object" || object === null) {
    return false;
  }
  const entries = Object.entries(object);

  if (maxSize && entries.length > maxSize) {
    return false;
  }

  return entries.every(
    ([key, value]) => isKeyValid(key) && isValueValid(value)
  );
}
