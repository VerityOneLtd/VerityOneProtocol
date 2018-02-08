
const crypto = require('crypto');
var ethUtils = require('ethereumjs-util');

var ERRORS = {
    invalidHex: "Invalid hex input"
}


//- Using an anonymous function:
document.getElementById("clickMe").onclick = function getRandomWallet() {
    var randbytes = crypto.randomBytes(32);
    var address = '0x' + ethUtils.privateToAddress(randbytes).toString('hex');
    var typeNumber = 4;
	var errorCorrectionLevel = 'L';
	var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(address);
	qr.make();
    document.getElementById("display").innerHTML = address;
	document.getElementById('qr').innerHTML = qr.createImgTag();
    document.getElementById('instructions').innerHTML = "Place the UPC or QR code on the product. <br/> To mark an item on the blockchain, enter the Ethereum address into the Verity protocol application."

	console.log("did it")
    console.log(randbytes.toString('hex'));
}

