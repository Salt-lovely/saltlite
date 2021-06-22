// 整个SaltLite的入口
import polyfillAndMore from './polyfill/index';
import safe from './safe/index';
import element from './createElement/index';
import util from './util/index';
import * as query from './query';

/**
 * 输入URL获取垫片服务, 或者留空使用默认的垫片服务, 设为false
 *
 * 推荐: https://github.com/Financial-Times/polyfill-service
 */
const polyfillURL: string | false | undefined = false;

// 打印到控制台
console.log(
  '%c SaltLite Frontend Lib, With MulanPSL, By Salt-lovely. ',
  'color: royalblue; background-color: #fffaf0;'
);

// 垫片, 不止垫片
polyfillAndMore(polyfillURL);

/** 全局对象 */
const global: any = util.getGlobalThis();

/** SaltLite对象 */
const SaltLite: SaltLite = {
  ...safe,
  ...element,
  ...util,
  ...query,
};

Object.freeze(SaltLite);

global['SaltLite'] = SaltLite;
// global['saltlite'] = SaltLite;
if (!global['sl']) global['sl'] = SaltLite;
if (!global['SL']) global['SL'] = SaltLite;

/* 一个简易内置教程 *
console.log(`
// try it out:
(() => {
  var { createElement, createElements } = SaltLite;
  var HoverColor = (props, children) => {
    return createElement(
      'span',
      {
        className: 'text-with-hover-color',
        textContent: props.textContent,
        onMouseEnter: (ev) => {
          ev.target.style.color = props.color;
        },
        onMouseLeave: (ev) => {
          ev.target.style.color = '';
        },
      },
      children
    );
  };
  document.body.appendChildren(
    createElement('div', { textContent: '===============' }, [
      ...createElements([
        { tagName: 'br' },
        {
          customElement: HoverColor,
          props: { textContent: '鼠标移上来会变红', color: 'crimson' },
          children: createElement('br'),
        },
        { customElement: HoverColor, props: { textContent: '鼠标移上来会变绿', color: 'green' } },
        { tagName: 'br' },
        { customElement: HoverColor, props: { textContent: '鼠标移上来会变蓝', color: 'royalblue' } },
        { tagName: 'br' },
        '============',
      ]),
      createElement('div', {
        className: 'text',
        textContent: '>点击这个会弹窗<',
        onClick: (ev) => {
          alert('X: ' + ev.clientX + '; Y: ' + ev.clientY);
        },
      }),
    ]),
    createElement('div', { textContent: '===============' }).addClass('text', 'c')
  );
})();
// have a try?
`); /**/

export default SaltLite;
