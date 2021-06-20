// 选择器封装
// 根据id选择
function queryId(elementId: string): HTMLElement | null {
  return document.getElementById(elementId);
}
// 根据类名选择
function queryClass(className: string): HTMLCollectionOf<Element> {
  return document.getElementsByClassName(className);
}
function queryClassAsHTMlElementArr(className: string): HTMLElement[] {
  return Array.from(document.getElementsByClassName(className)).filter(
    (el) => el instanceof HTMLElement
  ) as HTMLElement[];
}
// 根据名字选择
function queryName(elementName: string): NodeListOf<HTMLElement> {
  return document.getElementsByName(elementName);
}
function queryNameAsHTMlElementArr(elementName: string): HTMLElement[] {
  return Array.from(document.getElementsByName(elementName));
}
// 根据标签名选择
function queryTag<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]> {
  return document.getElementsByTagName(qualifiedName);
}
function queryTagAsHTMlElementArr<K extends keyof HTMLElementTagNameMap>(
  qualifiedName: K
): Array<HTMLElementTagNameMap[K]> {
  return Array.from(document.getElementsByTagName(qualifiedName));
}
// 用css选择器
function query<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
function query<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
function query(selectors: string): Element | null;
function query(selectors: string) {
  return document.querySelector(selectors);
}

function queryAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
function queryAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
function queryAll(selectors: string): NodeListOf<Element>;
function queryAll(selectors: string) {
  return document.querySelectorAll(selectors);
}

function queryHTMLElement<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
function queryHTMLElement(selectors: string): HTMLElement | null;
function queryHTMLElement(selectors: string) {
  const temp = document.querySelector(selectors);
  return temp instanceof HTMLElement ? temp : null;
}

function queryAllHTMLElement<K extends keyof HTMLElementTagNameMap>(selectors: K): Array<HTMLElementTagNameMap[K]>;
function queryAllHTMLElement(selectors: string): HTMLElement[];
function queryAllHTMLElement(selectors: string) {
  return Array.from(document.querySelectorAll(selectors)).filter((el) => el instanceof HTMLElement);
}
// 一个综合选择器
function Query<K extends keyof HTMLElementTagNameMap>(
  selector: AdvancedQuerySelector<K>
): Array<HTMLElementTagNameMap[K]> {
  let temp: Array<HTMLElementTagNameMap[K]>;
  if (!selector.css) {
    temp = queryTagAsHTMlElementArr(selector.tagName);
  } else {
    // HTML标准: https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents
    // The HTML DOM returns the tagName of an HTML element in the canonical uppercase form, regardless of the case in the source HTML document.
    // HTML 文档对象模型返回元素的简洁大写格式标签, 不管源代码中元素标签的大小写。
    const _tag = selector.tagName.toUpperCase();
    temp = queryAllHTMLElement(selector.css).filter((el) => el.tagName === _tag) as Array<HTMLElementTagNameMap[K]>;
  }
  return selector.count ? temp.slice(0, selector.count) : temp;
}
// 全部导出
export {
  queryId,
  queryClass,
  queryClassAsHTMlElementArr,
  queryName,
  queryNameAsHTMlElementArr,
  queryTag,
  queryTagAsHTMlElementArr,
  query,
  queryAll,
  queryHTMLElement,
  queryAllHTMLElement,
  Query,
};
