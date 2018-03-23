var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
var hour = today.getHours();
var min = today.getMinutes();

var suffix = (hour >= 12)? " PM" : " AM";
hour = (hour >= 12)? hour - 12 : hour;

if (hour === "0" && suffix === " PM"){
	if (min === "0" && sec === "0"){
	hour = 12;	
	suffix = " Noon"
	}
}
else if (hour === "0" && suffix === "AM"){
	if (min === "0" && sec === " 0"){
	hour = 12;
	suffix = " Midnight"
	}
}
todayHTML = document.getElementById("todayHTML");
timeHTML = document.getElementById("timeHTML");
todayHTML.innerHTML = "today is " + daylist[day];
timeHTML.innerHTML = "the time is " + hour + suffix + " " +min;