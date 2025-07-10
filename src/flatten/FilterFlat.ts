import { MergeAll } from "../transform/MergeAll";
import { IsPrimitive } from "./IsPrimitive";

type FilterFlatHelper<T, P extends string = ""> = {
  [K in keyof T]:
    IsPrimitive<T[K]> extends true
      ? { [Key in `${P}${K & string}`]: (value: T[K]) => boolean }
      : T[K] extends object
        ? FilterFlatHelper<T[K], `${P}${K & string}.`>
        : never;
}[keyof T];

export type FilterFlat<T> = MergeAll<FilterFlatHelper<T>>;

/*

Example:

type Entry = {
  usuario: {
    nombre: string;
    edad: number;
    etiquetas: string[];
  };
};

type result = FilterFlat<Entry>;

type result = {
    "usuario.nombre": (value: string) => boolean;
} & {
    "usuario.edad": (value: number) => boolean;
} & {
    "usuario.etiquetas": (value: string[]) => boolean;
}

*/