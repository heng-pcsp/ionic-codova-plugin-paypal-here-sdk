var exec = require('cordova/exec');

var PalPalHereSDK = function() {};

PalPalHereSDK.getMessage = function () 
{
	exec(null, null, 'PalPalHereSDK', 'getMessage', []);
};

module.exports = PalPalHereSDK;