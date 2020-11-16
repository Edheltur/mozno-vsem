export type TValidator<T = string | number | boolean | null | undefined> = {
  validate(value: any): value is T;
};

type GuardedType<T> = T extends (x: any) => x is infer T ? T : never;

type SchemaOf<TSchema> = Record<keyof TSchema, TValidator>;

export type TModel<TSchema extends SchemaOf<TSchema>> = {
  [TField in keyof TSchema]: GuardedType<TSchema[TField]["validate"]>;
};

export function is<TSchema extends SchemaOf<TSchema>>(
  schema: SchemaOf<TSchema>
): (value: any) => value is TModel<TSchema> {
  return (value: any): value is TModel<TSchema> =>
    Object.entries<TValidator>(schema).every(([key, validator]) =>
      validator.validate(value[key])
    );
}
