document.getElementById("addItem").addEventListener("click", addItem);

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
        span2.textContent = document.getElementById("newItem").value.charAt(0).toUpperCase() + document.getElementById("newItem").value.slice(1).toLowerCase();
        li.appendChild(span2);



        document.getElementById("listItem").appendChild(li);
        document.getElementById("newItem").value = "";
        document.getElementById("newItem").focus();
    }
    document.getElementById("newItem").focus();
};

function removeItem() {
    document.getElementById("listItem").removeChild(this.closest("li"));
};