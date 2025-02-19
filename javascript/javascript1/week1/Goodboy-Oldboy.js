 
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
