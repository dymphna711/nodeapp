// Module Dependencies

var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var middleware = require('middleware');
var connect = require('connect');

// set port
var portnumber = 3000;

// Initialize Express
var app = express();
console.log('Express has been initialized');

// compile function for stylus
function compile(str,path){
	return stylus(str)
	.set('filename', path)
	.use(nib());
}

// Set view folder
app.set('views', __dirname+'/views');

// Initialize Jade
app.set('view engine', 'jade');
console.log('Jade has been initialized');

//Stylus middleware
app.use(express.logger('dev'));
app.use(stylus.middleware({
		src:__dirname + '/public/',
		compile: compile
	}
));
app.use(express.static(__dirname+'/public'));

// Render pages

app.get('/', function(req,res){
	res.render('index', {title: 'Welcome'});
});

app.listen(portnumber);
console.log('server is running on port'+portnumber)

