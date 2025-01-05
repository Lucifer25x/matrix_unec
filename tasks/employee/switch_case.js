const productOne = ['bread','water','oil']; //10
const productTwo = ['onion','milk','egg']; //20
const productThree = ['meat','cola','fruits','fish']; //40
const productFour = productOne + ',' + productTwo; //70
const productFive = productTwo + ',' + productThree //120

const hourlyPay = 10;
const countOfHours = 4;
const income = hourlyPay * countOfHours;

switch(true){
    case (income >= 10 && income < 20):
        console.log(''+productOne);
        break;
    case (income >= 20 && income < 40):
        console.log(''+productTwo);
        break;
    case (income >= 40 && income < 70):
        console.log(''+productThree);
        break;
    case (income >= 70 && income < 120):
        console.log(productFour);
        break;
    case (income >= 120):
        console.log(productFive);
        break;
    default:
        console.log("What a pity!");
        break;
}