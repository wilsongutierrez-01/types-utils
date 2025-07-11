import { Validators } from "./Validators";

export function Validate<T>(
  object: T,
  validators: Validators<T>
): Record<string, boolean> {
  const results: Record<string, boolean> = {}

  for (const key in validators) {
    const parts = key.split(".");
    let currentValue: any = object;

    for (const part of parts) {
      if (currentValue && typeof currentValue === "object" && part in currentValue) {
        currentValue = currentValue[part];
      } else {
        currentValue = undefined;
        break;
      }
    }

    const validator = validators[key]
    if (typeof validator === "function") {
      results[key] = validator(currentValue)
    } else {
      results[key] = false
    }
  }

  return results;
}
/*

Example:

type Form = {
  user: {
    name: string;
    age: number;
    interested: string[];
  };
  address: {
    city: string;
    country: string;
  };
};

const data: Form = {
  user: {
    name: "Wilson",
    age: 22,
    interested: ["typescript", "backend"],
  },
  address: {
    city: "San Salvador",
    country: "El Salvador",
  },
};

const validators = {
  "user.name": (v: string) => v.length > 0,
  "user.age": (v: number) => v >= 18,
  "user.interested": (v: string[]) => v.length > 0,
  "address.city": (v: string) => v.length > 0,
  "address.country": (v: string) => v.length >= 3,
};


console.log(Validate(data, validators));

*/