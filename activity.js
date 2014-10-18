(function() {
	window.onload = function() {
		document.getElementById("submit").onclick = pick;
	};

	function pick() {
		var activity = document.getElementById("cd-dropdown").value;
		var hour = document.getElementById("hour").value;
		var min = document.getElementById("min").value;
		writeData(activity, hour, min, initialLocation);
	}

	function writeData(getActivity, getHour, getMin, getLocation) {
		var php = new XMLHttpRequest();
		var param = "name=" + document.cookie + "activity=" + getActivity + "&hour=" + getHour + "&min=" + getMin + "&location="
			+ getLocation;
		php.open("GET", "http://students.washington.edu/dianay/dubhacks/activity.php");
		php.send(param);
		alert("hi");
	}
})();