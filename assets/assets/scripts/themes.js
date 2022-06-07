document.getElementById("theme").addEventListener("click", changeTheme);

function changeTheme() {
    const currentTheme = localStorage.getItem("theme");

    const typeTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute('data-theme', typeTheme);

    localStorage.setItem("theme", typeTheme);
};