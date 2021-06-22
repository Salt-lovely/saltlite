import * as utils from './utils';
import * as localStorage from './localstorage';
const util: SaltUtil = {
  ...utils,
  ...localStorage,
};
export default util;
