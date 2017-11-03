var express = require('express');
var app = express();


// GET POST PUT DELETE
app.get('/',function(req,res){
    res.send('Hallo Semuanya !');
});

app.get('/users/:name',function(req,res){
    res.send("Namanya adalah "+req.params.name);
});

app.listen(3000);