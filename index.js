const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');

const data = fs.readFileSync(`./data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const slugs = dataObj.map(el => slugify(el.courseName, { lower: true }));
console.log(slugs);
const home = fs.readFileSync(`./home.html`,'utf-8');
const view = fs.readFileSync(`./view.html`,'utf-8');
const course = fs.readFileSync(`./course.html`,'utf-8');
// Server created
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Home page
  if (pathname === '/') {
	  res.writeHead(200, {'Content-type': 'text/html'});
    res.end(home);
    // Addmissions  page
  } else if (pathname === '/add') {
    res.end('Add student details here');
    // View course list
  } else if (pathname === '/view') {
	   res.writeHead(200, {'Content-type': 'text/html'});
       res.end(view);
       //res.end(data);
	   //View each course details
  } else if (pathname === '/course') {
	   res.writeHead(200, {'Content-type': 'text/html'});
	   console.log(query.id);
	   const courseDetail = dataObj.map(el => replaceTemplate(course, el)).join('');
	   console.log('courseDetail--------->',courseDetail);
	   const finalOutput = replaceTemplate(course, courseDetail);
       res.end(finalOutput);
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

replaceTemplate = (temp, product) => {
  console.log('+++++++++'+temp);
  console.log('========>'+product);
  let output = temp.replace(/{%COURSENAME%}/g, product.courseName);
  output = output.replace(/{%COURSECODE%}/g,  product.courseCode);
  output = output.replace(/{%VACCANCIES%}/g, product.vacancies);
  output = output.replace(/{%SCHOLARSHIP%}/g, product.scholarship);
  output = output.replace(/{%COURSEDESCRIPTION%}/g, product.courseDescription); 
  return output;
}