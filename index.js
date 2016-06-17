var express = require('express');
var serveStatic = require("serve-static");

var app = express(); 
app.use(serveStatic(__dirname + "/.")); 
app.get('/host', function (req, res) {
	var pg={}
	pg.API 	= "http://testenv--testproject--testservice--67d85f.prd.shipped-cisco.com/data";//process.env.API_HOST;
	res.json(pg);
});
app.listen(3000);
console.log('Server running on http://0.0.0.0:3000/');
