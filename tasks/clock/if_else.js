const clock = 2;

if (clock > 6 && clock < 12){
    console.log("Good morning!");
} else if(clock >= 12 && clock < 18){
    console.log("Good afternoon!");
} else if(clock >= 18 && clock < 24){
    console.log("Good evening!");
} else if(clock > 0){
    console.log("Good night!");
} else {
    console.log("Time is wrong!");
}