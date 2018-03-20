const Koa = require('Koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router
    .get('/',function(ctx,next){
        // ctx.body="111111"
        ctx.body=ctx.query
        // ctx.body=ctx.querystring
    })
app
    .use(router.routes())
    .use(router.allowedMethods)

app.listen(3000,()=>{
    console.log('server is starting ----')
})