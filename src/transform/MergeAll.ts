export type MergeAll<T> = (
  T extends any ? (x: T) => void : never
) extends (x: infer R) => void ? R : never;

/*
Example:

type result = MergeAll<{ a: string } | { b: number }>;

result: { a: string } & { b: number }

*/
