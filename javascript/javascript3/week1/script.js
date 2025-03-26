let recipes = [];

fetch("recipes.json")
  .then(response => response.json())
  .then(data => {
    recipes = data;
    filteredRecipes = [...recipes]; // کپی درست
    displayRecipes(filteredRecipes);

    // همه eventListener ها رو اینجا بذار، چون حالا داده‌ها آماده‌ان

    document.getElementById("searchButton").addEventListener("click", () => {
        const searchText = document.getElementById("searchInput").value.toLowerCase();
        filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchText) || 
            recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(searchText))
        );
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

  })
  .catch(error => console.error("Error loading recipes:", error));

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
      li.textContent = `${ingredient.name}: ${ingredient.amount || "ingredient amount not specified"} (${ingredient.price || "price not available"})`;
      ingredientsList.appendChild(li);
    });

    recipeDiv.appendChild(title);
    recipeDiv.appendChild(image);
    recipeDiv.appendChild(desc);
    recipeDiv.appendChild(ingredientsList);
    recipesDiv.appendChild(recipeDiv);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchText) ||
    recipe.ingredients.some(ingredient => ingredient.NAME.toLowerCase().includes(searchText))
  );
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
  const ingredientName = document.getElementById("ingredient_name").value.trim();
  const ingredientAmount = document.getElementById("ingredient_amount").value.trim();

  if (!title || !picture_url || !description) {
    alert("Please fill in all recipe fields.");
    return;
  }

  if (!ingredientName || !ingredientAmount) {
    alert("Please provide both ingredient name and amount.");
    return;
  }

  const newRecipe = {
    id: Date.now(),
    title,
    picture_url,
    ingredients: [{ NAME: ingredientName, AMOUNT: ingredientAmount }],
    description
  };

  recipes.push(newRecipe);
  filteredRecipes = [...recipes];
  displayRecipes(filteredRecipes);
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

// Time spent on page
let timeSpent = 0;
setInterval(() => {
  timeSpent++;
  document.getElementById("pageTimer").textContent = `Time spent on page: ${timeSpent} seconds`;
}, 1000);
