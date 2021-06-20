import { isSafePropName } from '../safe/unsafeProps';

/**
 * 用于将事件名统一为全小写
 *
 * 这样写代码的时候就能用驼峰事件名了
 */
const eventName = new Set([
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseover',
  'onmouseout',
  'onmouseup',
  'onblur',
  'onfocus',
  'oninput',
  'onchange',
  'onload',
  'onunload',
  'onerror',
]);
/**
 * 用 eventName 哈希表查这里有没有未小写的事件名
 *
 * 虽说是我在文档里写 `onDblClick` 这样驼峰写法的属性
 *
 * 咳咳，DOM API可不认驼峰写法的事件名
 *
 * 所以要将其变成纯小写属性名，然后清理驼峰属性名
 *
 * 出于性能考量，这里不用 `delete` 而是赋值 `undefined`
 */
function eventNameFix(props: createHTMLElementProps) {
  for (const p in props) {
    if (typeof p !== 'string') {
      props[p] = <never>undefined;
      continue;
    }
    const lc = p.toLocaleLowerCase();
    if (lc[0] === 'o' && eventName.has(lc) && p !== lc) {
      // @ts-ignore
      props[lc] = props[p];
      // @ts-ignore
      props[p] = undefined;
    }
  }
}
function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: createHTMLElementPropsMap[K],
  children?: Node | Node[]
): HTMLElementTagNameMap[K];
function createElement<K extends keyof HTMLElementTagNameMap, P>(
  customElement: (props: P, children?: Node | Node[]) => HTMLElementTagNameMap[K],
  props: P,
  children?: Node | Node[]
): HTMLElementTagNameMap[K];
function createElement<K extends keyof HTMLElementTagNameMap, P>(
  argu1: K | ((props?: P, children?: Node | Node[]) => HTMLElementTagNameMap[K]),
  props: createHTMLElementPropsMap[K] | P,
  children?: Node | Node[]
): HTMLElementTagNameMap[K] {
  if (typeof argu1 === 'function') {
    return argu1(props as P, children);
  } else {
    const el = document.createElement(argu1 as K);
    if (props) {
      // @ts-ignore
      eventNameFix(props);
      // @ts-ignore
      for (const p in props) {
        // @ts-ignore
        if (typeof (props as createHTMLElementPropsMap[K])[p] !== 'undefined' && isSafePropName(p))
          // @ts-ignore
          el[p] = props[p]; // 这一步是属于js的魔法
      }
    }
    if (children) {
      if (children instanceof Array) {
        el.appendChildren(...children);
      }
      // 因为 DocumentFragment 属于 Node
      else if (children instanceof Node) el.appendChild(children);
    }
    return el;
  }
}
function createElements<K extends keyof HTMLElementTagNameMap, P>(
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
): Array<HTMLElementTagNameMap[K]> {
  return props.map((p) => {
    if (typeof p === 'string') return createElement('span', { textContent: p });
    // @ts-ignore
    else if (typeof p.tagName === 'string') return createElement(p.tagName, p.props, p.children);
    // @ts-ignore
    else return createElement(p.customElement, p.props, p.children);
  });
}
export { createElement, createElements };
