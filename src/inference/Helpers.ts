export type GetParams<T> = T extends (...args: infer P) => any ? P : never;

export type GetReturn<T> = T extends (...args: any) => infer R ? R : never;

type MiFn = (x: number, y: string) => boolean;

/* 
Example:

type Params = GetParams<MiFn>; // [number, string]
type Return = GetReturn<MiFn>;   // boolean

*/

export type PrefixWith<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
}

/*
Example:

type User = { nombre: string; activo: boolean };
type UserLog = PrefixWith<User, "log">;

UserLog = {
  logNombre: string;
  logActivo: boolean;
}

*/
