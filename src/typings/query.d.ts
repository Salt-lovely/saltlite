// query.ts
interface AdvancedQuerySelector<K extends keyof HTMLElementTagNameMap> {
  /** 指定类型的标签名 */
  tagName: K;
  /** css选择器 */
  css?: string;
  /** 最大数量 */
  count?: number;
}
interface SaltQuery {
  /**
   * 主要写给 TypeScript 使用者的查询方法, 返回特定标签名的 HTMLElement 数组
   *
   * 如果使用 JavaScript 或者喜欢用断言的话, 请无视这个方法
   *
   * ```
   * queryAllHTMLElement('input.text') // HTMLElement[]
   * // 可以用 queryAllHTMLElement('input.text') as HTMLInputElement[] 替代
   * Query({tagName: 'input', css: 'input.text'}) // HTMLInputElement[]
   * Query({tagName: 'input', css: '.text'}) // HTMLInputElement[]
   * Query({tagName: 'input'}) // HTMLInputElement[]
   * ```
   *
   * **注意这个不是 `query()`**
   *
   * @param selector 选择器, 返回指定tagName的 HTMLElement 数组
   */
  Query<K extends keyof HTMLElementTagNameMap>(selector: AdvancedQuerySelector<K>): Array<HTMLElementTagNameMap[K]>;
  /**
   * 根据元素 id 获取元素
   * @param elementId 元素的`id`属性值
   */
  queryId: (elementId: string) => HTMLElement | null;
  /**
   * 根据元素类名获取元素
   * @param className 元素的类名
   */
  queryClass: (className: string) => HTMLCollectionOf<Element>;
  /**
   * 根据元素类名获取元素, 返回 HTMLElement 数组
   * @param className 元素的类名
   */
  queryClassAsHTMlElementArr: (className: string) => HTMLElement[];
  /**
   * 根据元素的名字获取元素
   * @param elementName 元素的`name`属性值
   */
  queryName(elementName: string): NodeListOf<HTMLElement>;
  /**
   * 根据元素的名字获取元素, 返回 HTMLElement 数组
   * @param elementName 元素的`name`属性值
   */
  queryNameAsHTMlElementArr(elementName: string): HTMLElement[];
  /**
   * 根据元素标签名获取元素
   * @param qualifiedName 标签名
   */
  queryTag<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
  /**
   * 根据元素标签名获取元素, 返回 HTMLElement 数组
   * @param qualifiedName 标签名
   */
  queryTagAsHTMlElementArr<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): Array<HTMLElementTagNameMap[K]>;
  /**
   * 根据选择器获取第一个符合的元素, 没有则返回null, **注意这个不是 `Query()`**
   * @param selectors CSS 格式的选择器
   */
  query<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
  query<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
  query(selectors: string): Element | null;
  /**
   * 根据选择器获取所有符合的元素, 没有则返回一个空的 NodeList
   * @param selectors CSS 格式的选择器
   */
  queryAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
  queryAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
  queryAll(selectors: string): NodeListOf<Element>;
  /**
   * 根据选择器获取第一个符合的 HTMLElement 元素, 没有则返回null
   * @param selectors CSS 格式的选择器
   */
  queryHTMLElement<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
  queryHTMLElement(selectors: string): HTMLElement | null;
  /**
   * 根据选择器获取所有符合的 HTMLElement 元素, 没有则返回空数组
   * @param selectors CSS 格式的选择器
   */
  queryAllHTMLElement<K extends keyof HTMLElementTagNameMap>(selectors: K): Array<HTMLElementTagNameMap[K]>;
  queryAllHTMLElement(selectors: string): HTMLElement[];
}
