let recipes = [];
const recipesContainer = document.getElementById("recipes");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sortSelect = document.getElementById("sortSelect");
const recipeForm = document.getElementById("recipeForm");
const addIngredientBtn = document.getElementById("addIngredient");
const ingredientsContainer = document.getElementById("ingredients");
const timerInput = document.getElementById("timerInput");
const startTimerBtn = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");
const pageTimerDisplay = document.getElementById("pageTimer");

// Load recipes from JSON
async function fetchRecipes() {
    try {
        const res = await fetch("recipes.json");
        recipes = await res.json();
        renderRecipes(recipes);
    } catch (err) {
        console.error("Error loading recipes:", err);
    }
}

// Render recipes
function renderRecipes(list) {
    recipesContainer.innerHTML = "";
    list.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.picture_url}" alt="${recipe.title}">
            <p>${recipe.description}</p>
            <table>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${recipe.ingredients.map(ing => `
                        <tr>
                            <td>${ing.name}</td>
                            <td>${ing.amount}</td>
                            <td>${ing.price} DKK</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
        recipesContainer.appendChild(div);
    });
}

// Search by title or ingredient
function searchRecipes() {
    const term = searchInput.value.toLowerCase();
    const result = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(term))
    );
    renderRecipes(result);
}

// Sort recipes
function sortRecipes(ascending = true) {
    const sorted = [...recipes].sort((a, b) => {
        const aLen = a.ingredients.length;
        const bLen = b.ingredients.length;
        return ascending ? aLen - bLen : bLen - aLen;
    });
    renderRecipes(sorted);
}

// Add new ingredient input fields
addIngredientBtn.addEventListener("click", () => {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "ingredient-name";
    nameInput.placeholder = "Ingredient Name";
    nameInput.required = true;

    const amountInput = document.createElement("input");
    amountInput.type = "text";
    amountInput.className = "ingredient-amount";
    amountInput.placeholder = "Amount";
    amountInput.required = true;

    ingredientsContainer.appendChild(nameInput);
    ingredientsContainer.appendChild(amountInput);
});

// Handle form submission
recipeForm.addEventListener("submit", event => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const picture_url = document.getElementById("picture_url").value;
    const description = document.getElementById("description").value;

    const ingredientNames = document.querySelectorAll(".ingredient-name");
    const ingredientAmounts = document.querySelectorAll(".ingredient-amount");

    const newIngredients = Array.from(ingredientNames).map((input, index) => ({
        name: input.value,
        amount: ingredientAmounts[index].value,
        price: 0
    }));

    const newRecipe = {
        id: Date.now(),
        title,
        picture_url,
        description,
        ingredients: newIngredients
    };

    recipes.push(newRecipe);
    renderRecipes(recipes);
    recipeForm.reset();
    ingredientsContainer.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingredient Name" required>
        <input type="text" class="ingredient-amount" placeholder="Amount" required>
    `;
});

// Cooking countdown timer
startTimerBtn.addEventListener("click", () => {
    let minutes = parseInt(timerInput.value);
    if (isNaN(minutes) || minutes <= 0) return;

    let seconds = minutes * 60;
    updateTimerDisplay(seconds);

    const countdown = setInterval(() => {
        seconds--;
        updateTimerDisplay(seconds);

        if (seconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
});

function updateTimerDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    timerDisplay.textContent = `Time left: ${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Page time tracker
let timeSpent = 0;
setInterval(() => {
    timeSpent++;
    pageTimerDisplay.textContent = `You have spent ${timeSpent} seconds on this page.`;
}, 1000);

// Event listeners
searchButton.addEventListener("click", searchRecipes);

// Event listener for sort select
sortSelect.addEventListener("change", (event) => {
    const sortType = event.target.value;
    if (sortType === "asc") {
        sortRecipes(true);
    } else if (sortType === "desc") {
        sortRecipes(false);
    }
});

// Event listener for "Add Recipe" button
document.getElementById("addRecipeBtn").addEventListener("click", () => {
    document.getElementById("recipeForm").scrollIntoView({ behavior: "smooth" });
});

// Initialize
fetchRecipes();