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
        let postData = await parsePostData(ctx)
        ctx.body = postData
    } else {
        ctx.body ='<h1>404!</h1>'
    }
})
function parsePostData(ctx) {
return new Promise((resolve,reject)=>{
    try{
        let postData = ''
        ctx.req.addListener('data',(data)=>{
            postData += data
        })
        ctx.req.on('end', function() {
            resolve(parseQueryStr(postData))
        })
    }catch(error){
        reject(error)
    }
})
}
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}


app.listen(3000,()=>{
    console.log('server is starting 30000')
})