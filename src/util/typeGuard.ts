function isNumber(obj: any): obj is number {
  return typeof obj === 'number';
}
function isString(obj: any): obj is string {
  return typeof obj === 'string';
}
function isBigint(obj: any): obj is bigint {
  return typeof obj === 'bigint';
}
function isBoolean(obj: any): obj is boolean {
  return typeof obj === 'boolean';
}
function isUndefined(obj: any): obj is undefined {
  return typeof obj === 'undefined';
}
function isSymbol(obj: any): obj is symbol {
  return typeof obj === 'symbol';
}
function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}
function isObject(obj: any): obj is object {
  return typeof obj === 'object';
}
function isArray<T>(obj: any, check: (elem: any) => elem is T): obj is Array<T> {
  // const isArr = typeof obj === 'object' && obj instanceof Array;
  return (
    typeof obj === 'object' &&
    obj instanceof Array &&
    (obj.length === 0 /* 空数组的话，就无论内容类型 */ || check(obj[0]))
  );
}
function isHTMLlement(obj: any): obj is HTMLElement {
  return typeof obj === 'object' && obj instanceof HTMLElement;
}
export { isArray, isBigint, isBoolean, isFunction, isHTMLlement, isNumber, isObject, isString, isSymbol, isUndefined };
