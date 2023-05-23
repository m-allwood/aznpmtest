const http = require('http');

const hostname = '20.163.140.80';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html>
          <body>
    <div>
        <title>Matt Allwood's Website</title>
    </div>
          </body>
          </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
