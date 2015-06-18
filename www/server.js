var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    morgan          = require('morgan'),
    app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/api', require('./js/route'));
app.use('/', express.static(__dirname));

// app.use(express.logger());
app.use(morgan('combined'));     // apache style combind log file on STDOUT

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
