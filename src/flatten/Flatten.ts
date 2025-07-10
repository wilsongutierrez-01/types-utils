type Flat<T> =  {
  [K in keyof T as T[K] extends object ? never : K]: T[K];
};

type Expand<T> = {
  [K in keyof T]: T[K] extends object ? T[K] : never;
}[keyof T] extends infer O
  ? {
    [K in keyof O]: O[K];
    }
  : never;

export type Flatten<T> = Flat<T> & Expand<{
  [K in keyof T as T[K] extends object ? K : never]: Flatten<T[K]>;
}>;