export type IsPrimitive<T> = T extends string | number | boolean | any[] ? true : false;
