// safe.ts
interface SaltSafe {
  /** 判断这个属性名是否为可疑属性名 */
  isUnsafePropName(propName: string | number): boolean;
  /** 判断这个属性名是否为安全属性名 */
  isSafePropName(propName: string | number): boolean;
  /**
   * 将可疑的属性名置为`undefined`
   *
   * **副作用函数**
   */
  filterUnsafeProp<T extends object>(obj: T): T;
  /**
   * 遍历数组中的属性，跳过`undefined`和可疑属性
   *
   * **副作用函数**
   * @param obj 存在可疑属性对象
   * @param fn 每个循环体调用的回调函数
   * @param deleteUnsafeProp 是否删除可疑属性（置为`undefined`）默认不删除
   */
  forSafePropsInObject<T extends object, P extends Extract<keyof T, string>>(
    obj: T,
    fn: (propName: P, value: T[P]) => void,
    deleteUnsafeProp = false
  ): T;
}
