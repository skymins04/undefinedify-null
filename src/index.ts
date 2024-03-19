export function undefinedifyNull<T>(arg: T): any {
  if (arg === null || arg === undefined) return undefined;
  return arg;
}

export function undefinedifyNullProperties<T>(arg: T): any {
  if (arg === null || arg === undefined) return undefined;
  if (Array.isArray(arg)) {
    return arg.map(undefinedifyNullProperties);
  }
  if (typeof arg === 'object') {
    return Object.fromEntries(Object.entries(arg).map(([key, value]) => [key, undefinedifyNullProperties(value)]));
  }
  return arg;
}
