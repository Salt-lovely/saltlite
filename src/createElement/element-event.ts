import { forSafePropsInObject } from '../safe/unsafeProps';
import { isFunction, isString } from '../util/typeGuard';

/**
 * 用于将事件名统一为全小写
 *
 * 这样写代码的时候就能用驼峰事件名了
 *
 * 虽说是我在文档里写 `onDblClick` 这样驼峰写法的属性
 *
 * 但是，DOM API可不认驼峰写法的事件名
 *
 * 所以要将其变成纯小写属性名，然后清理驼峰属性名
 *
 * 出于性能考量，这里不用 `delete` 而是赋值 `undefined`
 */
export function eventNameFix<K extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[K],
  props: createHTMLElementProps
) {
  forSafePropsInObject(
    props,
    (p, v) => {
      // 事件属性名必须是o开头的字符串
      if (!isString(p) || p.length < 3 || p.slice(0, 2).toLocaleLowerCase() !== 'on') {
        return;
      }
      const lc = p.toLocaleLowerCase();
      const eventName = lc.slice(2, lc.length); // 使用 addEventListener 添加监听
      // @ts-ignore
      if (isFunction(v)) element.addEventListener(eventName, v, false);
      // 不管是不是有效方法，都要删除属性
      // @ts-ignore ts(2590)
      props[p] = undefined;
    },
    true
  );
}
