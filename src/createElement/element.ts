import { forSafePropsInObject } from '../safe/unsafeProps';
import { isFunction, isObject, isString } from '../util/typeGuard';
import { assert } from '../util/otherUtils';
import { eventNameFix } from './element-event';

// 两个重载
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props?: createHTMLElementPropsMap[K] | null,
  children?: acceptableChildren | null
): HTMLElementTagNameMap[K];
export function createElement<K extends keyof HTMLElementTagNameMap, P>(
  customElement: (props: P, children?: acceptableChildren) => HTMLElementTagNameMap[K],
  props: P,
  children?: acceptableChildren | null
): HTMLElementTagNameMap[K];
// 实现
export function createElement<K extends keyof HTMLElementTagNameMap, P>(
  argu1: K | ((props?: P, children?: acceptableChildren) => HTMLElementTagNameMap[K]),
  props: createHTMLElementPropsMap[K] | null | P,
  children?: acceptableChildren | null
): HTMLElementTagNameMap[K] {
  if (isFunction(argu1)) {
    return argu1(props as P, children ? children : undefined);
  } else if (isString(argu1)) {
    const el = document.createElement(argu1);
    if (isObject(props) && props) {
      // 处理事件
      eventNameFix(el, props);
      forSafePropsInObject(
        props,
        (p, v) => {
          // @ts-ignore
          el[p] = v; // 这一步是属于js的魔法
        },
        false
      );
    }
    if (children) {
      if (children instanceof Array) {
        el.appendChildren(...children);
      }
      // 因为 DocumentFragment 属于 Node
      else if (children instanceof Node) el.appendChild(children);
      // 或者是个字符串
      else if (isString(children)) el.appendChild(document.createTextNode(children));
    }
    return el;
  } else {
    return <never>createElement('span');
  }
}
export function createElements<Tag extends keyof HTMLElementTagNameMap, Elem extends AllHTMLElementMap, P>(
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
