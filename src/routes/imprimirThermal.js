let printer = require("node-thermal-printer");
let express = require("express");

let router = express.Router();

router.get('/imprimirThermal', function (req, res) {
    printer.init({
        type: 'epson',
        interface: '/dev/usb/lp0'
    });
    printer.alignCenter();
    printer.println("Hello world");
    //printer.printImageBuffer(/* PNG image buffer */, function (done) { })
    printer.printImage('../assets/descarga.jpg', function (done) {
        printer.cut();
        printer.execute(function (err) {
            if (err) {
                console.error("Print failed", err);
            } else {
                console.log("Print done");
            }
        });
    });
});

module.exports = router;