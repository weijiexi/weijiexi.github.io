function toggleTheme() {
    let listElement = document.querySelector("body");

    console.log("debug: ", listElement.classList);

    listElement.classList.toggle("dark-mode")
}

let buttonVariable = document.getElementById("toggleButton");

buttonVariable.onclick = toggleTheme;