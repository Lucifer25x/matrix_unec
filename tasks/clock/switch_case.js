const clock = 2;

switch(true){
    case (clock > 6 && clock < 12):
        console.log("Good morning!");
        break;
    case (clock >= 12 && clock < 18):
        console.log("Good afternoon!");
        break;
    case (clock >= 18 && clock < 24):
        console.log("Good evening!");
        break;
    case clock > 0:
        console.log("Good night!");
        break;
    default:
        console.log("Time is wrong!");
        break;
}