const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`./data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const home = fs.readFileSync(`./home.html`,'utf-8');
//const addmission = fs.readFileSync(`./add.html`,'utf-8');
// Server created
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Home page
  if (pathname === '/' || pathname === '/home') {
	  res.writeHead(200, {'Content-type': 'text/html'});
    res.end(home);
    // Addmissions  page
  } else if (pathname === '/add') {
    res.end('Add student details here');
    // View course details
  } else if (pathname === '/view') {
    res.end(data);
  } else if (pathname === '/remove'){
	res.end('Enter student id to remove');
    // Not found
  } else {
    res.end('<h1>Page not found!</h1>');
  }
});

//Server started
server.listen(8080, '127.0.0.1', () => {
  console.log('Listening to requests on port 8080');
});
