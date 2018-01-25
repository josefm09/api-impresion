
let express = require('express'),
    Phantom = require('phantom'),
    tmpdir = require('os').tmpdir(),
    fs = require('fs');

let router = express.Router();

/*function setResponseHeaders(res, filename) {
    res.header('Content-disposition', 'inline; filename=' + filename);
    res.header('Content-type', 'application/pdf');
}*/

router.get('/imprimir', function (req, res) {
    var filePath = "/../assets/itc.pdf";

    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

module.exports = router;