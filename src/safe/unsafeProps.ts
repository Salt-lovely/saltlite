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
  // 忽略undefined项
  for (const p in obj)
    if (typeof obj[p] !== 'undefined') {
      // 仅对不可疑的属性执行回调
      if (isSafePropName(p)) fn(p as P, obj[p as P]);
      // 顺道删掉可疑属性
      // @ts-ignore
      else if (deleteUnsafeProp) obj[p] = undefined;
    }

  return obj;
}
export { isSafePropName, isUnsafePropName, filterUnsafeProp, forSafePropsInObject };
