import { forSafePropsInObject } from '../safe/unsafeProps';

/**
 * 用于将事件名统一为全小写
 *
 * 这样写代码的时候就能用驼峰事件名了
 */
const eventName = new Map([
  // 所有元素都有的事件
  ['onabort', 'abort'],
  ['onanimationcancel', 'animationcancel'],
  ['onanimationend', 'animationend'],
  ['onanimationiteration', 'animationiteration'],
  ['onanimationstart', 'animationstart'],
  ['onauxclick', 'auxclick'],
  ['onblur', 'blur'],
  ['oncancel', 'cancel'],
  ['oncanplay', 'canplay'],
  ['oncanplaythrough', 'canplaythrough'],
  ['onchange', 'change'],
  ['onclick', 'click'],
  ['onclose', 'close'],
  ['oncontextmenu', 'contextmenu'],
  ['oncuechange', 'cuechange'],
  ['ondblclick', 'dblclick'],
  ['ondrag', 'drag'],
  ['ondragend', 'dragend'],
  ['ondragenter', 'dragenter'],
  ['ondragexit', 'dragexit'],
  ['ondragleave', 'dragleave'],
  ['ondragover', 'dragover'],
  ['ondragstart', 'dragstart'],
  ['ondrop', 'drop'],
  ['ondurationchange', 'durationchange'],
  ['onemptied', 'emptied'],
  ['onended', 'ended'],
  ['onerror', 'error'],
  ['onfocus', 'focus'],
  ['ongotpointercapture', 'gotpointercapture'],
  ['oninput', 'input'],
  ['oninvalid', 'invalid'],
  ['onkeydown', 'keydown'],
  ['onkeypress', 'keypress'],
  ['onkeyup', 'keyup'],
  ['onload', 'load'],
  ['onloadeddata', 'loadeddata'],
  ['onloadedmetadata', 'loadedmetadata'],
  ['onloadstart', 'loadstart'],
  ['onlostpointercapture', 'lostpointercapture'],
  ['onmousedown', 'mousedown'],
  ['onmouseenter', 'mouseenter'],
  ['onmouseleave', 'mouseleave'],
  ['onmousemove', 'mousemove'],
  ['onmouseout', 'mouseout'],
  ['onmouseover', 'mouseover'],
  ['onmouseup', 'mouseup'],
  ['onpause', 'pause'],
  ['onplay', 'play'],
  ['onplaying', 'playing'],
  ['onpointercancel', 'pointercancel'],
  ['onpointerdown', 'pointerdown'],
  ['onpointerenter', 'pointerenter'],
  ['onpointerleave', 'pointerleave'],
  ['onpointermove', 'pointermove'],
  ['onpointerout', 'pointerout'],
  ['onpointerover', 'pointerover'],
  ['onpointerup', 'pointerup'],
  ['onprogress', 'progress'],
  ['onratechange', 'ratechange'],
  ['onreset', 'reset'],
  ['onresize', 'resize'],
  ['onscroll', 'scroll'],
  ['onsecuritypolicyviolation', 'securitypolicyviolation'],
  ['onseeked', 'seeked'],
  ['onseeking', 'seeking'],
  ['onselect', 'select'],
  ['onselectionchange', 'selectionchange'],
  ['onselectstart', 'selectstart'],
  ['onstalled', 'stalled'],
  ['onsubmit', 'submit'],
  ['onsuspend', 'suspend'],
  ['ontimeupdate', 'timeupdate'],
  ['ontoggle', 'toggle'],
  ['ontouchcancel', 'touchcancel'],
  ['ontouchend', 'touchend'],
  ['ontouchmove', 'touchmove'],
  ['ontouchstart', 'touchstart'],
  ['ontransitioncancel', 'transitioncancel'],
  ['ontransitionend', 'transitionend'],
  ['ontransitionrun', 'transitionrun'],
  ['ontransitionstart', 'transitionstart'],
  ['onvolumechange', 'volumechange'],
  ['onwaiting', 'waiting'],
  ['onwheel', 'wheel'],
  // 媒体元素
  ['onencrypted', 'encrypted'],
  ['onwaitingforkey', 'waitingforkey'],
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
function eventNameFix<K extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[K],
  props: createHTMLElementProps
) {
  forSafePropsInObject(props, (p, v) => {
    // 事件属性名必须是o开头的字符串
    if (typeof p !== 'string' || p[0].toLocaleLowerCase() !== 'o') {
      return;
    }
    const lc = p.toLocaleLowerCase();
    if (eventName.has(lc) && p !== lc) {
      // 使用 addEventListener 添加监听
      // @ts-ignore
      if (typeof v === 'function') element.addEventListener(eventName.get(lc)!, v, false);
      // 不管是不是有效方法，都要删除属性
      // @ts-ignore ts(2590)
      props[p] = undefined;
    }
  });
}
export { eventNameFix };
