import { IsPrimitive } from "../flatten/IsPrimitive";
import { MergeAll } from "../transform/MergeAll";

type ValidatorsHelper<T, P extends string = ""> = {
  [K in keyof T]:
    IsPrimitive<T[K]> extends true
      ? { [Key in `${P}${K & string}`]: (value: T[K]) => boolean }
      : T[K] extends object
        ? ValidatorsHelper<T[K], `${P}${K & string}.`>
        : never;
}[keyof T];

export type Validators<T> = MergeAll<ValidatorsHelper<T>>;