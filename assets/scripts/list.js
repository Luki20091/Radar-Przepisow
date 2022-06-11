document.getElementById("addItem").addEventListener("click", function (event) {
	addItem();
});

document.getElementById("newItem").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    if (document.getElementById("newItem").value !== "") {
        var li = document.createElement("li");

        

        var span1 = document.createElement("span1");
        span1.classList.add("remove");
        span1.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        span1.addEventListener("click", removeItem);
        li.appendChild(span1);



        var span2 = document.createElement("span2");
		span2.classList.add("span2");
        span2.textContent = document.getElementById("newItem").value.charAt(0).toUpperCase() + document.getElementById("newItem").value.slice(1).toLowerCase();
        li.appendChild(span2);
		document.getElementById("listItem").appendChild(li);
		checkItems();
		
        document.getElementById("newItem").value = "";
        document.getElementById("newItem").focus();
		document.getElementById("addItemBar").classList.add("top");


	}
	document.getElementById("newItem").focus();
};

function removeItem() {
	document.getElementById("listItem").removeChild(this.closest("li"));
	checkItems();
};






function checkItems() {
	const s00 = [...document.querySelectorAll('.list00 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s01 = [...document.querySelectorAll('.list01 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s02 = [...document.querySelectorAll('.list02 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s03 = [...document.querySelectorAll('.list03 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s04 = [...document.querySelectorAll('.list04 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s05 = [...document.querySelectorAll('.list05 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s06 = [...document.querySelectorAll('.list06 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s07 = [...document.querySelectorAll('.list07 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s08 = [...document.querySelectorAll('.list08 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s09 = [...document.querySelectorAll('.list09 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s10 = [...document.querySelectorAll('.list10 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s11 = [...document.querySelectorAll('.list11 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s12 = [...document.querySelectorAll('.list12 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s13 = [...document.querySelectorAll('.list13 li span')].map(o => '"' + o.innerText + '"').join(', ');
	const s2 = [...document.querySelectorAll('span2')].map(o => '"' + o.innerText + '"').join(', ');

	let check00 = s00.includes(s2);
	if (check00 == true) {
		document.getElementById("div00").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check00 == false) {
		document.getElementById("div00").style.display = "none";
	}

	let check01 = s01.includes(s2);
	if (check01 == true) {
		document.getElementById("div01").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check01 == false) {
		document.getElementById("div01").style.display = "none";
	}

	let check02 = s02.includes(s2);
	if (check02 == true) {
		document.getElementById("div02").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check02 == false) {
		document.getElementById("div02").style.display = "none";
	}

	let check03 = s03.includes(s2);
	if (check03 == true) {
		document.getElementById("div03").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check03 == false) {
		document.getElementById("div03").style.display = "none";
	}

	let check04 = s04.includes(s2);
	if (check04 == true) {
		document.getElementById("div04").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check04 == false) {
		document.getElementById("div04").style.display = "none";
	}

	let check05 = s05.includes(s2);
	if (check05 == true) {
		document.getElementById("div05").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check05 == false) {
		document.getElementById("div05").style.display = "none";
	}

	let check06 = s06.includes(s2);
	if (check06 == true) {
		document.getElementById("div06").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check06 == false) {
		document.getElementById("div06").style.display = "none";
	}

	let check07 = s07.includes(s2);
	if (check07 == true) {
		document.getElementById("div07").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check07 == false) {
		document.getElementById("div07").style.display = "none";
	}

	let check08 = s08.includes(s2);
	if (check08 == true) {
		document.getElementById("div08").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check08 == false) {
		document.getElementById("div08").style.display = "none";
	}

	let check09 = s09.includes(s2);
	if (check09 == true) {
		document.getElementById("div09").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check09 == false) {
		document.getElementById("div09").style.display = "none";
	}

	let check10 = s10.includes(s2);
	if (check10 == true) {
		document.getElementById("div10").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check10 == false) {
		document.getElementById("div10").style.display = "none";
	}

	let check11 = s11.includes(s2);
	if (check11 == true) {
		document.getElementById("div11").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check11 == false) {
		document.getElementById("div11").style.display = "none";
	}

	let check12 = s12.includes(s2);
	if (check12 == true) {
		document.getElementById("div12").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check12 == false) {
		document.getElementById("div12").style.display = "none";
	}

	let check13 = s13.includes(s2);
	if (check13 == true) {
		document.getElementById("div13").style.display = "block";
		document.getElementById("error").style.display = "none";
	}
	if (check13 == false) {
		document.getElementById("div13").style.display = "none";
	}





	if (check00 == false && check01 == false && check02 == false && check03 == false && check04 == false && check05 == false && check06 == false && check07 == false && check08 == false && check09 == false && check10 == false && check11 == false && check12 == false && check13 == false || s2 == []) {
		document.getElementById("div00").style.display = "none";
		document.getElementById("div01").style.display = "none";
		document.getElementById("div02").style.display = "none";
		document.getElementById("div03").style.display = "none";
		document.getElementById("div04").style.display = "none";
		document.getElementById("div05").style.display = "none";
		document.getElementById("div06").style.display = "none";
		document.getElementById("div07").style.display = "none";
		document.getElementById("div08").style.display = "none";
		document.getElementById("div09").style.display = "none";
		document.getElementById("div10").style.display = "none";
		document.getElementById("div11").style.display = "none";
		document.getElementById("div12").style.display = "none";
		document.getElementById("div13").style.display = "none";
		document.getElementById("error").style.display = "block";









	}

}







