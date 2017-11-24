var exec = require('cordova/exec');

function PalPalHereSDK() {};

PalPalHereSDK.prototype.getMessage = function () 
{
	exec(null, null, 'paypalheresdk', 'getMessage', []);
};

PalPalHereSDK.prototype.greet = function (name, successCallback, errorCallback) 
{
	exec(successCallback, errorCallback, 'paypalheresdk', 'greet', [name]);
};

module.exports = new PalPalHereSDK();


document.prototype.addEventListener('deviceready', function () 
{
    
}, false);