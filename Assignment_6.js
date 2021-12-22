const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
var router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'Index sayfasina hosgeldiniz.';
});
router.get('/hakkimda', (ctx) => {
    ctx.body = 'Hakkimda sayfasina hosgeldiniz.';
});
router.get('/iletisim', (ctx) => {
    ctx.body = 'Iletisim sayfasina hosgeldiniz.';
});

const port = 3000;

app
  .use(router.routes())
  .listen(port,()=>{
      console.log(`Sunucu port ${port} de çalışıyor`);
  });