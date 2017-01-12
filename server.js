var express = require('express');
var app = express();
var browserify = require('browserify');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/app-bundle.js',
	browserify('./index.js', {
		transform: [ [ require('babelify'), { presets: ["es2015", "angular"] } ] ]
	})
)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3040, function(){
	console.log('The server is running for the Angular form validation project. Port 3040!');
})

