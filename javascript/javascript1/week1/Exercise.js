//Age-ify (A future age calculator)

const yearOfBirth = 1988;
const yearFuture = 2028;
const age = yearFuture - yearOfBirth ;
console.log(`You will be ${age} years old in ${yearFuture}`);

 



 //Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth =  2019;
const dogYearFuture =2025;
const dogYear = dogYearFuture - dogYearOfBirth ;
const shouldShowResultInDogYears = false;
console.log(
shouldShowResultInDogYears
    ?`Your dog will be ${dogYear} dog years old in  {dogYearFuture}`
     :`Your dog will be ${dogYear * 7} human years old in ${dogYearFuture}`
);
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
      ? "Peter paid too much for the house!"
      : "Peter got a great deal on the house!"
    );

const height2 = 8;
const width2 = 5;
const deep2 = 11;
const volumeJulia = deep2 * width2 * height2;
const gardenSizeJulia=70;
const juliaPaid = 1000000;
const actualPriceJulia = volumeJulia * 2.5 * 1000 + gardenSizeJulia * 300
console.log(`Julia house Price Is ${actualPriceJulia}`);
console.log (
    actualPriceJulia < juliaPaid
      ? "Julia paid too much for the house!"
      : "Julia got a great deal on the house!"
);


//Startup Name

const firstWords = [ "Easy", "Creative", "Tech", "Smart", "Future", "Digital", "Next", "Global", "Prime", "Quick"];
const secondWords =["Solutions", "Innovations", "Ventures", "Systems", "Labs", "Startups", "Ideas", "Technologies", "Works", "Studios"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName =firstWords[randomNumber1] + " "+secondWords[randomNumber2];
const nameLength = startupName.length;
console.log(`The startup name Is: "${startupName}" , contains ${nameLength} characters`);


