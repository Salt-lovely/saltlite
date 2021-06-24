import * as utils from './utils';
import * as localStorage from './localstorage';
import * as typeGuard from './typeGuard';
const util: SaltUtil = {
  ...utils,
  ...localStorage,
  ...typeGuard,
};
export default util;
