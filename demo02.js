const Koa = require('koa')
const app = new Koa()
app.use(async(ctx)=>{
    let url = ctx.url
    // 从request中接受get请求
    let request = ctx.request
    let req_query = request.query
    let req_queryString = request.querystring
    // 从ctx中接受get请求
    let ctx_query = ctx.query 
    let ctx_queryString = ctx.querystring 


    ctx.body = {
        url,
        req_query,
        req_queryString,
        ctx_query,
        ctx_queryString
    }
}).listen(3000,()=> {
console.log("server is starting ......3000 port")
})