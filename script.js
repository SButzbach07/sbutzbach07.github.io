"use strict";

var hour, meridian, minute, second;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(function() {
	var datetime = new Date();
	
	var year = datetime.getFullYear();
	var day = datetime.getDate();
	
	var month = months[datetime.getMonth()];
	var weekday = weekdays[datetime.getDay()];
	
	if (datetime.getHours() = 0) {
		hour = 12;
		meridian = "AM";
	} else if ((datetime.getHours() > 0) || (datetime.getHours() < 12)) {
		hour = datetime.getHours();
		meridian = "AM";
	} else if (datetime.getHours() = 12) {
		hour = 12;
		meridian = "PM";
	} else if ((datetime.getHours() > 12) || (datetime.getHours() < 24)) {
		hour = datetime.getHours() - 12;
		meridian = "PM";
	}
	
	
}, 1000);

