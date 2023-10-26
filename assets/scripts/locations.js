
var locations = document.querySelectorAll('.button');

locations.forEach(function (loc, index) {
	loc.addEventListener('click', function (e) {
		if (e.target.id == "") {
			if (e.target.parentElement.id == "index") {
				location.replace('https://luki20091.github.io/Radar-Przepisow');
			} else {
				location.replace('https://luki20091.github.io/Radar-Przepisow/' + e.target.parentElement.id);
			};
		} else if (e.target.id == "index") {
			location.replace('https://luki20091.github.io/Radar-Przepisow');
		} else {
			location.replace('https://luki20091.github.io/Radar-Przepisow/' + e.target.id);
		};
	});
});
