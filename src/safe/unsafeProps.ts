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
function forSafePropsInObject<T extends object, P extends Extract<keyof T, string>>(
  obj: T,
  fn: (propName: P, value: T[P]) => void,
  deleteUnsafeProp = false
): T {
  for (const p in obj) {
    const isSafe = isSafePropName(p);
    if (isSafe && typeof obj[p] !== 'undefined') {
      // @ts-ignore
      fn(p, obj[p]);
    } else if (!isSafe && deleteUnsafeProp) {
      // 顺道删掉可疑属性
      // @ts-ignore
      obj[p] = undefined;
    }
  }
  return obj;
}
export { isSafePropName, isUnsafePropName, filterUnsafeProp, forSafePropsInObject };
