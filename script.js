//Je récupére les élements de l'UI
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const inputRange = document.getElementById("inputRange");
const outputRange = document.getElementById("outputRange");
const atoz = document.getElementById("atoz");
const cardContainer = document.querySelector(".cardContainer");
const card = document.getElementById("card");

//Variables globales
let meals = [];
let sortMethod = "";
let switching = true;

//Récuprer les données de l'API
async function getMeals() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
    const data = await response.json();
    meals = data.meals;
    displayMeals();
}

//Fonction pour afficher les repas
const displayMeals = () => {
    //J'efface les données existantes sur les cards
    cardContainer.innerHTML = "";
    //Tri des données
    meals
    //Pour trier les données
    .sort((m1, m2) => {
        //Tri de A à Z
        return m1.strMeal.localeCompare(m2.strMeal);
        // if (sortMethod === "atoz") {
        //     return m1.strMeal.localeCompare(m2.strMeal);
        // }
        // else if (sortMethod === "ztoa") {
        //     return m2.strMeal.localeCompare(m1.strMeal);
        // }
    })
    //Pour découper le tableau meals en fonction du nombre de repas
    .slice(0, inputRange.value)
    //Pour afficher les données sur l'UI
    .map((meal) => {
        cardContainer.innerHTML += `
            <div class="card">
                <h1 id="title">${meal.strMeal}</h1>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" id="image">
                <h2 id="origin">Origin : ${meal.strArea}</h2>
                <p id="instructions">${meal.strInstructions}</p>
            </div>
        `
    });
}

//Pour faire les recherches
const search = () => btnSearch.addEventListener("change", () => {
    var title = meals.strMeal;
    title.toLowerCase().toLocalCompare(searchInput.value.toLowerCase());
});

//Pour afficher la valeur de l'input range à l'écran
outputRange.textContent = inputRange.value;
inputRange.addEventListener("input", (e) => {
    outputRange.textContent = e.target.value;
    displayMeals();
});


//Quand on clique sur le bouton "A-Z"
const alphabeticalSort = () => atoz.addEventListener("click", () => {
    sortMethod = atoz.id;
    atoz.textContent = "Z to A";
    sortMethod === "ztoa";
    // //La sortMethod change
    let switching = true;
    // if(switching = true) {
    //     sortMethod === "ztoa";
    //     atoz.textContent = "Z to A";
    // }
    // else {
    //     sortMethod === "atoz";
    //     atoz.textContent = "A to Z";
    // }
    });

console.log(sortMethod);

getMeals();
