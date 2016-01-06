
var express = require('express');
var app = express();

var root = process.cwd();
var port = parseInt( process.argv[1], 10 ) || 3000;

app.use(express.static(root));

app.listen(port, function(){
  console.log(
    '\033[1;33m----------------------------------\n'+
    'Min web start success.\n'+
    'http://127.0.0.1:'+ port +'/\n'+
    '----------------------------------\n'
  );
});
