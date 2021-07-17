import { isString } from '../util/typeGuard';

export default function polyfill(polyfillURL: string | false = 'https://cdn.polyfill.io/v2/polyfill.js') {
  if (isString(polyfillURL)) {
    const s = document.createElement('script');
    s.src = polyfillURL;
    document.head.appendChild(s);
  }
}
