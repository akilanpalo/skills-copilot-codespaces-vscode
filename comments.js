// Create web server with Node.js and Express.js
// Run: node comments.js
// Test: curl -X POST -d "comment=Hello World" http://localhost:8080/comment
//       curl http://localhost:8080/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];
app.post('/comment', function (req, res) {
  comments.push(req.body.comment);
  res.end('Thanks for your comment');
});

app.get('/comments', function (req, res) {
  res.json(comments);
});

app.listen(8080);
console.log('Server is running on http://localhost:8080');