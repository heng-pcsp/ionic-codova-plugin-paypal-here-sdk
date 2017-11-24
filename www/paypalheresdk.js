var exec = require('cordova/exec');

var PalPalHereSDK = function() {};

PalPalHereSDK.getMessage = function () 
{
	exec(null, null, 'paypalheresdk', 'getMessage', []);
};

PalPalHereSDK.greet = function (name, successCallback, errorCallback) 
{
	exec(successCallback, errorCallback, 'paypalheresdk', 'greet', [name]);
};


module.exports = PalPalHereSDK;