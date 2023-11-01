const http = require('http');
const fs = require('fs').promises;
var index

const hostname = '0.0.0.0';
const port = 80;

let indexFile;

const server = http.createServer((req, res) => {
    switch (request.url) {
        case "/style/style.css" :
            res.setHeader('Content-Type', 'text/css');
            res.writeHead(200);
            res.write(cssFile);
            break;
        default :
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.write(indexFile);
    }
    res.end(indexFile);
});

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        })
    })
    .catch(err => {
        res.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    })

fs.readFile(__dirname + "/style/style.css")
    .then(contents => {
        cssFile = contents;
    })
    .catch(err => {
        res.error(`Could not read style.css file: ${err}`);
        process.exit(1);
    })