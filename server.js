const express = require('express');
const path = require('path');
const app = express();

//Resource: https://stackoverflow.com/questions/5924072/express-js-cant-get-my-static-files-why
app.use('*/css',express.static(path.join(__dirname, 'resources/css')));
app.use('*/fonts',express.static(path.join(__dirname, 'resources/fonts')));
app.use('*/js',express.static(path.join(__dirname, 'resources/js')));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/pages/home.html'));
})

//Unclear if I need all these right now. The html files seem to be connected and loading in properly now
/*
app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, '/home.html'));
})
app.get('/candidate_info', function(req, res){
	res.sendFile(path.join(__dirname, '/candidate_info.html'));
});
app.get('/polls', function(req, res){
	res.sendFile(path.join(__dirname, '/polls.html'));
});
app.get('/events', function(req, res){
	res.sendFile(path.join(__dirname, '/events.html'));
});
*/

app.listen(3000);
console.log("Server is now running....");
console.log("Port is 3000");
