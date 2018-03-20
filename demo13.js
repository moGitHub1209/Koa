const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const path = require('path')

const staticPath = './static'

app.use(static(path.join(__dirname,staticPath)))

app.use(async(ctx)=>{
    ctx.body="hello world!!"
}).listen(3000,()=> {
console.log("server is starting ......3000 port")
})