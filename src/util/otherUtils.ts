import { isObject } from './typeGuard';

export function getGlobalThis(): Window {
  return isObject(globalThis)
    ? globalThis
    : isObject(window)
    ? window
    : isObject(self)
    ? self
    : // @ts-ignore
    isObject(global)
    ? // @ts-ignore
      global
    : Function('return this')(); // 有风险
}
export function assert(condition: any, message = '出错了'): asserts condition {
  if (!condition) throw new Error(message);
}
