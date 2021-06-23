const unsafePropNames: Set<string | number> = new Set([
  '__proto__',
  'constructor',
  'prototype',
  'toString',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'isPrototypeOf',
  'propertyIsEnumerable',
]);
function isUnsafePropName(propName: string | number) {
  return unsafePropNames.has(propName);
}
function isSafePropName(propName: string | number) {
  return !unsafePropNames.has(propName);
}
function filterUnsafeProp<T extends object>(obj: T): T {
  for (const p in obj) {
    if (isUnsafePropName(p)) {
      // @ts-ignore
      obj[p] = undefined;
    }
  }
  return obj;
}
export { isSafePropName, isUnsafePropName, filterUnsafeProp };
