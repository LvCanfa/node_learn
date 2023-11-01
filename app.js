const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.end('Here is the Home Page')
  }else if (req.url === '/about') {
    res.end('Something About')
  }else {
    res.end(`
    <h1>!!!</h1>

    <a href='/'>back to home</a>
    `)
  }
})
server.listen(1000)