import { renderToString } from 'vue/server-renderer'
import { createSSRApp } from 'vue'

// 一个计数的vue组件
function createApp() {
  // 通过createSSRApp创建一个vue实例
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });
}

const app = createApp();
let ssr_res;
// 通过renderToString将vue实例渲染成字符串
renderToString(app).then((html) => {
  // 将字符串插入到html模板中
  const htmlStr = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `;
  console.log(htmlStr);
  ssr_res = htmlStr
});
// const http = require('http');
import http from 'http'
const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    // res.end(ssr_res)
    res.end(`<div>hh</div>`)
  }else if (req.url === '/about') {
    res.end('Something About')
  }else {
    res.end(`
    <h1>!!!</h1>

    <a href='/'>back to home</a>
    `)
  }
})
server.listen(1000)