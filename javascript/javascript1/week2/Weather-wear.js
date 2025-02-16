function weather(t) {
    return t > 25 ? "It's beach time...!" 
         : t > 15 ? "It's time to wear a sweatshirt!"
         : t > 5  ? "You need a warm jacket!"      
         : "It's freezing! Stay HOME!";
}

    console.log(weather(14));
