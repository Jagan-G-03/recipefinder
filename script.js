
const recipes = [
    {
        id: 1,
        name: "Vegetable Fried Rice",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
        description: "A delicious rice dish loaded with fresh vegetables.",
        ingredients: [
            { name: "rice", qty: "2 cups cooked rice" },
            { name: "carrot", qty: "1 chopped carrot" },
            { name: "onion", qty: "1 chopped onion" },
            { name: "garlic", qty: "2 cloves" },
            { name: "oil", qty: "2 tbsp" }
        ],
        instructions: [
            "Cook the rice and let it cool.",
            "Heat oil in a pan and saute garlic and onion.",
            "Add carrots and other vegetables.",
            "Add rice and seasonings.",
            "Mix well and serve hot."
        ],
        prep: 10,
        cook: 15,
        difficulty: "Easy",
        vegetarian: true,
        category: "Lunch",
        cuisine: "Asian",
        rating: 4.8,
        nutrition: "Approx. 320 calories per serving"
    },

    {
        id: 2,
        name: "Tomato Pasta",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Classic pasta tossed in a rich tomato sauce.",
        ingredients: [
            { name: "pasta", qty: "200 g pasta" },
            { name: "tomato", qty: "3 tomatoes" },
            { name: "onion", qty: "1 onion" },
            { name: "garlic", qty: "2 cloves" },
            { name: "cheese", qty: "50 g cheese" }
        ],
        instructions: [
            "Boil pasta according to the package instructions.",
            "Saute chopped onion and garlic.",
            "Add chopped tomatoes and cook into a sauce.",
            "Add cooked pasta and mix.",
            "Top with cheese and serve."
        ],
        prep: 10,
        cook: 20,
        difficulty: "Easy",
        vegetarian: true,
        category: "Dinner",
        cuisine: "Italian",
        rating: 4.7,
        nutrition: "Approx. 390 calories per serving"
    },

    {
        id: 3,
        name: "Potato Masala",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80",
        description: "Comforting spiced potatoes with onion.",
        ingredients: [
            { name: "potato", qty: "3 potatoes" },
            { name: "onion", qty: "2 onions" },
            { name: "oil", qty: "2 tbsp" },
            { name: "tomato", qty: "1 tomato" },
            { name: "garlic", qty: "2 cloves" }
        ],
        instructions: [
            "Boil the potatoes until soft.",
            "Heat oil and saute onion and garlic.",
            "Add tomato and spices.",
            "Add mashed potatoes and mix.",
            "Cook for five minutes and serve."
        ],
        prep: 10,
        cook: 20,
        difficulty: "Easy",
        vegetarian: true,
        category: "Lunch",
        cuisine: "Indian",
        rating: 4.6,
        nutrition: "Approx. 250 calories per serving"
    },

    {
        id: 4,
        name: "Vegetable Sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
        description: "A quick sandwich filled with crunchy vegetables.",
        ingredients: [
            { name: "bread", qty: "4 slices" },
            { name: "tomato", qty: "1 tomato" },
            { name: "onion", qty: "1 onion" },
            { name: "cheese", qty: "2 slices" },
            { name: "potato", qty: "1 potato" }
        ],
        instructions: [
            "Boil and slice the potato.",
            "Slice the tomato and onion.",
            "Place vegetables and cheese between bread slices.",
            "Toast until golden.",
            "Serve with your favorite sauce."
        ],
        prep: 10,
        cook: 5,
        difficulty: "Easy",
        vegetarian: true,
        category: "Breakfast",
        cuisine: "International",
        rating: 4.5,
        nutrition: "Approx. 280 calories per serving"
    },

    {
        id: 5,
        name: "Cheese Omelette",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",
        description: "Fluffy eggs filled with melted cheese.",
        ingredients: [
            { name: "egg", qty: "2 eggs" },
            { name: "cheese", qty: "40 g cheese" },
            { name: "onion", qty: "1/2 onion" },
            { name: "tomato", qty: "1 tomato" },
            { name: "oil", qty: "1 tbsp" }
        ],
        instructions: [
            "Beat the eggs in a bowl.",
            "Add chopped onion and tomato.",
            "Heat oil in a pan.",
            "Pour in the egg mixture.",
            "Add cheese, fold the omelette and cook thoroughly."
        ],
        prep: 5,
        cook: 8,
        difficulty: "Easy",
        vegetarian: false,
        category: "Breakfast",
        cuisine: "International",
        rating: 4.7,
        nutrition: "Approx. 260 calories per serving"
    },

    {
        id: 6,
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
        description: "A flavorful chicken curry with aromatic spices.",
        ingredients: [
            { name: "chicken", qty: "500 g chicken" },
            { name: "onion", qty: "2 onions" },
            { name: "tomato", qty: "2 tomatoes" },
            { name: "garlic", qty: "3 cloves" },
            { name: "oil", qty: "3 tbsp" }
        ],
        instructions: [
            "Heat oil and saute onion and garlic.",
            "Add tomatoes and curry spices.",
            "Add chicken and mix thoroughly.",
            "Add water and simmer until the chicken is fully cooked.",
            "Serve hot with rice."
        ],
        prep: 15,
        cook: 35,
        difficulty: "Medium",
        vegetarian: false,
        category: "Dinner",
        cuisine: "Indian",
        rating: 4.9,
        nutrition: "Approx. 420 calories per serving"
    },

    {
        id: 7,
        name: "Chicken Fried Rice",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
        description: "Savory fried rice with chicken and vegetables.",
        ingredients: [
            { name: "rice", qty: "2 cups cooked rice" },
            { name: "chicken", qty: "200 g chicken" },
            { name: "onion", qty: "1 onion" },
            { name: "carrot", qty: "1 carrot" },
            { name: "garlic", qty: "2 cloves" }
        ],
        instructions: [
            "Cook rice and prepare small pieces of chicken.",
            "Cook the chicken thoroughly in a pan.",
            "Saute garlic, onion and carrots.",
            "Add the rice and cooked chicken.",
            "Mix well and serve hot."
        ],
        prep: 15,
        cook: 20,
        difficulty: "Medium",
        vegetarian: false,
        category: "Lunch",
        cuisine: "Asian",
        rating: 4.8,
        nutrition: "Approx. 430 calories per serving"
    },

    {
        id: 8,
        name: "Paneer Butter Masala",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
        description: "Creamy Indian paneer curry in tomato gravy.",
        ingredients: [
            { name: "paneer", qty: "200 g paneer" },
            { name: "tomato", qty: "3 tomatoes" },
            { name: "onion", qty: "1 onion" },
            { name: "butter", qty: "2 tbsp" },
            { name: "cream", qty: "100 ml cream" }
        ],
        instructions: [
            "Saute onion and tomatoes with spices.",
            "Blend into a smooth sauce.",
            "Heat butter and add the sauce.",
            "Add paneer and cream.",
            "Simmer gently and serve."
        ],
        prep: 10,
        cook: 25,
        difficulty: "Medium",
        vegetarian: true,
        category: "Dinner",
        cuisine: "Indian",
        rating: 4.9,
        nutrition: "Approx. 380 calories per serving"
    },

    {
        id: 9,
        name: "Vegetable Biryani",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
        description: "Aromatic rice cooked with vegetables and spices.",
        ingredients: [
            { name: "rice", qty: "2 cups rice" },
            { name: "onion", qty: "2 onions" },
            { name: "tomato", qty: "2 tomatoes" },
            { name: "carrot", qty: "1 carrot" },
            { name: "potato", qty: "1 potato" }
        ],
        instructions: [
            "Wash and soak the rice.",
            "Saute onions and vegetables with spices.",
            "Add tomatoes and mix.",
            "Add rice and the required water.",
            "Cook until the rice is tender."
        ],
        prep: 15,
        cook: 30,
        difficulty: "Medium",
        vegetarian: true,
        category: "Lunch",
        cuisine: "Indian",
        rating: 4.8,
        nutrition: "Approx. 360 calories per serving"
    },

    {
        id: 10,
        name: "Egg Curry",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
        description: "Boiled eggs simmered in spiced tomato gravy.",
        ingredients: [
            { name: "egg", qty: "4 eggs" },
            { name: "tomato", qty: "2 tomatoes" },
            { name: "onion", qty: "2 onions" },
            { name: "garlic", qty: "3 cloves" },
            { name: "oil", qty: "2 tbsp" }
        ],
        instructions: [
            "Boil the eggs until fully cooked.",
            "Saute onion and garlic in oil.",
            "Add tomatoes and spices.",
            "Add water and simmer the gravy.",
            "Add peeled eggs and cook for a few minutes."
        ],
        prep: 10,
        cook: 25,
        difficulty: "Easy",
        vegetarian: false,
        category: "Lunch",
        cuisine: "Indian",
        rating: 4.7,
        nutrition: "Approx. 300 calories per serving"
    },

    {
        id: 11,
        name: "Garlic Bread",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=700&q=80",
        description: "Crispy bread flavored with garlic and butter.",
        ingredients: [
            { name: "bread", qty: "4 slices" },
            { name: "garlic", qty: "3 cloves" },
            { name: "butter", qty: "3 tbsp" },
            { name: "cheese", qty: "50 g cheese" }
        ],
        instructions: [
            "Mix crushed garlic with softened butter.",
            "Spread the mixture on bread.",
            "Add cheese if desired.",
            "Toast until crisp and golden.",
            "Serve warm."
        ],
        prep: 5,
        cook: 10,
        difficulty: "Easy",
        vegetarian: true,
        category: "Snacks",
        cuisine: "Italian",
        rating: 4.6,
        nutrition: "Approx. 220 calories per serving"
    },

    {
        id: 12,
        name: "Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        description: "Soft pancakes perfect for a sweet breakfast.",
        ingredients: [
            { name: "flour", qty: "1 cup flour" },
            { name: "milk", qty: "1 cup milk" },
            { name: "egg", qty: "1 egg" },
            { name: "butter", qty: "2 tbsp" },
            { name: "sugar", qty: "2 tbsp sugar" }
        ],
        instructions: [
            "Mix flour, milk, egg and sugar.",
            "Stir until you get a smooth batter.",
            "Heat a lightly greased pan.",
            "Pour small portions of batter.",
            "Cook both sides until golden."
        ],
        prep: 10,
        cook: 15,
        difficulty: "Easy",
        vegetarian: true,
        category: "Breakfast",
        cuisine: "International",
        rating: 4.6,
        nutrition: "Approx. 290 calories per serving"
    },

    {
        id: 13,
        name: "Fruit Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        description: "A colorful combination of fresh fruits.",
        ingredients: [
            { name: "apple", qty: "1 apple" },
            { name: "banana", qty: "1 banana" },
            { name: "orange", qty: "1 orange" },
            { name: "grapes", qty: "1 cup grapes" }
        ],
        instructions: [
            "Wash all fruits thoroughly.",
            "Peel fruits where necessary.",
            "Cut fruits into bite-sized pieces.",
            "Combine everything in a bowl.",
            "Serve fresh."
        ],
        prep: 15,
        cook: 0,
        difficulty: "Easy",
        vegetarian: true,
        category: "Dessert",
        cuisine: "International",
        rating: 4.5,
        nutrition: "Approx. 150 calories per serving"
    },

    {
        id: 14,
        name: "Tomato Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
        description: "A warm, comforting tomato soup.",
        ingredients: [
            { name: "tomato", qty: "4 tomatoes" },
            { name: "onion", qty: "1 onion" },
            { name: "garlic", qty: "2 cloves" },
            { name: "butter", qty: "1 tbsp" },
            { name: "cream", qty: "2 tbsp" }
        ],
        instructions: [
            "Chop tomatoes and onion.",
            "Saute onion and garlic in butter.",
            "Add tomatoes and simmer until soft.",
            "Blend carefully until smooth.",
            "Add cream and heat gently before serving."
        ],
        prep: 10,
        cook: 20,
        difficulty: "Easy",
        vegetarian: true,
        category: "Snacks",
        cuisine: "International",
        rating: 4.4,
        nutrition: "Approx. 180 calories per serving"
    },

    {
        id: 15,
        name: "Mushroom Pasta",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Creamy pasta with mushrooms and garlic.",
        ingredients: [
            { name: "pasta", qty: "200 g pasta" },
            { name: "mushroom", qty: "150 g mushrooms" },
            { name: "garlic", qty: "3 cloves" },
            { name: "cream", qty: "100 ml cream" },
            { name: "cheese", qty: "40 g cheese" }
        ],
        instructions: [
            "Boil pasta until tender.",
            "Saute garlic and sliced mushrooms.",
            "Add cream and simmer gently.",
            "Mix in the cooked pasta.",
            "Add cheese and serve."
        ],
        prep: 10,
        cook: 20,
        difficulty: "Medium",
        vegetarian: true,
        category: "Dinner",
        cuisine: "Italian",
        rating: 4.7,
        nutrition: "Approx. 400 calories per serving"
    }
];


// ========================================
// LOCAL STORAGE
// ========================================

function loadStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        showToast("Unable to save data in this browser.");
    }
}

let favorites = loadStorage("rf_favorites", []);
let ingredients = loadStorage("rf_ingredients", []);
let shoppingItems = loadStorage("rf_shopping", []);

if (!Array.isArray(favorites)) favorites = [];
if (!Array.isArray(ingredients)) ingredients = [];
if (!Array.isArray(shoppingItems)) shoppingItems = [];

let activeCategory = "All";
let searchTerm = "";
let ingredientSearchActive = false;
let toastTimer;


// ========================================
// DOM REFERENCES
// ========================================

const recipeGrid = document.getElementById("recipeGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const resultCount = document.getElementById("resultCount");
const recipeHeading = document.getElementById("recipeHeading");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const ingredientInput = document.getElementById("ingredientInput");
const ingredientChips = document.getElementById("ingredientChips");

const shoppingInput = document.getElementById("shoppingInput");
const shoppingList = document.getElementById("shoppingList");
const shoppingCount = document.getElementById("shoppingCount");
const shoppingEmpty = document.getElementById("shoppingEmpty");

const recipeModal = document.getElementById("recipeModal");
const modalBody = document.getElementById("modalBody");


// ========================================
// UTILITIES
// ========================================

function normalize(value) {
    return String(value)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function getRecipe(id) {
    return recipes.find(recipe => recipe.id === Number(id));
}

function isFavorite(id) {
    return favorites.includes(Number(id));
}


// ========================================
// RECIPE FILTERING
// ========================================

function getFilteredRecipes() {
    let filtered = [...recipes];

    if (searchTerm) {
        filtered = filtered.filter(recipe => {
            const searchable = [
                recipe.name,
                recipe.description,
                recipe.category,
                recipe.cuisine,
                ...recipe.ingredients.map(item => item.name)
            ].join(" ");

            return normalize(searchable).includes(normalize(searchTerm));
        });
    }

    if (activeCategory === "Vegetarian") {
        filtered = filtered.filter(recipe => recipe.vegetarian);
    } else if (activeCategory === "Non-Vegetarian") {
        filtered = filtered.filter(recipe => !recipe.vegetarian);
    } else if (activeCategory !== "All") {
        filtered = filtered.filter(recipe =>
            recipe.category === activeCategory
        );
    }

    const dietFilter = document.getElementById("dietFilter").value;

    if (dietFilter === "Vegetarian") {
        filtered = filtered.filter(recipe => recipe.vegetarian);
    } else if (dietFilter === "Non-Vegetarian") {
        filtered = filtered.filter(recipe => !recipe.vegetarian);
    }

    if (ingredientSearchActive && ingredients.length > 0) {
        const strict = document.getElementById("strictMatch").checked;

        filtered = filtered.filter(recipe => {
            const recipeIngredients = recipe.ingredients.map(item =>
                normalize(item.name)
            );

            const matches = ingredients.filter(ingredient =>
                recipeIngredients.includes(normalize(ingredient))
            ).length;

            return strict
                ? matches === recipeIngredients.length
                : matches > 0;
        });

        filtered.sort((a, b) =>
            getMatchPercentage(b) - getMatchPercentage(a)
        );
    }

    const sort = document.getElementById("sortFilter").value;

    if (sort === "time") {
        filtered.sort((a, b) =>
            (a.prep + a.cook) - (b.prep + b.cook)
        );
    } else if (sort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
}


// ========================================
// INGREDIENT MATCHING
// ========================================

function getMatchPercentage(recipe) {
    if (!ingredients.length) return 0;

    const available = recipe.ingredients.filter(item =>
        ingredients.some(ingredient =>
            normalize(ingredient) === normalize(item.name)
        )
    ).length;

    return Math.round(
        (available / recipe.ingredients.length) * 100
    );
}

function getMissingIngredients(recipe) {
    return recipe.ingredients.filter(item =>
        !ingredients.some(ingredient =>
            normalize(ingredient) === normalize(item.name)
        )
    );
}


// ========================================
// RENDER RECIPE CARDS
// ========================================

function createRecipeCard(recipe, showMatch = false) {
    const saved = isFavorite(recipe.id);
    const match = getMatchPercentage(recipe);
    const missing = getMissingIngredients(recipe);

    let matchHTML = "";

    if (showMatch && ingredients.length) {
        matchHTML = `
            <p class="match-info">
                ✅ ${match}% ingredient match
            </p>

            <p class="missing-info">
                ${missing.length
                    ? "Missing: " + missing.map(item =>
                        escapeHTML(item.name)).join(", ")
                    : "You have all listed ingredients!"}
            </p>
        `;
    }

    return `
        <article class="recipe-card">

            <div class="recipe-image">
                <img
                    src="${escapeHTML(recipe.image)}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x400/f5e7dc/70452d?text=Recipe'">

                <span class="diet-badge ${recipe.vegetarian ? "" : "non-veg"}">
                    ${recipe.vegetarian ? "🥬 Vegetarian" : "🍗 Non-Veg"}
                </span>

                <button
                    class="heart-btn ${saved ? "saved" : ""}"
                    data-action="favorite"
                    data-id="${recipe.id}"
                    aria-label="${saved ? "Remove from" : "Add to"} favorites">
                    ${saved ? "❤️" : "🤍"}
                </button>
            </div>

            <div class="recipe-info">
                <h3>${escapeHTML(recipe.name)}</h3>

                <p class="recipe-description">
                    ${escapeHTML(recipe.description)}
                </p>

                <div class="recipe-meta">
                    <span>⏱️ ${recipe.prep + recipe.cook} min</span>
                    <span>⭐ ${recipe.rating}</span>
                    <span>${escapeHTML(recipe.difficulty)}</span>
                </div>

                ${matchHTML}

                <button
                    class="view-btn"
                    data-action="view"
                    data-id="${recipe.id}">
                    View Recipe →
                </button>
            </div>

        </article>
    `;
}

function renderRecipes() {
    const filtered = getFilteredRecipes();

    recipeGrid.innerHTML = filtered.map(recipe =>
        createRecipeCard(recipe, ingredientSearchActive)
    ).join("");

    resultCount.textContent =
        `${filtered.length} recipe${filtered.length === 1 ? "" : "s"} found`;

    emptyState.classList.toggle("hidden", filtered.length !== 0);
    recipeGrid.classList.toggle("hidden", filtered.length === 0);

    recipeHeading.textContent = ingredientSearchActive
        ? "Recipes Matching Your Ingredients"
        : searchTerm
            ? "Search Results"
            : activeCategory === "All"
                ? "Popular Recipes"
                : activeCategory + " Recipes";
}


// ========================================
// FAVORITES
// ========================================

function renderFavorites() {
    const savedRecipes = recipes.filter(recipe =>
        isFavorite(recipe.id)
    );

    document.getElementById("favCount").textContent = favorites.length;

    if (!savedRecipes.length) {
        favoriteGrid.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1">
                <span>🤍</span>
                <h3>No favorites yet</h3>
                <p>Tap the heart on a recipe to save it here.</p>
            </div>
        `;
        return;
    }

    favoriteGrid.innerHTML = savedRecipes.map(recipe =>
        createRecipeCard(recipe)
    ).join("");
}

function toggleFavorite(id) {
    id = Number(id);

    if (isFavorite(id)) {
        favorites = favorites.filter(item => item !== id);
        showToast("Removed from favorites");
    } else {
        favorites.push(id);
        showToast("Added to favorites ❤️");
    }

    saveStorage("rf_favorites", favorites);

    renderRecipes();
    renderFavorites();
}


// ========================================
// INGREDIENT CHIPS
// ========================================

function addIngredient(value) {
    const ingredient = normalize(value);

    if (!ingredient) {
        showToast("Please enter an ingredient.");
        return;
    }

    if (ingredients.includes(ingredient)) {
        showToast("Ingredient already added.");
        return;
    }

    ingredients.push(ingredient);

    saveStorage("rf_ingredients", ingredients);

    ingredientSearchActive = false;

    renderIngredients();
    renderRecipes();

    showToast("Ingredient added!");
}

function removeIngredient(value) {
    ingredients = ingredients.filter(item => item !== value);

    saveStorage("rf_ingredients", ingredients);

    renderIngredients();

    if (!ingredients.length) {
        ingredientSearchActive = false;
    }

    renderRecipes();
}

function renderIngredients() {
    if (!ingredients.length) {
        ingredientChips.innerHTML = `
            <p class="muted">No ingredients added yet.</p>
        `;
        return;
    }

    ingredientChips.innerHTML = ingredients.map(ingredient => `
        <span class="chip">
            ${escapeHTML(ingredient)}

            <button
                type="button"
                data-action="remove-ingredient"
                data-value="${escapeHTML(ingredient)}"
                aria-label="Remove ${escapeHTML(ingredient)}">
                ×
            </button>
        </span>
    `).join("");
}


// ========================================
// RECIPE DETAILS MODAL
// ========================================

function openRecipe(id) {
    const recipe = getRecipe(id);

    if (!recipe) return;

    const totalTime = recipe.prep + recipe.cook;

    modalBody.innerHTML = `
        <img
            class="modal-image"
            src="${escapeHTML(recipe.image)}"
            alt="${escapeHTML(recipe.name)}"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/f5e7dc/70452d?text=Recipe'">

        <span class="eyebrow">
            ${recipe.vegetarian ? "VEGETARIAN" : "NON-VEGETARIAN"}
            · ${escapeHTML(recipe.cuisine)}
        </span>

        <h2 id="modalTitle">${escapeHTML(recipe.name)}</h2>

        <p>${escapeHTML(recipe.description)}</p>

        <div class="recipe-meta">
            <span>⏱️ ${totalTime} min</span>
            <span>⭐ ${recipe.rating}</span>
            <span>${escapeHTML(recipe.difficulty)}</span>
        </div>

        <p>Preparation: ${recipe.prep} minutes</p>
        <p>Cooking: ${recipe.cook} minutes</p>
        <p>Nutrition: ${escapeHTML(recipe.nutrition)}</p>

        <h3>🥕 Ingredients</h3>

        <ul>
            ${recipe.ingredients.map(item => `
                <li>
                    ${escapeHTML(item.qty)}
                    — ${escapeHTML(item.name)}
                </li>
            `).join("")}
        </ul>

        <h3>👨‍🍳 Cooking Instructions</h3>

        <ol>
            ${recipe.instructions.map(step => `
                <li>${escapeHTML(step)}</li>
            `).join("")}
        </ol>

        <div class="modal-actions">
            <button
                class="primary-btn"
                data-action="add-recipe-shopping"
                data-id="${recipe.id}">
                🛒 Add Ingredients to Shopping List
            </button>

            <button
                class="view-btn"
                style="width:auto;padding:13px 20px"
                data-action="favorite"
                data-id="${recipe.id}">
                ${isFavorite(recipe.id)
                    ? "❤️ Remove Favorite"
                    : "🤍 Add Favorite"}
            </button>
        </div>
    `;

    recipeModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    document.getElementById("closeModal").focus();
}

function closeRecipeModal() {
    recipeModal.classList.add("hidden");
    document.body.style.overflow = "";
}


// ========================================
// SHOPPING LIST
// ========================================

function addShoppingItem(value) {
    const name = String(value).trim();

    if (!name) {
        showToast("Enter an ingredient first.");
        return;
    }

    const duplicate = shoppingItems.some(item =>
        normalize(item.name) === normalize(name)
    );

    if (duplicate) {
        showToast("Item already exists in your list.");
        return;
    }

    shoppingItems.push({
        id: Date.now() + Math.random(),
        name: name,
        done: false
    });

    saveStorage("rf_shopping", shoppingItems);

    renderShoppingList();

    showToast("Added to shopping list 🛒");
}

function renderShoppingList() {
    const remaining = shoppingItems.filter(item => !item.done).length;

    shoppingCount.textContent =
        `${remaining} item${remaining === 1 ? "" : "s"} remaining`;

    shoppingEmpty.classList.toggle(
        "hidden",
        shoppingItems.length > 0
    );

    shoppingList.innerHTML = shoppingItems.map(item => `
        <li class="${item.done ? "done" : ""}">

            <input
                type="checkbox"
                data-action="toggle-shopping"
                data-id="${item.id}"
                ${item.done ? "checked" : ""}
                aria-label="Mark ${escapeHTML(item.name)} as purchased">

            <span>${escapeHTML(item.name)}</span>

            <button
                class="remove-item"
                data-action="remove-shopping"
                data-id="${item.id}"
                aria-label="Remove ${escapeHTML(item.name)}">
                ×
            </button>

        </li>
    `).join("");
}

function addRecipeToShopping(id) {
    const recipe = getRecipe(id);

    if (!recipe) return;

    let added = 0;

    recipe.ingredients.forEach(item => {
        const exists = shoppingItems.some(existing =>
            normalize(existing.name) === normalize(item.name)
        );

        if (!exists) {
            shoppingItems.push({
                id: Date.now() + Math.random(),
                name: item.name,
                done: false
            });

            added++;
        }
    });

    saveStorage("rf_shopping", shoppingItems);

    renderShoppingList();

    showToast(
        added
            ? `${added} ingredient(s) added to shopping list`
            : "All ingredients are already on your list."
    );
}


// ========================================
// RANDOM RECIPE
// ========================================

function randomRecipe() {
    const available = getFilteredRecipes();

    if (!available.length) {
        showToast("No recipes available for your current filters.");
        return;
    }

    const currentId = Number(
        modalBody.dataset.currentRecipe || 0
    );

    let choices = available.filter(recipe =>
        recipe.id !== currentId
    );

    if (!choices.length) choices = available;

    const recipe = choices[
        Math.floor(Math.random() * choices.length)
    ];

    modalBody.dataset.currentRecipe = recipe.id;

    openRecipe(recipe.id);
}


// ========================================
// SEARCH EVENTS
// ========================================

document.getElementById("searchForm").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        searchTerm = searchInput.value.trim();
        ingredientSearchActive = false;

        renderRecipes();

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth"
        });
    }
);

searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    ingredientSearchActive = false;
    renderRecipes();
});


// ========================================
// INGREDIENT EVENTS
// ========================================

document.getElementById("ingredientForm").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        addIngredient(ingredientInput.value);
        ingredientInput.value = "";
    }
);

document.querySelectorAll(".quick-btn").forEach(button => {
    button.addEventListener("click", () => {
        addIngredient(button.dataset.ingredient);
    });
});

document.getElementById("findRecipesBtn").addEventListener(
    "click",
    () => {
        if (!ingredients.length) {
            showToast("Add at least one ingredient first.");
            return;
        }

        searchTerm = "";
        searchInput.value = "";
        activeCategory = "All";

        document.querySelectorAll(".category-card").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === "All"
            );
        });

        document.getElementById("dietFilter").value = "All";

        ingredientSearchActive = true;

        renderRecipes();

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth"
        });
    }
);

document.getElementById("strictMatch").addEventListener(
    "change",
    () => {
        if (ingredientSearchActive) {
            renderRecipes();
        }
    }
);

ingredientChips.addEventListener("click", event => {
    const button = event.target.closest(
        '[data-action="remove-ingredient"]'
    );

    if (button) {
        removeIngredient(button.dataset.value);
    }
});


// ========================================
// CATEGORY AND FILTER EVENTS
// ========================================

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;

        ingredientSearchActive = false;

        document.querySelectorAll(".category-card").forEach(card => {
            card.classList.toggle("active", card === button);
        });

        renderRecipes();

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.getElementById("dietFilter").addEventListener(
    "change",
    () => {
        ingredientSearchActive = false;
        renderRecipes();
    }
);

document.getElementById("sortFilter").addEventListener(
    "change",
    renderRecipes
);

document.getElementById("clearFilters").addEventListener(
    "click",
    () => {
        searchTerm = "";
        searchInput.value = "";

        activeCategory = "All";
        ingredientSearchActive = false;

        document.getElementById("dietFilter").value = "All";
        document.getElementById("sortFilter").value = "default";

        document.querySelectorAll(".category-card").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === "All"
            );
        });

        renderRecipes();
    }
);


// ========================================
// RECIPE GRID EVENTS
// ========================================

function handleRecipeGridClick(event) {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;
    const id = button.dataset.id;

    if (action === "favorite") {
        toggleFavorite(id);
    }

    if (action === "view") {
        openRecipe(id);
    }
}

recipeGrid.addEventListener("click", handleRecipeGridClick);

favoriteGrid.addEventListener("click", handleRecipeGridClick);

modalBody.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    if (button.dataset.action === "favorite") {
        toggleFavorite(button.dataset.id);
        openRecipe(button.dataset.id);
    }

    if (button.dataset.action === "add-recipe-shopping") {
        addRecipeToShopping(button.dataset.id);
    }
});


// ========================================
// SHOPPING EVENTS
// ========================================

document.getElementById("shoppingForm").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        addShoppingItem(shoppingInput.value);
        shoppingInput.value = "";
    }
);

shoppingList.addEventListener("change", event => {
    if (event.target.dataset.action !== "toggle-shopping") return;

    const id = Number(event.target.dataset.id);

    shoppingItems = shoppingItems.map(item =>
        item.id === id
            ? { ...item, done: event.target.checked }
            : item
    );

    saveStorage("rf_shopping", shoppingItems);
    renderShoppingList();
});

shoppingList.addEventListener("click", event => {
    const button = event.target.closest(
        '[data-action="remove-shopping"]'
    );

    if (!button) return;

    const id = Number(button.dataset.id);

    shoppingItems = shoppingItems.filter(item => item.id !== id);

    saveStorage("rf_shopping", shoppingItems);
    renderShoppingList();

    showToast("Item removed.");
});

document.getElementById("clearPurchased").addEventListener(
    "click",
    () => {
        shoppingItems = shoppingItems.filter(item => !item.done);

        saveStorage("rf_shopping", shoppingItems);
        renderShoppingList();

        showToast("Purchased items cleared.");
    }
);


// ========================================
// MODAL EVENTS
// ========================================

document.getElementById("closeModal").addEventListener(
    "click",
    closeRecipeModal
);

recipeModal.addEventListener("click", event => {
    if (event.target === recipeModal) {
        closeRecipeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeRecipeModal();
    }
});


// ========================================
// RANDOM RECIPE BUTTON
// ========================================

const surpriseButton = document.createElement("button");

surpriseButton.className = "primary-btn";
surpriseButton.textContent = "🎲 Surprise Me!";
surpriseButton.style.marginTop = "20px";

document.querySelector(".recipes-header > div").appendChild(
    surpriseButton
);

surpriseButton.addEventListener("click", randomRecipe);


// ========================================
// DARK MODE
// ========================================

const themeToggle = document.getElementById("themeToggle");

function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

const savedTheme = loadStorage("rf_dark_mode", false);

applyTheme(savedTheme === true);

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");

    applyTheme(isDark);
    saveStorage("rf_dark_mode", isDark);
});


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// ========================================
// BACK TO TOP
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display =
        window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ========================================
// INITIALIZE WEBSITE
// ========================================

renderIngredients();
renderRecipes();
renderFavorites();
renderShoppingList();

