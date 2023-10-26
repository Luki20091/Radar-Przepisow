document.getElementById("theme").addEventListener("click", changeTheme);

function changeTheme() {
    const currentTheme = localStorage.getItem("theme");
    const typeTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", typeTheme);
    location.reload();
};
