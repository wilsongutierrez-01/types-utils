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
      if (currentValue && typeof currentValue === "object") {
        currentValue = currentValue[part];
      } else {
        currentValue = undefined;
        break;
      }
    }
    results[key] = validators[key](currentValue);
    // results[key] = validators[key](currentValue);
  }

  return results;
}