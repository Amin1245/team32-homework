// Startup Name
const firstWords = [ "Easy", "Creative", "Tech", "Smart", "Future", "Digital", "Next", "Global", "Prime", "Quick",];
const secondWords =["Solutions", "Innovations", "Ventures", "Systems", "Labs", "Startups", "Ideas", "Technologies", "Works", "Studios"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName =firstWords[randomNumber1] + " "+secondWords[randomNumber2];
const nameLength = startupName.length;
console.log(`The startup name Is: "${startupName}" , contains ${nameLength} characters`);
