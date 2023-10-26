var locations = document.querySelectorAll('.button');

locations.forEach(function (loc, index) {
	loc.addEventListener('click', function (e) {
		if (e.target.id == "") {
			if (e.target.parentElement.id == "index") {
				location.href = "index.html";
			} else {
				location.href = e.target.parentElement.id + ".html"
			};
		} else if (e.target.id == "index") {
			location.href = "index.html";
		} else {
			location.href = e.target.id + ".html"
		};
	});
});





/*
var locations = document.querySelectorAll('.button');

locations.forEach(function (loc, index) {
	loc.addEventListener('click', function (e) {
		if (e.target.id == "") {
			if (e.target.parentElement.id == "index") {
				location.replace('https://luki20091.github.io/RadioZST');
			} else {
				location.replace('https://luki20091.github.io/RadioZST/' + e.target.parentElement.id);
			};
		} else if (e.target.id == "index") {
			location.replace('https://luki20091.github.io/RadioZST');
		} else {
			location.replace('https://luki20091.github.io/RadioZST/' + e.target.id);
		};
	});
});
*/


