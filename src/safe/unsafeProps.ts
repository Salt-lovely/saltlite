const unsafeNames: Set<string | number> = new Set([
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
  return unsafeNames.has(propName);
}
function isSafePropName(propName: string | number) {
  return !unsafeNames.has(propName);
}
export { isSafePropName, isUnsafePropName };
