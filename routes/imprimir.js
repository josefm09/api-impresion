
let express = require('express'),
    Phantom = require('phantom'),
    tmpdir = require('os').tmpdir(),
    fs = require('fs');

let router = express.Router();

function setResponseHeaders(res, filename) {
    res.header('Content-disposition', 'inline; filename=' + filename);
    res.header('Content-type', 'application/pdf');
}

router.get('/imprimir/:filename', function (req, res, next) {
    var filename = req.params.filename;
    file = tmpdir + filename;
    setResponseHeaders(res, filename);

    Phantom.create(function (phantom) {
        phantom.createPage(function (page) {

            function dispatchPDF() {
                page.render(file, function () {
                    fs.createReadStream(file).pipe(res);
                    phantom.exit();
                });
            };

            page.set('content', "<p>hola putita</p>");
            page.set('paperSize', '5in');
            page.set('onLoadFinished', dispatchPDF);
        });
    });
});

module.exports = router;