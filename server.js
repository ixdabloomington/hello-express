var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    port = process.env.PORT,
    ip = process.env.IP,
    router = express.Router();

router.get('/', function(req, res){
    res.send("Hello world!");
});

app.use('/', router);

app.listen(port, ip);
console.log('App is running on port ' + port + '!');
