const recipes = [
    {
        id: 1,
        title: "Gløgg",
        picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
        ingredients: [
          { name: "Orange zest", amount: "0.5" },
          { name: "Water", amount: "200 ml" },
          { name: "Sugar", amount: "275 g" },
          { name: "Whole cloves", amount: "5" },
          { name: "Cinnamon sticks", amount: "2" },
          { name: "Spice", amount: "1 g" },
          { name: "Bottle of red wine", amount: "1" },
          { name: "Raisins", amount: "100 g" },
          { name: "Slipped Almonds", amount: "50 g" }
        ],
        description: "Mix everything, heat it, and you are good to go!"
      },
      {
        id: 2,
        title: "Ghorme Sabzi",
        picture_url: "https://as2.ftcdn.net/v2/jpg/09/98/14/69/1000_F_998146935_Pv9JskdcvMLKlypc4JPDlnV33Ys0SnCP.jpg",
        ingredients: [
          { name: "Meat", amount: "250 gr" },
          { name: "Water", amount: "200 ml" },
          { name: "Parsley", amount: "250 g" },
          { name: "Fenugreek", amount: "250 g" },
          { name: "Green onions", amount: "220 g" },
          { name: "Pepper", amount: "10 g" },
          { name: "Dried Lime", amount: "2 pcs" }
        ],
        description: "A traditional Persian herb stew."
      },
      {
        id: 3,
        title: "Fesenjan",
        picture_url: "https://cookingwithzahra.com/wp-content/uploads/2023/12/faseenjoon-chicken-3-1152x2048.jpg",
        ingredients: [
          { name: "Chicken", amount: "500 gr" },
          { name: "Water", amount: "5 Cup" },
          { name: "Ground Saffron", amount: "1 g" },
          { name: "Cardamom Powder", amount: "250 g" },
          { name: "Finely Ground Walnuts", amount: "400 g" },
          { name: "Vegetable Oil", amount: "1/4 Cup" },
          { name: "Black Pepper", amount: "10 g" },
          { name: "Rose Water", amount: "20 ml" },
          { name: "Salt", amount: "2 tbsp" }
        ],
        description: "A rich Persian stew made with walnuts and pomegranate."
      }
    ];
    
let filteredRecipes = [...recipes];
function displayRecipes(recipeList) {
    const recipesDiv = document.getElementById("recipes");
    recipesDiv.innerHTML = "";
    recipeList.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        const title = document.createElement("h2");
        title.textContent = recipe.title;

        const image = document.createElement("img");
        image.src = recipe.picture_url;
        image.alt = recipe.title;

        const desc = document.createElement("p");
        desc.textContent = recipe.description;

        const ingredientsList = document.createElement("ul");
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = `${ingredient.name}: ${ingredient.amont || "ingredient amount not specified"}`;
            ingredientsList.appendChild(li);
        });

        recipeDiv.appendChild(title);
        recipeDiv.appendChild(image);
        recipeDiv.appendChild(desc);
        recipeDiv.appendChild(ingredientsList);
        recipesDiv.appendChild(recipeDiv);
    });
}

displayRecipes(filteredRecipes);

document.getElementById("searchButton").addEventListener("click", () => {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
});

document.getElementById("sortAsc").addEventListener("click", () => {
    filteredRecipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
    displayRecipes(filteredRecipes);
});

document.getElementById("sortDesc").addEventListener("click", () => {
    filteredRecipes.sort((a, b) => b.ingredients.length - a.ingredients.length);
    displayRecipes(filteredRecipes);
});

document.getElementById("recipeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const picture_url = document.getElementById("picture_url").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!title || !picture_url || !description) {
        alert("Please fill in all fields before submitting the recipe.");
        return;
    }

    const newRecipe = {
        id: Date.now(),
        title,
        picture_url,
        ingredients: [],
        description
    };

    const ingredientName = document.getElementById("ingredient_name").value.trim();
    const ingredientAmount = document.getElementById("ingredient_amount").value.trim();

    if (ingredientName && ingredientAmount) {
        newRecipe.ingredients.push({ NAME: ingredientName, AMOUNT: ingredientAmount });
    } else {
        alert("Please provide both ingredient name and amount.");
        return;
    }

    recipes.push(newRecipe);
    displayRecipes(recipes);
    this.reset();
});

// Cooking Timer
document.getElementById("startTimer").addEventListener("click", () => {
    const timeInput = document.getElementById("timerInput").value;
    const timeInSeconds = parseInt(timeInput, 10);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert("Please enter a valid time in seconds.");
        return;
    }

    setTimeout(() => {
        alert("Time's up! Your cooking timer has finished.");
        const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
        audio.play();
    }, timeInSeconds * 1000);
});

// Page Timer
let timeSpent = 0;
setInterval(() => {
    timeSpent++;
    document.getElementById("pageTimer").textContent = `Time spent on page: ${timeSpent} seconds`;
}, 1000);