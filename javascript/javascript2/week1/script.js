const recipeObject = {
  id: 1,
  title: "Gløgg",
  picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
  ingredients: [
      { NAME: "Orange zest", AMOUNT: "0.5" },
      { NAME: "Water", AMOUNT: "200 ml" },
      { NAME: "Sugar", AMOUNT: "275 g" },
      { NAME: "Whole cloves", AMOUNT: "5" },
      { NAME: "Cinnamon sticks", AMOUNT: "2"},
      { NAME: "Spice", AMOUNT: undefined },
      { NAME: "Bottle of red wine", AMOUNT: "1"},
      { NAME: "Raisins", AMOUNT: "100 g" },
      { NAME: "Slipped Almonds", AMOUNT: "50 g"},
  ],
  description: "Mix everything, heat it, and you are good to go!"
};

const recipesDiv = document.getElementById("recipes" );

function displayRecipe(recipe) {
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
  recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = `${ingredient.NAME}: ${ingredient.AMOUNT || "Some"}`;
      ingredientsList.appendChild(li);
  });

  recipeDiv.appendChild(title);
  recipeDiv.appendChild(image);
  recipeDiv.appendChild(desc);
  recipeDiv.appendChild(ingredientsList);

  recipesDiv.appendChild(recipeDiv);
}

displayRecipe(recipeObject);

document.getElementById("recipeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const picture_url = document.getElementById("picture_url").value;
  const description = document.getElementById("description").value;
  
  const ingredientInputs = document.querySelectorAll(".ingredient-name");
  const amountInputs = document.querySelectorAll(".ingredient-amount");

  let ingredients = [];
  ingredientInputs.forEach((input, index) => {
      ingredients.push({
          NAME: input.value ,
          AMOUNT: amountInputs[index].value
      });
  });

  const newRecipe = {
      id: Date.now(),
      title,
      picture_url,
      ingredients,
      description
  };

  displayRecipe(newRecipe);

  this.reset();
});

document.getElementById("addIngredient").addEventListener("click", function () {
  const ingredientsDiv = document.getElementById("ingredients");

  const newIngredientName = document.createElement("input");
  newIngredientName.type = "text";
  newIngredientName.classList.add("ingredient-name");
  newIngredientName.placeholder = "Ingredient Name";
  newIngredientName.required = true;

  const newIngredientAmount = document.createElement("input");
  newIngredientAmount.type = "text";
  newIngredientAmount.classList.add("ingredient-amount");
  newIngredientAmount.placeholder = "Amount";
  newIngredientAmount.required = true;

  ingredientsDiv.appendChild(newIngredientName);
  ingredientsDiv.appendChild(newIngredientAmount);
});
