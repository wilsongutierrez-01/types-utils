import { IsPrimitive } from "./IsPrimitive";

export type FlatHelper<T, P extends string = ""> = {
  [K in keyof T]:
    IsPrimitive<T[K]> extends true
      ? { [Key in `${P}${K & string}`]: T[K] }
      : T[K] extends object
        ? FlatHelper<T[K], `${P}${K & string}.`>
        : never;
}[keyof T];