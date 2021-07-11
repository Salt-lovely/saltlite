/*!
 * @Name saltlite
 * @License MulanPSL
 * @Description Salt lovely's light-weight frontend lib
 */
/*!
Copyright (c) 2021 Salt-lovely
Saltlite is licensed under Mulan PSL v2.
You can use this software according to the terms and conditions of the Mulan PSL v2.
You may obtain a copy of Mulan PSL v2 at:
         http://license.coscl.org.cn/MulanPSL2
THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
See the Mulan PSL v2 for more details.
*/
// 整个SaltLite的入口
import polyfill from './polyfill/index';
import nativeExtend from './extends/index';
import safe from './safe/index';
import element from './createElement/index';
import util from './util/index';
import * as query from './query';

/**
 * 输入URL获取垫片服务, 或者留空使用默认的垫片服务, 设为false
 *
 * 推荐: https://github.com/Financial-Times/polyfill-service
 */
const polyfillURL: string | false | undefined = false;

// 打印到控制台
console.log(
  '%c SaltLite Frontend Lib, With MulanPSL, By Salt-lovely. ',
  'color: royalblue; background-color: #fffaf0;'
);

// 垫片
polyfill(polyfillURL);

// 扩展原生对象
nativeExtend();

/** 全局对象 */
const global: any = util.getGlobalThis();

/** SaltLite对象 */
const SaltLite: SaltLite = {
  ...safe,
  ...element,
  ...util,
  ...query,
};

Object.freeze(SaltLite);

global['SaltLite'] = SaltLite;
// global['saltlite'] = SaltLite;
if (!global['sl']) global['sl'] = SaltLite;
if (!global['SL']) global['SL'] = SaltLite;

export default SaltLite;
