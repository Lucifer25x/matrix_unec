const age = 18;

switch(true){
    case (age >= 0 & age < 3):
        console.log("Körpə");
        break;
    case (age < 13):
        console.log("Uşaq");
        break;
    case (age < 18):
        console.log("Yeniyetmə");
        break;
    case (age < 35):
        console.log("Gənc");
        break;
    case (age < 55):
        console.log("Orta yaşli");
        break;
    case (age < 90):
        console.log("Yaşli");
        break;
    default:
        console.log("Mərmər");
        break;
}