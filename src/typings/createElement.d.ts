/// <reference path="./createElementTypings/map.d.ts" />
/** 可接受的节点 */
type acceptableChild = Node | string;
/** 可接受的子节点输入 */
type acceptableChildren = acceptableChild | acceptableChild[];
interface SaltCreateElement {
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
    children?: acceptableChildren
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
    customElement: (props: P, children?: acceptableChildren) => HTMLElementTagNameMap[K],
    props: P,
    children?: acceptableChildren
  ): HTMLElementTagNameMap[K];
  /**
   * 创建一**堆** HTMLElement 而不用写大量的赋值语句
   *
   * 将调用 createElement 但这个会返回实例数组
   *
   * 同时纯文字将变为 span 元素
   *
   * 更多信息请参阅 `createElement` 方法的文档
   * @param props 一个数组, 其中每个对象都将传入 `createElement` 方法生成新元素, 你也可以只传入一个字符串来自动生成span元素
   */
  createElements: SaltCreateElements;
}
interface SaltCreateElements {
  // 字符串 -> span
  (props: string[]): Array<HTMLSpanElement>;
  // tagname -> HTMLElementTagNameMap[Tag]
  <Tag extends keyof HTMLElementTagNameMap>(
    props: {
      tagName: Tag;
      props?: createHTMLElementPropsMap[Tag];
      children?: acceptableChildren;
    }[]
  ): Array<HTMLElementTagNameMap[Tag]>;
  // customElement
  <Elem extends HTMLElement, P>(
    props: {
      customElement: (props: P, children?: acceptableChildren) => Elem;
      props: P;
      children?: acceptableChildren;
    }[]
  ): Array<Elem>;
  // 字符串 tagname
  <Tag extends keyof HTMLElementTagNameMap>(
    props: (
      | {
          tagName: Tag;
          props?: createHTMLElementPropsMap[Tag];
          children?: acceptableChildren;
        }
      | string
    )[]
  ): Array<HTMLElementTagNameMap[Tag] | HTMLSpanElement>;
  // 字符串 customElement
  <Elem extends HTMLElement, P>(
    props: (
      | {
          customElement: (props: P, children?: acceptableChildren) => Elem;
          props: P;
          children?: acceptableChildren;
        }
      | string
    )[]
  ): Array<Elem | HTMLSpanElement>;
  // tagname customElement
  <Tag extends keyof HTMLElementTagNameMap, Elem extends HTMLElement, P>(
    props: (
      | {
          tagName: Tag;
          props?: createHTMLElementPropsMap[Tag];
          children?: acceptableChildren;
        }
      | {
          customElement: (props: P, children?: acceptableChildren) => Elem;
          props: P;
          children?: acceptableChildren;
        }
    )[]
  ): Array<HTMLElementTagNameMap[Tag] | Elem>;
  <Tag extends keyof HTMLElementTagNameMap, Elem extends HTMLElement, P>(
    props: (
      | {
          tagName: Tag;
          props?: createHTMLElementPropsMap[Tag];
          children?: acceptableChildren;
        }
      | {
          customElement: (props: P, children?: acceptableChildren) => Elem;
          props: P;
          children?: acceptableChildren;
        }
      | string
    )[]
  ): Array<HTMLElementTagNameMap[Tag] | Elem | HTMLSpanElement>;
}
