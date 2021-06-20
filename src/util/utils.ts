export function getGlobalThis(): Window {
  return typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof self !== 'undefined'
    ? self
    : // @ts-ignore
    typeof global !== 'undefined'
    ? // @ts-ignore
      global
    : (0, eval)('this'); // 有风险
}
export function assert(condition: any, message = '出错了'): asserts condition {
  if (!condition) throw new Error(message);
}
