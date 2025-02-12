function weather(t) {
    return t > 25 ? "It's beach time...!" 
         : t > 15 && t <= 25 ? "It's time to wear a sweatshirt!"
         : t > 5 && t <= 15 ? "You need a warm jacket!"      
         : "It's freezing! Stay HOME!";
}

    console.log(weather(1));
