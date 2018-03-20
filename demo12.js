const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')

app.use(views(path.join(__dirname,'/view'),{
    extension: 'ejs'
}))
app.use(async(ctx)=>{
    let title = 'hello jspang'
    await ctx.render('index',{
        title
    })
})
app.listen(3000,()=> {
console.log("server is starting ......3000 port")
})