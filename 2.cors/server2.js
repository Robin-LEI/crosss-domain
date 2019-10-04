let express = require('express')

let app = express()

// 允许跨域白名单
let whiteList = ['http://localhost:3000']

app.use((req, res, next) => {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    // 设置允许哪个源跨域访问该网站
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 设置允许哪个方法跨域
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 拿到客户端传递过来的header中携带的参数name
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 设置允许接受cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Refused to get unsafe header "name"  允许返回的头可以被客户端拿到
    res.setHeader('Access-Control-Expose-Headers', 'name')
    // 设置编码，防止中文乱码
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    // 再多少秒内不做预检查
    res.setHeader('Access-Control-Max-Age', 6)
    if (req.method === 'OPTIONS') { // options作为put请求的预检查，服务端不做处理
      res.end()
    } else {
      next()
    }
  }
})

app.put('/getData', (req, res) => {
  res.end('我来自4000的put方法')
})

app.get('/getData', (req, res) => {
  res.setHeader('name', 'robin')
  res.end('我来自4000')
})

app.listen(4000, () => {
  console.log('running in 4000 port')
})