document.getElementById("eye").onclick = () => {
    if(document.getElementById("password").type === "password"){
        document.getElementById("password").type = "text";
        document.querySelector(".eye-btn").classList.remove("ri-eye-off-fill");
        document.querySelector(".eye-btn").classList.add("ri-eye-fill");
    } else {
        document.getElementById("password").type = "password";
        document.querySelector(".eye-btn").classList.remove("ri-eye-fill");
        document.querySelector(".eye-btn").classList.add("ri-eye-off-fill");
    }
}