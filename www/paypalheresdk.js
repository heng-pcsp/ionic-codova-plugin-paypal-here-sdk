var exec = require('cordova/exec');

var PalPalHereSDK = function() {};

PalPalHereSDK.getMessage = function () 
{
	exec(null, null, 'palpalheresdk', 'getMessage', []);
};

module.exports = PalPalHereSDK;