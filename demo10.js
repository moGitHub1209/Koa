const Koa = require('koa')
const app = new Koa()
app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'aaname','jspang1111',{
                domain:'127.0.0.1',
                path:'/index',
                maxAge:1000*3600*24,
                expires:new Date('2018-12-31'),
                httpOnly:false,
                overwrite:false
            }
        )
        ctx.body = 'hello cookies 111OK'
    } else {
        if(ctx.cookies.get("aaname")){
            ctx.body = ctx.cookies.get("aaname")
        } else {
            ctx.body = 'cookies none'
        }
    }
}).listen(3000,()=> {
console.log("server is starting ......3000 port")
})