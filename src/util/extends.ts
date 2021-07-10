import { forSafePropsInObject } from '../safe/unsafeProps';

function extend<O extends object, N extends object>(
  obj: O,
  prop: N,
  options?: {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
  }
): O {
  const enumerable = options?.enumerable ?? false;
  const configurable = options?.enumerable ?? true;
  const writable = options?.writable ?? true;
  forSafePropsInObject(prop, (key, value) => {
    Object.defineProperty(obj, key, {
      enumerable,
      configurable,
      writable,
      value,
    });
  });
  return obj;
}

export { extend };
