import { isSafePropName } from '../safe/unsafeProps';
import { extend } from '../util/extends';

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
            else if (typeof n === 'string') frag.appendChild(document.createTextNode(n));
          }
          this.appendChild(frag);
          return this;
        },
    css: !!HTMLElement.prototype.css
      ? undefined
      : function (this: HTMLElement) {
          if (typeof arguments[0] === 'object') {
            for (const p in arguments[0]) {
              if (isSafePropName(p) /* && ['string', 'number', 'bigint'].indexOf(typeof arguments[0][p]) !== -1 */)
                this.style.setProperty(p, arguments[0][p] + '');
            }
          } else if (typeof arguments[0] === 'string') {
            this.style.setProperty(arguments[0], arguments[1] + '');
          }
          return this;
        },
  });
}
