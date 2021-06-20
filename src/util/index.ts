import * as elements from './element';
import * as utils from './utils';
import * as localStorage from './localstorage';
const util: SaltUtil = {
  ...elements,
  ...utils,
  ...localStorage,
};
export default util;
