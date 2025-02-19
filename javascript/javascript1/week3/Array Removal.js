const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
  function removeName(names,nameToRemove){
  for (let i = 0; i < names.length; i++) { 
    if (names[i] === nameToRemove) { 
     names.splice(i ,1);
     break;
  }
}
}
removeName(names,nameToRemove);
  
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']