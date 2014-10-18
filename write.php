<?php
	$name = $_GET["name"];
	$number = $_GET["number"];
	$password = $_GET["password"];
	$jsonString = str_replace ('\"','"', file_get_contents("data.json"));
	$json = json_decode($jsonString, true);
	$user = array($number=> array("name"=> $name, "password"=> $password, "friends"=> array()));
	$json = array_merge($json, $user);
	file_put_contents("data.json", json_encode($json));
?>