//Je récupére les élements de l'UI
const searchInput = document.getElementById("searchInput");
const inputRange = document.getElementById("inputRange");
const outputRange = document.getElementById("outputRange");
const atoz = document.getElementById("atoz");
const cardContainer = document.querySelector(".cardContainer");
const card = document.getElementById("card");

//Variables globales
let meals = [];
let sortMethod = true;

//Récuprer les données de l'API
const getMeals = () => {
    //Pour rechercher les informations dans la barre de recherche
    let search = "chicken";
    if (searchInput.value) search = searchInput.value;
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
        .then((response) => response.json())
        .then((data) => {
            meals = data.meals;
            if (meals) displayMeals();
        });
};

//Fonction pour afficher les repas
const displayMeals = () => {
    //J'efface les données existantes sur les cards
    cardContainer.innerHTML = "";
    //Tri des données
    meals
    //Pour trier les données
    .sort((m1, m2) => {
        //Tri de A à Z
        if(sortMethod) {
            return m1.strMeal.toLowerCase().localeCompare(m2.strMeal.toLowerCase());
        }
        return m2.strMeal.toLowerCase().localeCompare(m1.strMeal.toLowerCase());

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
    displayMeals();
});

searchInput.addEventListener("change", getMeals);


//Quand on clique sur le bouton "A-Z"
atoz.addEventListener("click", () => {
    atoz.innerHTML = sortMethod? "A-Z":"Z-A";
    sortMethod = !sortMethod;
    displayMeals();
});

getMeals();
