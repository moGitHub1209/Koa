const Koa = require('Koa')
const app = new Koa()
const Router = require('koa-router')

let home = new Router()
home
    .get('/jspang',function(ctx,next){
        ctx.body="home  ==  jspang.com"
    })
    .get('/todo',function(ctx,next){
        ctx.body="home  ==  todo-list"
    })

let page = new Router()
page
    .get('/jspang',function(ctx,next){
        ctx.body="page  ==  jspang.com"
    })
    .get('/todo',function(ctx,next){
        ctx.body="page  ==  todo-list"
    })

let router = new Router()
router.use('/home',home.routes(),home.allowedMethods)
router.use('/page',page.routes(),page.allowedMethods)

app
    .use(router.routes())
    .use(router.allowedMethods)

app.listen(3000,()=>{
    console.log('server starting ')
})