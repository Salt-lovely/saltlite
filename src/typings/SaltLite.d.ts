/// <reference path="./polyfill.d.ts" />
/// <reference path="./safe.d.ts" />
/// <reference path="./createElement.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./util.d.ts" />
interface SaltLite extends SaltQuery, SaltSafe, SaltCreateElement, SaltUtil {}
declare var SaltLite: SaltLite;
