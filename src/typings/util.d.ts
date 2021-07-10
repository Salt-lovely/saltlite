// util
interface SaltUtil {
  /**
   * 断言一个情况
   * @param condition 需要判定的情况
   * @param message 如果不符, 则抛出的报错信息
   */
  assert(condition: any, message = '出错了'): asserts condition;
  /** 获取全局对象 */
  getGlobalThis(): Window;
  /**
   * 根据key存入本地存储
   * @param key 键值
   * @param value 要存放的值
   */
  write(key: string, value: any);
  /**
   * 根据key读取本地数据, **注意可能返回null**
   *
   * 推荐使用`readWithDefault`
   * @param key 键值
   */
  read<T>(key: string): T;
  /**
   * 根据key读取本地数据，若没有则写入默认数据
   * @param key 键值
   * @param defaultValue 默认值
   */
  readWithDefault<T>(key: string, defaultValue: T): T;
  /**
   * 判断是否为特定类型的数组
   * @param obj 要判断的对象
   * @param check 检查数组内容的方法
   */
  isArray<T>(obj: any, check: (elem: any) => elem is T): obj is Array<T>;
  /** 判断是否为`bigint`型 */
  isBigint(obj: any): obj is bigint;
  /** 判断是否为`boolean`型 */
  isBoolean(obj: any): obj is boolean;
  /** 判断是否为函数 */
  isFunction(obj: any): obj is Function;
  /** 判断是否为`HTMLElement`实例 */
  isHTMLlement(obj: any): obj is HTMLElement;
  /** 判断是否为数字 */
  isNumber(obj: any): obj is number;
  /** 判断是否为对象 */
  isObject(obj: any): obj is object;
  /** 判断是否为字符串 */
  isString(obj: any): obj is string;
  /** 判断是否为`symbol`型 */
  isSymbol(obj: any): obj is symbol;
  /** 判断是不是未定义类型 */
  isUndefined(obj: any): obj is undefined;
  /**
   *
   * @param obj 被扩展对象
   * @param prop 扩展对象
   * @param options 扩展选项, 默认使用**不可枚举、可编辑、可覆写**
   */
  extend<O extends object, N extends object>(
    obj: O,
    prop: N,
    options?: {
      enumerable?: boolean;
      configurable?: boolean;
      writable?: boolean;
    }
  ): O;
}
interface anyObj {
  [index: any]: any;
}
