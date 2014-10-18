<?php
	$name = $_NAME["name"];
	$activity = $_GET["activity"];
	$hour = $_GET["hour"];
	$min = $_GET["min"];
	$location - $_GET["location"];
	$jsonString = str_replace ('\"','"', file_get_contents("data.json"));
	$json = json_decode($jsonString, true);
	$activities = array("activities"=> array("activity"=> $activity, "time"=> $hour + $min, "location"=> $location));
	$user = $json.$name.[0];
	$json = array_merge($user, $activities);
	file_put_contents("data.json", json_encode($json));
?>