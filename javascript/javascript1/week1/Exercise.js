//Age-ify (A future age calculator)

const yearOfBirth = 1988;
const yearFuture = 2038;
const age = yearFuture - yearOfBirth ;
console.log("You will be " + age +" years old in " + yearFuture );





//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth =  2019;
const dogYearFuture =2045;
const dogYear = dogYearFuture - dogYearOfBirth ;
const shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be "+  dogYear  + " dog years old in "+ dogYearFuture)
} else {
    console.log("Your dog will be "+ dogYear * 7 + " human years old in " + dogYearFuture) 
};




//Housey pricey (A house price estimator)

const height = 10;
const wide = 8;
const deep = 10;
volumeInMeters = deep * wide * height;
gardenSizeInM2=100;
console.log("Peter house Price Is "+(housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300));

const height2 = 8;
const wide2 = 5;
const deep2 = 11;
volumeInMeters = deep2 * wide2 * height2;
gardenSizeInM2=100;
console.log("Julia house Price Is "+(housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300));



const firstWords = [ "Easy", "Creative", "Tech", "Smart", "Future", "Digital", "Next", "Global", "Prime", "Quick",];
const secondWords =["Solutions", "Innovations", "Ventures", "Systems", "Labs", "Startups", "Ideas", "Technologies", "Works", "Studios"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName =firstWords[randomNumber1] + " "+secondWords[randomNumber2];
const namelength = startupName.length;
console.log("The startup name Is:" + startupName +" "+ " contains " +namelength + " characters ");