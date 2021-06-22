/// <reference path="./polyfill.d.ts" />
/// <reference path="./query.d.ts" />
/// <reference path="./util.d.ts" />
/// <reference path="./createElement.d.ts" />
interface SaltLite extends SaltQuery, SaltUtil, SaltCreateElement {}
declare var SaltLite: SaltLite;
