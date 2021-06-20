import { isSafePropName } from '../safe/unsafeProps';

export function HTMLElementPlus() {
  if (!HTMLElement.prototype.addClass)
    HTMLElement.prototype.addClass = function (...className: string[]) {
      this.classList.add(...className); // 也就IE10不支持多参数了
      return this;
    };
  if (!HTMLElement.prototype.removeClass)
    HTMLElement.prototype.removeClass = function (...className: string[]) {
      this.classList.remove(...className); // 也就IE10不支持多参数了
      return this;
    };
  if (!HTMLElement.prototype.toggleClass)
    HTMLElement.prototype.toggleClass = function (...className: string[]) {
      for (const c of className) {
        if (this.classList.contains(c)) this.classList.remove(c);
        else this.classList.add(c); // 用原生方法是最快的
      }
      return this;
    };
  if (!HTMLElement.prototype.hasClass)
    HTMLElement.prototype.hasClass = function (className: string) {
      return this.classList.contains(className);
    };
  if (!HTMLElement.prototype.appendChildren)
    HTMLElement.prototype.appendChildren = function (...children: Node[]) {
      const frag = document.createDocumentFragment();
      for (const n of children) frag.appendChild(n);
      this.appendChild(frag);
      return this;
    };
  if (!HTMLElement.prototype.css)
    HTMLElement.prototype.css = function () {
      if (typeof arguments[0] === 'object') {
        for (const p in arguments[0]) {
          if (isSafePropName(p) /* && ['string', 'number', 'bigint'].indexOf(typeof arguments[0][p]) !== -1 */)
            this.style.setProperty(p, arguments[0][p] + '');
        }
      } else if (typeof arguments[0] === 'string') {
        this.style.setProperty(arguments[0], arguments[1] + '');
      }
      return this;
    };
}
