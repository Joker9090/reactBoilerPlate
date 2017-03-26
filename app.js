var express = require('express');
var http = require('http');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'));

var options = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(options));

app.get('/', require('./routes').index);
app.get('/html', require('./routes').indexHtml);
app.get('/layout', require('./routes').indexTemplate);
app.get('/item', require('./routes').indexItem);
app.get('/reactClient', require('./routes').indexWithReactClient);

app.server = http.createServer(app);
PORT = 80
app.server.listen(PORT, function(){
  console.log("Server is listening in port: "+PORT);
});
