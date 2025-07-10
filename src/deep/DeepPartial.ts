export type DeepParital<T> = {
  [K in keyof T]?: T[K] extends object
    ? T[K] extends Array<infer U>
      ? Array<DeepParital<U>>
      : DeepParital<T[K]>
    : T[K];
};