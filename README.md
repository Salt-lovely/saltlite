# 盐酱的轻量化前端库 SaltLite Frontend Libiary

`盐式轻型前端库`、`盐的轻型前端库`、`盐酱的轻量化前端库`... 叫什么都行，这只是一个库（library）而不是框架（frame），它有一些侵入性操作（比如说会给一些全局对象添加方法），但是整体上并不会对原生 JS 编写的代码有任何影响，与之相对的，它也许会改变你的一些编程习惯。

`Salt's front lib`, `SaltLite frontend lib`, `Salt's frontend library`... Call it whatever u like, it's not a frame but library, it may do some invasive operation (attach method to global prototype), but it won't infulence any vanilla JS code, relatively, perhaps some of ur code habits will be changed.

## 使用 Useage

```
// 导入 import
import SaltLite from 'saltlite'
// 实际上全局对象上有个 SaltLite
// actually SaltLite will provide a global 'SaltLite'
const SaltLite = window.SaltLite
```

## 文件结构 Folder Structure

```
║╟╠╚╙
SaltLite
╟ README.md ┄ 说明文档
╟ DOC.md ┄ 使用文档
╟ .gitignore ┄ git 忽略文件列表
╟ package.json ┄ 包信息
╟ tsconfig.json ┄ ts配置
╚ src ┄ 源代码
    ╟ entry.ts ┄ 入口
    ╟ query.ts ┄ DOM 查询方法, 因为太少了所以不放文件夹里
    ╟ index.d.ts ┄ 声明文件
    ╠ typings ┄ 声明文件组, 拿这个就可以基于SaltLite写你自己的框架了
    ║  ╟ SaltLite.d.ts ┄ 总的声明文件
    ║  ╙ ***.d.ts ┄ 其他声明文件
    ╠ polyfill ┄ 并不是垫片, 写了新的方法
    ║  ╟ index.ts ┄ 方法汇总输出
    ║  ╟ index.d.ts ┄ 声明文件
    ║  ╙ HTMLElement.ts ┄ 给HTMLElement原型添加新方法
    ╠ safe ┄ 安全性检查方法
    ║  ╟ index.ts ┄ 方法汇总输出
    ║  ╙ unsafeProps.ts ┄ 检查属性名是否安全
    ╚ util ┄ 杂项
        ╟ index.ts ┄ 方法汇总输出
        ╟ index.d.ts ┄ 声明文件
        ╙ ***.d.ts ┄ 其他杂项方法
```

## 支持 Support

能用 Chorme 或者火狐就用，能不用 Safari 就不用，千万别用 IE！

Use Chrome or Firefox if u can, forget Safari if u can, DONOT try IE even if u can't!

- Chrome: Test in 70+, at least 51+
  - Edge: at least 15+
- FireFox: Test in 65+, at least 55+
- Safari: At least 12.1+
- Opera: Sry I did't test.
- InternetExplorer: Noooooo! Stop it!!!!

## 许可证 License

木兰宽松许可证 第一版

Mulan Permissive Software License，Version 1
