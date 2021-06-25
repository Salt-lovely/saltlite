import { forSafePropsInObject, isSafePropName } from '../safe/unsafeProps';
import { assert } from '../util/utils';
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
    if (typeof props === 'object') {
      // 处理事件
      eventNameFix(el, props);
      forSafePropsInObject(props as createHTMLElementPropsMap[K], (p, v) => {
        // @ts-ignore
        el[p] = v; // 这一步是属于js的魔法
      });
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
function createElements<Tag extends keyof HTMLElementTagNameMap, Elem extends AllHTMLElementMap, P>(
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
): Array<HTMLElementTagNameMap[Tag] | Elem | HTMLSpanElement> {
  // 断言这是一个数组
  assert(props instanceof Array, 'createElements 方法只接受一个数组作为有效输入');
  return props.map((p) => {
    if (typeof p === 'string') return createElement('span', { textContent: p });
    // @ts-ignore
    else if (typeof p.tagName === 'string') return createElement(p.tagName, p.props, p.children);
    // @ts-ignore
    else return createElement(p.customElement, p.props, p.children);
  });
}
export { createElement, createElements };
