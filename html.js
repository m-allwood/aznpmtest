const http = require('http');
const fs = require('fs').promises;

const hostname = '0.0.0.0';
const port = 80;

let indexFile;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(indexFile);
});

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, hostname, () => {
            console.log('Server running at http://${hostname}:${port}/');
        })
    })
    .catch(err => {
        res.error('Could not read index.html file: ${err}');
        process.exit(1);
    })