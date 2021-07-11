# 功能 Functions

注意：推荐使用 Typora 之类的有目录/大纲功能的阅读器。

## 垫片（polyfill）功能

SaltLite 并不自带垫片功能：

1. 调用在线垫片服务，将入口的`polyfillURL`改为垫片服务地址或`undefined`，将启用这个功能。（我为啥不默认启用？）

## 扩展原生对象

### 扩展 HTMLElement：

```JS
interface HTMLElement {
  /** 用法同 `.classList.add` , 为流式编程设计 */
  addClass(...className: string[]): HTMLElement;

  /** 用法同 `.classList.remove` , 为流式编程设计 */
  removeClass(...className: string[]): HTMLElement;

  /** 切换类名功能, 可用于流式编程 */
  toggleClass(...className: string[]): HTMLElement;

  /** 用法同 `.classList.contains` , **不能流式编程**只是为了好看 */
  hasClass(className: string): boolean;

  /** 将子元素批量附到这个元素上, 可流式编程 */
  appendChildren(...children: (Node | string)[]): HTMLElement;

  /** 设置元素的行内样式, 可流式编程 */
  css(prop: string, value: string): HTMLElement;
  /** 批量设置元素的行内样式, 可流式编程 */
  css(styles: { [index: string]: string }): HTMLElement;
}
```

## 文档对象模型（DOM）查询

SaltLite 的查询功能是原生 JS 的封装，设计给 TypeScript 程序员使用。

1. 完整的声明文件和恰当的断言，你不用再手动过滤获取到的元素，或者为其断言。
2. 添加额外方法返回`HTMLElement`类型对象，不用再头疼获取到`Element`对象。
3. 添加额外方法返回`HTMLElement[]`类型对象，不用再到处使用`Array.from`方法。
4. 添加`Query`方法返回特定类型的元素对象，不用再在判定元素类型上写脏代码。

## 文档对象模型（DOM）操作

SaltLite 引入了一个 `createElement` 方法，有些类似于 React 框架的同名方法，不过这个方法返回的是**HTML 元素实例**。

1. 完整的声明文件和恰当的断言，确保你能得到一个可供 TypeScript 辨认类别的 HTML 元素实例。
2. 封装了重复性的操作，如生成元素后添加属性和事件，或者将某个元素挂载到另一个元素下——你只需要传参即可。
3. 封装了`createElements`方法，配合新增的`HTMLElement`原型方法`appendChildren`高效挂载大量元素。
4. SaltLite 使用了`DocumentFragment`对象来提高元素批量挂载时的效率，减少页面回流次数。

## 数据存储

SaltLite 封装了 localStorage 的使用流程，简化了数据存储步骤。

1. 使用`write`方法写入数据，使用`read`方法读取数据。
2. 使用`readWithDefault`方法，当数据不存在时存入默认数据。
3. 请注意，函数是不能存进 localStorage 里的。

## 总结

1. 以上所有减少脏代码的功能都是假的，脏代码和个人水平有极大的关系，再优秀的库、框架都有大把写脏代码的。
2. 我只是使用了一些平常不太常用的方法，去封装一些写得难受的操作，因此并不能覆盖哪怕一小半的开发代码。
