$(window).load(function () {

	alert("Welcome to KittenCollage!");

});

$(document).ready(function() {

	$("#add").click(function() {

		var min,
			max,
			width,
			height,
			$img;

		min = 100;
		max = 300;

		width = Math.floor((Math.random() * max) + min);
		height = Math.floor((Math.random() * max) + min);

		$img = $("<img />");
		$img.attr("class", "img");
		$img.attr("src", "http://placekitten.com/" + width + "/" + height);
		$img.draggable();
		$img.appendTo("body");

	});

});