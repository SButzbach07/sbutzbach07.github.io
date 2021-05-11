"use strict";

var hour, meridian, minute, second;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(function() {
	var date = new Date();
	
	var year = date.getFullYear();
	var day = date.getDate();
	
	var month = months[date.getMonth()];
	var weekday = weekdays[date.getDay()];
	
	if (date.getHours() == 0) {
		hour = 12;
		meridian = "AM";
	} else if ((date.getHours() > 0) && (date.getHours() < 12)) {
		hour = date.getHours();
		meridian = "AM";
	} else if (date.getHours() == 12) {
		hour = 12;
		meridian = "PM";
	} else if ((date.getHours() > 12) && (date.getHours() < 24)) {
		hour = date.getHours() - 12;
		meridian = "PM";
	}
	
	if (date.getMinutes() < 10) {
		minute = "0" + date.getMinutes();
	} else {
		minute = date.getMinutes();
	}
	
	if (date.getSeconds() < 10) {
		second = "0" + date.getSeconds();
	} else {
		second = date.getSeconds();
	}
	
	document.getElementById("datetime").innerHTML = weekday + ",&nbsp;" + month + "&nbsp;" + day + ",&nbsp;" + year + "&nbsp;&nbsp;" + hour + ":" + minute + ":" + second + "&nbsp;" + meridian;
}, 1000);
