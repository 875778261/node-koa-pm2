"# node-koa-pm2" 
    .get('/api/', (ctx, next) => {
        ctx.body = 'holloWorld';
    })
    .get('/api/test', (ctx, next) => {
        ctx.body = {
            msg: '这是/test',
            query: ctx.query,
            queryStr: ctx.querystring
        }
    })
    .post('/apo/users',(ctx,next)=>{
        ctx.body='这里是/users'
    })
    .all('/api/users/:id',(ctx,next)=>{
        //...
    });
