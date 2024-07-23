const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const app = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = reqUrl;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const filePath = searchParams.get('filePath');

    countStudents(filePath)
      .then((data) => {
        res.write(`Number of students: ${data.total}\n`);
        Object.keys(data.fields).forEach((field) => {
          res.write(`Number of students in ${field}: ${data.fields[field]}. List: ${data.fieldNames[field].join(', ')}\n`);
        });
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
    res.end();
  }
});

app.listen(PORT, 'localhost', () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
