(function() {
	
	window.onload = function() {
		document.getElementById("submit").onclick = makeRequest;
	};

	function makeRequest() {
		var ajax = new XMLHttpRequest();
		ajax.onload = find;
		ajax.open("GET", "http://students.washington.edu/dianay/dubhacks/data.json", true);
		ajax.send();
	}

	function compareStatus() {
		var info = JSON.parse(this.responseText);
		var number = document.cookie();
		if (info.hasOwnProperty(number)) {
			//test activity
			//test time
			//test location radius
			var friendsList = info.number.friends;
			for (int i = 0; i < friendsList.length; i++) {
				if (info.friendsList[i].activities.activity == info.number.activities.activity
					&& info.friendsList[i].times.hours.hour == info.number.times.hours.hour
					&& info.friendsList[i].times.mins.min == info.number.times.mins.min
					&& // test location) {
					// send text
				}
			}
		}
	}
}