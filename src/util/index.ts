import * as utils from './utils';
import * as localStorage from './localstorage';
import * as typeGuard from './typeGuard';
import * as extend from './extends';
const util: SaltUtil = {
  ...utils,
  ...localStorage,
  ...typeGuard,
  ...extend,
};
export default util;
