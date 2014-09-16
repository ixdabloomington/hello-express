var express = require("express"),
    app = express(),
    port = process.env.PORT,
    ip = process.env.IP,
    router = express.Router();

router.get('/', function(req, res){
    res.send("Hello world!");
});

router.get('/hello/:name', function(req, res){
    res.send("Hello " + req.params.name + "!")
});

app.use('/', router);

app.listen(port, ip);
console.log('App is running on port ' + port + '!');
