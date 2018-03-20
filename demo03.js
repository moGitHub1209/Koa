const Koa = require("Koa")
const app = new Koa()
app.use(async(ctx)=>{
    if( ctx.url === '/' && ctx.method === 'GET'){
        let html =`
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html
    } else if( ctx.url === '/' && ctx.method === 'POST') {
        ctx.body="接受POST请求"
    } else {
        ctx.body ='<h1>404!</h1>'
    }
})
app.listen(3000,()=>{
    console.log('server is starting 30000')
})