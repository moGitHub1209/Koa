const Koa = require('Koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router({
    prefix:'/jspang'
})

router
    .get('/',function(ctx,next){
        ctx.body="jspang.com"
    })
    .get('/todo',function(ctx,next){
        ctx.body="todo-list"
    })
app.use(router.routes()).use(router.allowedMethods)

app.listen(3000,()=>{
    console.log('server starting ')
})