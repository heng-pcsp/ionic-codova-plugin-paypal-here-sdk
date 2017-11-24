var exec = require('cordova/exec');

var PalPalHereSDK = function() {};

PalPalHereSDK.getMessage = function () 
{
	exec(null, null, 'paypalheresdk', 'getMessage', []);
};

module.exports = PalPalHereSDK;