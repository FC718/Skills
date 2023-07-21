const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    
    <p>Cant find the page you're looking for</p>
    <a href='/'>Back home</a>`)
})


server.listen(3000)

