const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')
const Router = require('koa-router') // koa 路由中间件
const { delay } = require('./util')

const app = new Koa()
const router = new Router({
  // prefix: '/api', // 统一前缀
})

// app.use(koaStatic(path.resolve(__dirname, './static')))

router.get('/num', async (ctx, next) => {
  ctx.body = 1
})

router.get('/style3000.css', async (ctx, next) => {
  await delay(3000)
  await next()
})

// router.get('/img.jpg', async (ctx, next) => {
//   // 图片不会阻塞页面的渲染，取消css的延时，可看到页面先渲染，图片3s后再显示
//   await delay(3000)
//   await next()
// })

app.use(router.routes())

app.use(koaStatic(path.resolve(__dirname, './static')))

app.listen(3000, () => {
  console.log('listen on 3000 -> http://localhost:3000')
})
