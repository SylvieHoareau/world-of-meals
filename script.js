//Je récupére les élements de l'UI
const searchInput = document.getElementById("searchInput");
const inputRange = document.getElementById("inputRange");
const outputRange = document.getElementById("outputRange");
const atoz = document.getElementById("atoz");
const cardContainer = document.querySelector(".cardContainer");
const card = document.getElementById("card");

//Variables globales
let meals = [];
let sortMethod = "";

//Récuprer les données de l'API
async function getMeals() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
    const data = await response.json();
    meals = data.meals;
    displayMeals();
}




//Fonction pour afficher les repas
const displayMeals = () => {
    //J'efface les données existantes sur les cards
    // cardContainer.innerHTML = "";
    //Tri des données
    meals
    //Pour trier les données
    .sort((m1, m2) => {
        //Tri de A à Z
        m1.localeCompare(m2);
    
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

//Pour afficher la valeur de l'input range à l'écran
outputRange.textContent = inputRange.value;
inputRange.addEventListener("input", (e) => {
    outputRange.textContent = e.target.value;
});

//Quand on clique sur le bouton "A-Z"
const atozSort = () => atoz.addEventListener("click", () => {
    atoz.textContent = "Z to A";
});

getMeals();
