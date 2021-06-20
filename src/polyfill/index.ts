import { HTMLElementPlus } from './HTMLElement';
export default function polyfillAndMore(polyfillURL: string | false = 'https://cdn.polyfill.io/v2/polyfill.js') {
  if (typeof polyfillURL === 'string') {
    const s = document.createElement('script');
    s.src = polyfillURL;
    document.head.appendChild(s);
  }
  HTMLElementPlus();
}
