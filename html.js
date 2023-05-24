const http = require('http');
const fs = require('fs').promises;

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
  fs.readFile(_dirname + "/index.html")
    .then(contents => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(contents);
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});