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
		alert("find");
		var info = JSON.parse(this.responseText);
		if (info.hasOwnProperty(number) && info[number]["password"] == password) {
			document.cookie = "number=" + number;
			window.location.replace("/dianay/dubhacks/index.html");
		}

		//writex(name, number, password);
	}
})();



//var ranks = this.responseXML.getElementsByTagName("rank");