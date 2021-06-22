import { isSafePropName } from '../safe/unsafeProps';
import { eventNameFix } from './element-event';

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: createHTMLElementPropsMap[K],
  children?: acceptableChildren
): HTMLElementTagNameMap[K];
function createElement<K extends keyof HTMLElementTagNameMap, P>(
  customElement: (props: P, children?: acceptableChildren) => HTMLElementTagNameMap[K],
  props: P,
  children?: acceptableChildren
): HTMLElementTagNameMap[K];
function createElement<K extends keyof HTMLElementTagNameMap, P>(
  argu1: K | ((props?: P, children?: acceptableChildren) => HTMLElementTagNameMap[K]),
  props: createHTMLElementPropsMap[K] | P,
  children?: acceptableChildren
): HTMLElementTagNameMap[K] {
  if (typeof argu1 === 'function') {
    return argu1(props as P, children);
  } else {
    const el = document.createElement(argu1 as K);
    if (props) {
      // 处理事件
      eventNameFix(el, props);
      // @ts-ignore
      for (const p in props) {
        // @ts-ignore
        if (typeof props[p] !== 'undefined' && isSafePropName(p))
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
        children?: acceptableChildren;
      }
    | {
        customElement: (props: P, children?: acceptableChildren) => HTMLElementTagNameMap[K];
        props: P;
        children?: acceptableChildren;
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
