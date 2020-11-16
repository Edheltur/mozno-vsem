export type ValueOf<T> = T[keyof T];

export type MapTo<T, U> = {
  [P in keyof T]: U;
};

export function mapObject<T extends object, U>(
  obj: T,
  mappingFn: (key: Extract<keyof T, string>, value: ValueOf<T>) => U
): MapTo<T, U> {
  const newObj = {} as MapTo<T, U>;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const oldValue = obj[key];
      newObj[key] = mappingFn(key, oldValue);
    }
  }
  return newObj;
}
