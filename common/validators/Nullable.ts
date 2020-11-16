import { TValidator } from "common/validators/Validator";

export const Nullable = <TType, TTValidator extends TValidator<TType>>(
  validator: TTValidator
) => {
  return {
    nonNull: validator,
    validate(value: any): value is TType | null {
      if (value === null) {
        return true;
      }
      return validator.validate(value);
    },
  };
};
