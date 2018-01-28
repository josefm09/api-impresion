let express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    imprimir = require('./src/routes/imprimir'),
    raiz = require('./src/routes/raiz');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conexion a mongo exitosa');
});

app.use(raiz);
app.use(imprimir);

app.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});
