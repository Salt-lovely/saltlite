/// <reference path="./util-createElement.d.ts" />
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
   * 创建一**个** HTMLElement 而不用写大量的赋值语句
   *
   * 类似于 React 的 createElement 但这个会返回实例
   *
   * 由于缺少过滤机制, 请严格遵守 JS 文档和代码提示
   * @param tagName 元素标签名
   * @param props 元素属性, 如 `className`、`textContent`等
   * @param children 元素的子元素们
   */
  createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    props?: createHTMLElementPropsMap[K],
    children?: Node | Node[]
  ): HTMLElementTagNameMap[K];
  /**
   * 创建一**个** HTMLElement 而不用写大量的赋值语句
   *
   * 类似于 React 的 createElement 但这个会返回实例
   *
   * 由于缺少过滤机制, 请严格遵守 JS 文档和代码提示
   * @param customElement 你自己的模板函数
   * @param props 元素属性, 如 `className`、`textContent`等
   * @param children 元素的子元素们
   */
  createElement<K extends keyof HTMLElementTagNameMap, P>(
    customElement: (props: P, children?: Node | Node[]) => HTMLElementTagNameMap[K],
    props: P,
    children?: Node | Node[]
  ): HTMLElementTagNameMap[K];
  /**
   * 创建一**堆** HTMLElement 而不用写大量的赋值语句
   *
   * 类似于 React 的 createElement 但这个会返回实例数组
   *
   * 更多信息请参阅 `createElement` 方法的文档
   * @param props 一个数组, 其中每个对象都将传入 `createElement` 方法生成新元素, 你也可以只传入一个字符串来自动生成span元素
   */
  createElements<K extends keyof HTMLElementTagNameMap, P>(
    props: (
      | {
          tagName: K;
          props?: createHTMLElementPropsMap[K];
          children?: Node | Node[];
        }
      | {
          customElement: (props: P, children?: Node | Node[]) => HTMLElementTagNameMap[K];
          props: P;
          children?: Node | Node[];
        }
      | string
    )[]
  ): Array<HTMLElementTagNameMap[K]>;
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
