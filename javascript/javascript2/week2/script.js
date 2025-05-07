const recipes = [
    {
        id: 1,
        title: "Gløgg",
        picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
        ingredients: [
          { NAME: "Orange zest", AMOUNT: "0.5" },
          { NAME: "Water", AMOUNT: "200 ml" },
          { NAME: "Sugar", AMOUNT: "275 g" },
          { NAME: "Whole cloves", AMOUNT: "5" },
          { NAME: "Cinnamon sticks", AMOUNT: "2" },
          { NAME: "Spice", AMOUNT: "1 g" },
          { NAME: "Bottle of red wine", AMOUNT: "1" },
          { NAME: "Raisins", AMOUNT: "100 g" },
          { NAME: "Slipped Almonds", AMOUNT: "50 g" }
        ],
        description: "Mix everything, heat it, and you are good to go!"
      },
      {
        id: 2,
        title: "Ghorme Sabzi",
        picture_url: "https://as2.ftcdn.net/v2/jpg/09/98/14/69/1000_F_998146935_Pv9JskdcvMLKlypc4JPDlnV33Ys0SnCP.jpg",
        ingredients: [
          { NAME: "Meat", AMOUNT: "250 gr" },
          { NAME: "Water", AMOUNT: "200 ml" },
          { NAME: "Parsley", AMOUNT: "250 g" },
          { NAME: "Fenugreek", AMOUNT: "250 g" },
          { NAME: "Green onions", AMOUNT: "220 g" },
          { NAME: "Pepper", AMOUNT: "10 g" },
          { NAME: "Dried Lime", AMOUNT: "2 pcs" }
        ],
        description: "A traditional Persian herb stew."
      },
      {
        id: 3,
        title: "Fesenjan",
        picture_url: "https://cookingwithzahra.com/wp-content/uploads/2023/12/faseenjoon-chicken-3-1152x2048.jpg",
        ingredients: [
          { NAME: "Chicken", AMOUNT: "500 gr" },
          { NAME: "Water", AMOUNT: "5 Cup" },
          { NAME: "Ground Saffron", AMOUNT: "1 g" },
          { NAME: "Cardamom Powder", AMOUNT: "250 g" },
          { NAME: "Finely Ground Walnuts", AMOUNT: "400 g" },
          { NAME: "Vegetable Oil", AMOUNT: "1/4 Cup" },
          { NAME: "Black Pepper", AMOUNT: "10 g" },
          { NAME: "Rose Water", AMOUNT: "20 ml" },
          { NAME: "Salt", AMOUNT: "2 tbsp" }
        ],
        description: "A rich Persian stew made with walnuts and pomegranate."
      }
    ];
    

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
            li.textContent = `${ingredient.NAME}: ${ingredient.AMOUNT}`;
            ingredientsList.appendChild(li);
        });

        recipeDiv.appendChild(title);
        recipeDiv.appendChild(image);
        recipeDiv.appendChild(desc);
        recipeDiv.appendChild(ingredientsList);
        recipesDiv.appendChild(recipeDiv);
    });
}

displayRecipes(recipes);

document.getElementById("searchButton").addEventListener("click", () => {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
});


document.getElementById("sortAsc").addEventListener("click", () => {
    recipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
    displayRecipes(recipes);
});

document.getElementById("sortDesc").addEventListener("click", () => {
    recipes.sort((a, b) => b.ingredients.length - a.ingredients.length);
    displayRecipes(recipes);
});

document.getElementById("recipeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const picture_url = document.getElementById("picture_url").value;
    const description = document.getElementById("description").value;
    
    const newRecipe = {
        id: Date.now(),
        title,
        picture_url,
        ingredients: [],
        description
    };

    recipes.push(newRecipe);
    displayRecipes(recipes);
    this.reset();
});
