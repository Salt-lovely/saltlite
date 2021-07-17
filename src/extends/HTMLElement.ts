import { isSafePropName } from '../safe/unsafeProps';
import { extend } from '../util/extends';
import { isObject, isString } from '../util/typeGuard';

export function HTMLElementPlus() {
  extend(HTMLElement.prototype, {
    addClass: !!HTMLElement.prototype.addClass
      ? undefined
      : function (this: HTMLElement, ...className: string[]) {
          this.classList.add(...className); // 也就IE10不支持多参数了
          return this;
        },
    removeClass: !!HTMLElement.prototype.removeClass
      ? undefined
      : function (this: HTMLElement, ...className: string[]) {
          this.classList.remove(...className); // 也就IE10不支持多参数了
          return this;
        },
    toggleClass: !!HTMLElement.prototype.toggleClass
      ? undefined
      : function (this: HTMLElement, ...className: string[]) {
          for (const c of className) {
            if (this.classList.contains(c)) this.classList.remove(c);
            else this.classList.add(c); // 用原生方法是最快的
          }
          return this;
        },
    hasClass: !!HTMLElement.prototype.hasClass
      ? undefined
      : function (this: HTMLElement, className: string) {
          return this.classList.contains(className);
        },
    appendChildren: !!HTMLElement.prototype.appendChildren
      ? undefined
      : function (this: HTMLElement, ...children: (Node | string)[]) {
          const frag = document.createDocumentFragment();
          for (const n of children) {
            if (n instanceof Node) frag.appendChild(n);
            else if (isString(n)) frag.appendChild(document.createTextNode(n));
          }
          this.appendChild(frag);
          return this;
        },
    css: !!HTMLElement.prototype.css
      ? undefined
      : function (this: HTMLElement, argu: string | { [index: string]: string }) {
          if (isObject(argu)) {
            for (const p in argu) {
              if (isSafePropName(p)) this.style.setProperty(p, argu[p] + '');
            }
          } else if (isString(argu) && isString(arguments[1])) {
            this.style.setProperty(argu, arguments[1] + '');
          }
          return this;
        },
  });
}
