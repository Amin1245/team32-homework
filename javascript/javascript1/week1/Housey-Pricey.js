//Housey pricey (A house price estimator)

const height = 10;
const width = 8;
const deep = 10;
const peterPaid = 2500000;
const volumePeter = deep * width * height;
const gardenSizePeter=100;
const actualPricePeter = volumePeter * 2.5 * 1000 + gardenSizePeter * 300
console.log(`Peter house Price Is ${actualPricePeter}`);
    console.log (
        actualPricePeter < peterPaid
        ? "This house is a great deal! The owner is paying too little"
        :"This house is too expensive!"
    );

const height2 = 8;
const width2 = 5;
const deep2 = 11;
const volumeJulia = deep2 * width2 * height2;
const gardenSizeJulia=100;
const juliaPaid = 1000000;
const actualPriceJulia = volumeJulia * 2.5 * 1000 + gardenSizeJulia * 300
console.log(`Julia house Price Is ${actualPriceJulia}`);
console.log (
    actualPriceJulia < juliaPaid
    ? "This house is a great deal! The owner is paying too little"
    :"This house is too expensive!"
);
