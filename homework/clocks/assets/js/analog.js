// function setClock(){
//     const date = new Date();
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     const second = date.getSeconds();

//     document.querySelector(".clock_hand").style.transform = `rotate(${180 + (hour%12)*360 + minute/10}deg)`;
//     document.querySelector(".minute_hand").style.transform = `rotate(${180 + minute * 6 + second/10}deg)`;
//     document.querySelector(".second_hand").style.transform = `rotate(${180 + (second/60)*360}deg)`;
// }

function setClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const secondDegrees = (seconds / 60) * 360;

    document.querySelector(".clock_hand").style.transform = `rotate(${180 + hourDegrees}deg)`;
    document.querySelector(".minute_hand").style.transform = `rotate(${180+ minuteDegrees}deg)`;
    document.querySelector(".second_hand").style.transform = `rotate(${180 + secondDegrees}deg)`;
}

setInterval(setClock, 1000);

window.addEventListener("load", setClock);