
let express = require('express'),
    tmpdir = require('os').tmpdir(),
    request = require('querystring').parse(url),
    fs = require('fs');

let router = express.Router();

/*function setResponseHeaders(res, filename) {
    res.header('Content-disposition', 'inline; filename=' + filename);
    res.header('Content-type', 'application/pdf');
}*/

router.get('/imprimir/:file', function (req, res) {
    let file = request.params.file;
    let filePath = "/../assets" + file;

    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

module.exports = router;