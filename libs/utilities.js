module.exports = {
	/**
	 * Returns a formatted string corresponding to the milliseconds duration
	 **/
	millisecondsToString : function(duration){
		// Parse duration values
		var seconds = parseInt((duration / 1000) % 60),
		    minutes = parseInt((duration / (1000*60)) % 60),
		    hours = parseInt((duration / (1000*60*60)) % 24),
		    days = parseInt((duration / (1000*60*60*24)));

		// Add "0" before too little number
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		// Create uptime string following the duration of the uptime
		uptime = "";
		if (days > 0) {
			uptime += days;
			if (days > 1) {
				uptime += " days, ";
			}
			else {
				uptime += " day, ";
			}
			uptime += hours + ":" + minutes + "." + seconds;
		}
		else {
			uptime += hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
		}
		return uptime;
	}
}
