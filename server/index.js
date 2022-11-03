const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
  switch (req.url) {
    case '/':
      req.url = 'index.html';
      break;
    case '/cars':
      req.url = './pages/search.car.html'
      break;
    case '/test':
      req.url = 'index.example.html'
      break;
    
  }
  let path = 'public/' + req.url;
  fs.readFile(path, (err, data) => {
    res.writeHead(200);
    res.end(data);
  })
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});