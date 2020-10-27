const { get } = require('http');
const Router = require('koa-router');
const router = new Router();
router
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
    .post('/api/users',(ctx,next)=>{
        ctx.body='这里是/users'
    })
    .all('/api/users/:id',(ctx,next)=>{
        //...
    });
    module.exports = router