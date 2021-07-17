import { isUndefined } from '../util/typeGuard';

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
export function isUnsafePropName(propName: string | number) {
  return unsafePropNames.has(propName);
}
export function isSafePropName(propName: string | number) {
  return !unsafePropNames.has(propName);
}
export function filterUnsafeProp<T extends object>(obj: T): T {
  for (const p in obj) {
    if (isUnsafePropName(p)) {
      // @ts-ignore
      obj[p] = undefined;
    }
  }
  return obj;
}
export function forSafePropsInObject<T extends object, P extends Extract<keyof T, string>>(
  obj: T,
  fn?: (propName: P, value: T[P]) => void,
  deleteUnsafeProp = false
): T {
  // 没有回调
  if (!fn) {
    // 只过滤
    if (deleteUnsafeProp) return filterUnsafeProp(obj);
    // 啥都不干
    else return obj;
  }
  // 按处理不安全属性分
  if (deleteUnsafeProp) {
    // 删除可疑属性
    for (const p in obj)
      if (!isUndefined(obj[p])) {
        // 忽略undefined项, 仅对不可疑的属性执行回调
        if (isSafePropName(p)) fn(p as P, obj[p as P]);
        // 顺道删掉可疑属性
        // @ts-ignore
        else obj[p] = undefined;
      }
  } else {
    // 不删除可疑属性
    for (const p in obj) {
      if (!isUndefined(obj[p]) && isSafePropName(p)) {
        // 忽略undefined项, 仅对不可疑的属性执行回调
        fn(p as P, obj[p as P]);
      }
    }
  }

  return obj;
}
