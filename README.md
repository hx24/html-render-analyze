## 验证 css、js 与图片对页面的阻塞

- 正常情况下， css 不阻塞页面**解析**,但是会**阻塞页面渲染**，css 全部加载完成后页面才会**渲染**
- 不加 defer 和 async 属性时，js 的加载会阻塞页面的解析,在 html 中间插入一段 script 标签，浏览器会暂停 DOM tree 的解析，先去加载并执行完 js，再继续解析 DOM tree
- 不加 defer 或 async 的 js 标签会**导致页面的渲染**  
  本来 html 要等 css 加载完才会渲染，但是若遇到 js 标签，为防止 js 获取页面的样式信息，页面会直接在当前状态将页面渲染一次，等 css 加载完再渲染一次。
- 图片的加载不会阻塞页面的解析与渲染
