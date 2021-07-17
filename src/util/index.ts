import * as utils from './otherUtils';
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
