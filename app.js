let express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    imprimir = require('./routes/imprimir'),
    raiz = require('./routes/raiz');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(raiz);
app.use(imprimir);

app.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});
