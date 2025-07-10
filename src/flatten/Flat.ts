import { MergeAll } from "../transform/MergeAll";
import { FlatHelper } from "./FlatHelper";

export type Flat<T> = MergeAll<FlatHelper<T>>;
/*
Example:

type Entry = {
  usuario: {
    nombre: string;
    edad: number;
  };
  direccion: {
    ciudad: string;
  };
};

type result = Flat<Entry>;

result = {
  "usuario.nombre": string;
} & {
  "usuario.edad": number;
} & {
  "direccion.ciudad": string;
}

*/