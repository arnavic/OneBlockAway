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

	function find() {
		var name = document.getElementById("name").value;
		var number = document.getElementById("number").value;
		var password = document.getElementById("password").value;
		var info = JSON.parse(this.responseText);
		if (info.hasOwnProperty(number) && info[number]["password"] == password) {
			document.cookie = number;
		} else {
			writeJSON(name, number, password);
		}
		window.location.replace("/dianay/dubhacks/index.html");
	}

	function writeJSON(getName, getNumber, getPassword) {
		var php = new XMLHttpRequest();
		var param = "name=" + encodeURIComponent(getName) + "&number=" +
			encodeURIComponent(getNumber) + "&password=" + encodeURIComponent(getPassword);
		php.open("GET", "http://students.washington.edu/dianay/dubhacks/write.php");
		php.send(param);
	}
})();



//var ranks = this.responseXML.getElementsByTagName("rank");