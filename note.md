### 同源策略
1. 协议
2. 域名
3. 端口号
4. 只要上面三个有一个不同就是跨域

### 浏览器为什么不支持跨域?
1. cookie
2. localstorage
3. 基于以上两点，会导致安全漏洞
4. dom元素也有同源策略，iframe
5. ajax也不支持跨域

### 实现跨域
1. jsonp
  - 只能发送get请求
  - 不安全，可能会遭受xss攻击
  - 不建议采用
  - 不支持put、delete、post and so on
  - 原理是利于script不受同源策略的限制，比如img、link也不受限制
2. cors(后端提供)
3. postMessage
4. document.domain
5. window.name
6. location.hash
  - 路径后面的hash值可以用来通信
  - a页面引入c页面，想要拿到c页面传递过来的值，需要传递一个hash值给c页面，c页面将hash值传递给b页面，b将结果传递给a页面，因为a，b页面同域
7. http-proxy
8. nginx
  - 在nginx.conf文件中配置
9. WebSocket