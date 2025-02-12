function getFullname(firstName, surName, useFormalName = false) {
    if (!firstName || !surName) {
       return "Please insert first name and surname"  
    };
        if (useFormalName) {
            return `"Lord ${firstName} ${surName}"`
        } else {
            return`"${firstName} ${surName}"`
        };
    
};

const fullname1 = getFullname("Bardia","Babapour" ,true) ;
const fullname2 = getFullname ("Bardia", "Babapour",false);

//console.log (fullname2);

console.log (getFullname("Amin","",true));
