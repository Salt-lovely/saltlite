// safe.ts
interface SaltSafe {
  /** 判断这个属性名是否为可疑属性名 */
  isUnsafePropName(propName: string | number): boolean;
  /** 判断这个属性名是否为安全属性名 */
  isSafePropName(propName: string | number): boolean;
  /** 将可疑的属性名置为`undefined` */
  filterUnsafeProp<T extends object>(obj: T): T;
}
