function setClock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.querySelector(".clock_hand").style.transform = `rotate(${90+(hour/24)*360 + (minute/60)*6}deg)`;
    document.querySelector(".minute_hand").style.transform = `rotate(${180 + (minute/60)*360 + (second/60)*6}deg)`;
    document.querySelector(".second_hand").style.transform = `rotate(${180+(second/60)*360}deg)`;
}

setInterval(setClock, 1000);

window.addEventListener("load", setClock);