// 所有元素
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
// 带有超链接的元素
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
// 媒体元素
interface createHTMLMediaElementPropsUtils {
  /** 是否自动播放 */
  autoplay: boolean;
  /** 使用浏览器默认的媒体控制器 */
  controls: boolean;
  /** 默认静音 */
  defaultMuted: boolean;
  /** 跨域设置 */
  crossOrigin: string | null;
  /** 默认播放速度 */
  controls: boolean;
}
// <a>
interface createHTMLAnchorElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 链接到资源的语言 */
  hreflang?: string;
  /** 链接到媒体的类型 */
  media?: string;
}
// <area>
interface createHTMLAreaElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 代替的文本字符串 */
  alt?: string;
  /** 热点区域的具体坐标值 */
  coords?: string;
  download?: string;
}
