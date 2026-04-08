import { createServer } from 'http';
import { readFile } from 'fs'; //file system module 
const port = 8080;

const server = createServer(function(req, res) {
    readFile('intro.html', function(err, data) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1>Hello there!!</h1>")
  res.write(data);
  return res.end();
  });
}); 

server.listen(port, function() {
	console.log('Server listening at port ' + port);
});
