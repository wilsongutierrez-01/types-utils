export type Split<S extends string, D extends string = "."> = 
  S extends `${infer Head}${D}${infer Tail}`
    ? [Head, ...Split<Tail, D>]
    : [S];

/*
Example:
type result = Split<"user.address.country">;

result = ["user", "address", "country"]
*/