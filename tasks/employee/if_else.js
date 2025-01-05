const productOne = ['bread','water','oil']; //10
const productTwo = ['onion','milk','egg']; //20
const productThree = ['meat','cola','fruits','fish']; //40
const productFour = productOne + ',' + productTwo; //70
const productFive = productTwo + ',' + productThree //120

const hourlyPay = 3;
const countOfHours = 5;
const income = hourlyPay * countOfHours;
if (income >= 10 && income < 20){
    console.log(''+productOne);
} else if (income >= 20 && income < 40){
    console.log(''+productTwo);
} else if (income >= 40 && income < 70){
    console.log(''+productThree);
} else if (income >= 70 && income < 120){
    console.log(productFour);
} else if (income >= 120){
    console.log(productFive);
} else {
    console.log("What a pity!");
}