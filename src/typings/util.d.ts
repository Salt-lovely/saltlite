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
}
interface anyObj {
  [index: any]: any;
}
