interface createHTMLElementProps {
  /** 元素id */
  id?: string;
  /** 元素类名 */
  className?: string;
  /** 元素提示 */
  title?: string;
  /** 元素的文字内容 */
  textContent?: string;
  /** 元素访问的快捷键 */
  accessKey?: string;
  /** 元素内容方向 */
  dir?: string;
  /** 元素是否隐藏 */
  hidden?: boolean;
  /** 元素内容的语言 */
  lang?: string;
  /** 点击事件 */
  onClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 双击事件 */
  onDblClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标按下事件 */
  onMouseDown?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标进入事件 */
  onMouseEnter?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标离开事件 */
  onMouseLeave?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标移动事件 */
  onMouseMove?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标进入事件 **鼠标进入子元素时也会触发, 不推荐使用** */
  onMouseOver?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标离开事件 **鼠标离开子元素时也会触发, 不推荐使用** */
  onMouseOut?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /** 鼠标松开事件 */
  onMouseUp?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
}

interface createHTMLHyperlinkElementPropsUtils {
  /** 链接 */
  href?: string;
  /** 设置哈希, 即`#`后面的部分 */
  hash?: string;
  // /** 链接的主机及端口名 */
  // host?: string;
  // /** 链接的主机名 */
  // hostname?: string;
}

interface createHTMLAnchorElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 链接到资源的语言 */
  hreflang?: string;
  /** 链接到媒体的类型 */
  media?: string;
}
interface createHTMLAreaElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 代替的文本字符串 */
  alt?: string;
  /** 热点区域的具体坐标值 */
  coords?: string;
  download?: string;
}
interface createHTMLElementPropsMap {
  a: createHTMLAnchorElementProps;
  abbr: createHTMLElementProps;
  address: createHTMLElementProps;
  applet: createHTMLElementProps; // HTMLAppletElement;
  area: createHTMLAreaElementProps;
  article: createHTMLElementProps;
  aside: createHTMLElementProps;
  audio: createHTMLElementProps; // HTMLAudioElement;
  b: createHTMLElementProps;
  base: createHTMLElementProps; // HTMLBaseElement;
  basefont: createHTMLElementProps; // HTMLBaseFontElement;
  bdi: createHTMLElementProps;
  bdo: createHTMLElementProps;
  blockquote: createHTMLElementProps; // HTMLQuoteElement;
  body: createHTMLElementProps; // HTMLBodyElement;
  br: createHTMLElementProps; // HTMLBRElement; // 这个还是用 createHTMLElementProps吧
  button: createHTMLElementProps; // HTMLButtonElement;
  canvas: createHTMLElementProps; // HTMLCanvasElement;
  caption: createHTMLElementProps; // HTMLTableCaptionElement;
  cite: createHTMLElementProps;
  code: createHTMLElementProps;
  col: createHTMLElementProps; // HTMLTableColElement;
  colgroup: createHTMLElementProps; // HTMLTableColElement;
  data: createHTMLElementProps; // HTMLDataElement;
  datalist: createHTMLElementProps; // HTMLDataListElement;
  dd: createHTMLElementProps;
  del: createHTMLElementProps; // HTMLModElement;
  details: createHTMLElementProps; // HTMLDetailsElement;
  dfn: createHTMLElementProps;
  dialog: createHTMLElementProps; // HTMLDialogElement;
  dir: createHTMLElementProps; // HTMLDirectoryElement;
  div: createHTMLElementProps; // HTMLDivElement;
  dl: createHTMLElementProps; // HTMLDListElement;
  dt: createHTMLElementProps;
  em: createHTMLElementProps;
  embed: createHTMLElementProps; // HTMLEmbedElement;
  fieldset: createHTMLElementProps; // HTMLFieldSetElement;
  figcaption: createHTMLElementProps;
  figure: createHTMLElementProps;
  font: createHTMLElementProps; // HTMLFontElement;
  footer: createHTMLElementProps;
  form: createHTMLElementProps; // HTMLFormElement;
  frame: createHTMLElementProps; // HTMLFrameElement;
  frameset: createHTMLElementProps; // HTMLFrameSetElement;
  h1: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  h2: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  h3: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  h4: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  h5: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  h6: createHTMLElementProps; // HTMLHeadingElement; // 这个还是用 createHTMLElementProps吧
  head: createHTMLElementProps; // HTMLHeadElement; // 这个还是用 createHTMLElementProps吧
  header: createHTMLElementProps;
  hgroup: createHTMLElementProps;
  hr: createHTMLElementProps; // HTMLHRElement;
  html: createHTMLElementProps; // HTMLHtmlElement;
  i: createHTMLElementProps;
  iframe: createHTMLElementProps; // HTMLIFrameElement;
  img: createHTMLElementProps; // HTMLImageElement;
  input: createHTMLElementProps; // HTMLInputElement;
  ins: createHTMLElementProps; // HTMLModElement;
  kbd: createHTMLElementProps;
  label: createHTMLElementProps; // HTMLLabelElement;
  legend: createHTMLElementProps; // HTMLLegendElement;
  li: createHTMLElementProps; // HTMLLIElement;
  link: createHTMLElementProps; // HTMLLinkElement;
  main: createHTMLElementProps;
  map: createHTMLElementProps; // HTMLMapElement;
  mark: createHTMLElementProps;
  marquee: createHTMLElementProps; // HTMLMarqueeElement;
  menu: createHTMLElementProps; // HTMLMenuElement;
  meta: createHTMLElementProps; // HTMLMetaElement;
  meter: createHTMLElementProps; // HTMLMeterElement;
  nav: createHTMLElementProps;
  noscript: createHTMLElementProps;
  object: createHTMLElementProps; // HTMLObjectElement;
  ol: createHTMLElementProps; // HTMLOListElement;
  optgroup: createHTMLElementProps; // HTMLOptGroupElement;
  option: createHTMLElementProps; // HTMLOptionElement;
  output: createHTMLElementProps; // HTMLOutputElement;
  p: createHTMLElementProps; // HTMLParagraphElement;
  param: createHTMLElementProps; // HTMLParamElement;
  picture: createHTMLElementProps; // HTMLPictureElement;
  pre: createHTMLElementProps; // HTMLPreElement;
  progress: createHTMLElementProps; // HTMLProgressElement;
  q: createHTMLElementProps; // HTMLQuoteElement;
  rp: createHTMLElementProps;
  rt: createHTMLElementProps;
  ruby: createHTMLElementProps;
  s: createHTMLElementProps;
  samp: createHTMLElementProps;
  script: createHTMLElementProps; // HTMLScriptElement;
  section: createHTMLElementProps;
  select: createHTMLElementProps; // HTMLSelectElement;
  slot: createHTMLElementProps; // HTMLSlotElement;
  small: createHTMLElementProps;
  source: createHTMLElementProps; // HTMLSourceElement;
  span: createHTMLElementProps; // HTMLSpanElement;
  strong: createHTMLElementProps;
  style: createHTMLElementProps; // HTMLStyleElement;
  sub: createHTMLElementProps;
  summary: createHTMLElementProps;
  sup: createHTMLElementProps;
  table: createHTMLElementProps; // HTMLTableElement;
  tbody: createHTMLElementProps; // HTMLTableSectionElement;
  td: createHTMLElementProps; // HTMLTableDataCellElement;
  template: createHTMLElementProps; // HTMLTemplateElement;
  textarea: createHTMLElementProps; // HTMLTextAreaElement;
  tfoot: createHTMLElementProps; // HTMLTableSectionElement;
  th: createHTMLElementProps; // HTMLTableHeaderCellElement;
  thead: createHTMLElementProps; // HTMLTableSectionElement;
  time: createHTMLElementProps; // HTMLTimeElement;
  title: createHTMLElementProps; // HTMLTitleElement;
  tr: createHTMLElementProps; // HTMLTableRowElement;
  track: createHTMLElementProps; // HTMLTrackElement;
  u: createHTMLElementProps;
  ul: createHTMLElementProps; // HTMLUListElement;
  var: createHTMLElementProps;
  video: createHTMLElementProps; // HTMLVideoElement;
  wbr: createHTMLElementProps;
}
