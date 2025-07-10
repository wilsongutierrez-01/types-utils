export type CreateHandlers<T extends string> = {
  [K in T as `on${Capitalize<K & string>}`]: () => void;
}

/*
Example:

type Events = "click" | "submit";

type result = CreateHandlers<Eventos>;

type result = {
  onClick: () => void;
  onSubmit: () => void;
}

*/