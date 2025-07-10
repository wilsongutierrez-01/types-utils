export type BuildPath<Path extends string[], T> =
  Path extends [infer Head, ...infer Rest]
    ? Head extends string
      ? Rest extends string[]
        ? { [K in Head]: BuildPath<Rest, T> }
        : never
      : never
    : T;

/*  
Example:

type result = BuildPath<["user", "name"], string>;

result = {
  user: {
    name: string;
  };
}

*/
