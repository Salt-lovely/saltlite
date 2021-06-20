// polyfill.ts
interface HTMLElement {
  /**
   * 用法同 `.classList.add` , 为流式编程设计
   * @param className 类名
   */
  addClass(...className: string[]): HTMLElement;
  /**
   * 用法同 `.classList.remove` , 为流式编程设计
   * @param className 类名
   */
  removeClass(...className: string[]): HTMLElement;
  /**
   * 切换类名功能, 可用于流式编程
   * @param className 类名
   */
  toggleClass(...className: string[]): HTMLElement;
  /**
   * 用法同 `.classList.contains` , **不能流式编程**只是为了好看
   * @param className 类名
   */
  hasClass(className: string): boolean;
  /**
   * 将子元素批量附到这个元素上, 可流式编程
   * @param children 子元素数组
   */
  appendChildren(...children: Node[]): HTMLElement;
  /**
   * 设置元素的行内样式, 可流式编程
   * @param prop 属性名
   * @param value 属性值
   */
  css(prop: string, value: string): HTMLElement;
  /**
   * 批量设置元素的行内样式, 可流式编程
   * @param styles { 属性名: 属性值, ... }
   */
  css(styles: { [index: string]: string }): HTMLElement;
}
