(function() {
	
	window.onload = function() {
		document.getElementById("submit").onclick = makeRequest;
	};

	function makeRequest() {
		var ajax = new XMLHttpRequest();
		ajax.onload = compareStatus;
		ajax.open("GET", "http://students.washington.edu/dianay/dubhacks/data.json", true);
		ajax.send();
	}

	function compareStatus() {
		var info = JSON.parse(this.responseText);
		var number = document.cookie();
		var friendLocation = 0;
		var distance = 0;
		if (info.hasOwnProperty(number)) {
			//test activity
			//test time
			//test location radius
			var friendsList = info.number.friends;
			for (int i = 0; i < friendsList.length; i++) {
				
				friendLocation = friendsList[i]["location"];
				var dAjax = new XMLHttpRequest();
				dAjax.onload = compareLocation;
				dAjax.open("GET", "https://maps.googleapis.com/maps/api/distancematrix/json?origins=initialLocation&destinations="+friendLocation, true);
				dAjax.send();
				
				if (info.friendsList[i].activities.activity == info.number.activities.activity
					&& info.friendsList[i].times.hours.hour == info.number.times.hours.hour
					&& info.friendsList[i].times.mins.min == info.number.times.mins.min
					&& (distance["rows"]["elements"]["distance"]["value"] < 700) {
					// send text
				}
			}
		}
	}

	function compareLocation {
		distance = JSON.parse(this.responseText);
	}
}