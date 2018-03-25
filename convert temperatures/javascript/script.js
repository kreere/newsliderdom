function cToF(celsius) {
	var cTemp = celsius;
	var cToFahr = cTemp * 9 / 5 + 32;
	var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F. ' + "<br>";
	document.write(message);
}
function fToC(fahrenheit) {
	var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.write(message);}
cToF(60);
fToC(45);