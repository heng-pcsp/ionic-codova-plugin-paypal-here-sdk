var exec = require('cordova/exec');

var PayPal = function() {};

PayPal.getTest = function (arg0, success, error) 
{
	exec(success, error, 'PalPal Here SDK', 'coolMethod', [arg0]);
};

module.exports = PayPal;