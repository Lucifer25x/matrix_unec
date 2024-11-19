function changeTheme(theme){
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    if(theme == "dark"){      
        document.getElementById("theme").textContent = "Light";
    } else {
        document.getElementById("theme").textContent = "Dark";
    }
}

document.getElementById("theme").onclick = () => {
    changeTheme((document.getElementById("theme").textContent == "Dark") ? "dark" : "light");
}

// Load the theme from local storage
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if(theme.length > 0){
        changeTheme(theme);
    }
})