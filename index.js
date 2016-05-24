var express = require('express');
var app = express();
var controller = require('./controller')
var bodyParser = require('body-parser')
var cors = require('cors');
app.set('port', (process.env.PORT || 7000));

app.use(bodyParser.json());

// use it before all route definitions
app.use(cors({origin: '*'}));
//app.configure(function(){
//  app.use(express.bodyParser());
//  app.use(app.router);
//});

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.render('pages/index');
});

app.get('/ping', function(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send('PONG');
});

app.get('/:id', function (request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var id = request.params.id
  return controller.getUser(id, function (err, userData) {
    if (err) {
      return response.send('Error ' + JSON.stringify(err))
    }
    return response.send(userData);
  })
});

app.post('/save', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //Access-Control-Allow-Origin
  var user = req.body
  return controller.saveUser(user, function (err, userData) {
    if (err) {
      return res.send('Error ' + JSON.stringify(err))
    }
    return res.send(userData);
  })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


