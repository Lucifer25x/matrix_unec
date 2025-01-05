function setClock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.querySelector(".clock .hour").textContent = (hour > 9) ? hour : `0${hour}`;
    document.querySelector(".clock .minute").textContent = (minute > 9) ? minute : `0${minute}`;
    document.querySelector(".clock .second").textContent = (second > 9) ? second : `0${second}`;
}

setInterval(setClock, 1000);

window.addEventListener("load", setClock);