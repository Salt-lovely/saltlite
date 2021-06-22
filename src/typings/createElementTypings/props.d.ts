/// <reference path="./events.d.ts" />
/** CORS枚举 */
type crossOriginEnum = 'anonymous' | 'use-credentials' | '' | string | null;
type targetEnum = '_self' | '_blank' | '_parent' | '_top';
// 所有元素
interface createHTMLElementProps extends GlobalHTMLElemetEventProps {
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
  autoplay?: boolean;
  /** 使用浏览器默认的媒体控制器 */
  controls?: boolean;
  /** 默认静音 */
  defaultMuted?: boolean;
  /** 跨域设置 */
  crossOrigin?: crossOriginEnum;
  /** 默认播放速度 */
  controls?: boolean;
  /** 循环播放 */
  loop?: boolean;
  /** **覆盖 defaultMuted** 设置静音 */
  muted?: boolean;
  /** 媒体资源URL */
  src?: string;
  /** 设置与HTMLMediaElement关联的媒体源 **兼容性不佳** */
  srcObject?: MediaProvider | null;
  /** 音量 */
  volume?: number;
  onEncrypted?: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
  onWaitingForKey?: ((this: HTMLMediaElement, ev: Event) => any) | null;
}
// a
interface createHTMLAnchorElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 链接到资源的语言 */
  hreflang?: string;
  /** 链接到媒体的类型 */
  media?: string;
  /** 在何处显示链接的资源 */
  target?: targetEnum;
}
// area
interface createHTMLAreaElementProps extends createHTMLElementProps, createHTMLHyperlinkElementPropsUtils {
  /** 代替的文本字符串 */
  alt?: string;
  /** 热点区域的具体坐标值 */
  coords?: string;
  download?: string;
}
// audio
interface createHTMLAudioElementProps extends createHTMLElementProps, createHTMLMediaElementPropsUtils {}
// base
interface createHTMLBaseElementProps extends createHTMLElementProps {
  /** 链接 */
  href?: string;
  /** 在何处显示链接的资源 */
  target?: targetEnum;
}
// font
interface createHTMLFontElementProps extends createHTMLElementProps {
  /** @deprecated 文字颜色 */
  color: string;
  /** @deprecated 文字字体 */
  face: string;
  /** @deprecated 文字大小或相对大小 */
  size: string;
}
// script
interface createHTMLScriptElementProps extends createHTMLElementProps {
  /** 异步执行 */
  async: boolean;
  /** @deprecated */
  charset: string;
  /** 跨域设置 */
  crossOrigin: crossOriginEnum;
  /** 延迟执行 */
  defer: boolean;
  /** 脚本资源的URL */
  src: string;
}
// video
interface createHTMLVideoElementProps extends createHTMLElementProps, createHTMLMediaElementPropsUtils {
  /** 元素高度 */
  height: number;
  /** 兼容性设置, 一般情况下请忽略, 设为true则视频将默认在元素范围内播放 */
  playsInline: boolean;
  /** 视频封面URL */
  poster: string;
  /** 元素宽度 */
  width: number;
}
