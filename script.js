//Je récupére les élements de l'UI
const searchInput = document.getElementById("searchInput");
const inputRange = document.getElementById("inputRange");
const outputRange = document.getElementById("outputRange");
const atoz = document.getElementById("atoz");
const cardContainer = document.getElementById("cardContainer");
const card = document.getElementById("card");

//Variables globales
let mealsList = [];
let sortMethod = "";

//Récuprer les données de l'API
async function getMeals() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
    const data = await response.json();
    mealsList = data;
    console.log(mealsList);
}

getMeals();


//Fonction pour afficher les repas
const displayMeals = () => {
    //J'efface les données existantes sur les cards
    // cardContainer.innerHTML = "";
    //Tri des données
    mealsList
    //Pour rechercher un repas avec la barre de recherche
    .filter((mealsList) => {return mealsList.toLowerCase().indexOf(searchInput.toLowerCase())})
    // .sort((m1, m2) => {
    //     //Tri de A à Z
    //     if (m1.slice(0,1) = "A") {

    //     }
    //     //Tri de Z à A
    //     else if(m2.slice(0,1) = "Z") {

    //     }

    // })
    .slice(0, inputRange)
    .map((m) => {
        cardContainer.innerHTML += `
            <div class="card">
                <h1 id="title">${m.strMeal}</h1>
                <img src="${m.strMealThumb}" alt="${m.strMeal}" id="image">
                <h2 id="origin">Origin : ${m.strArea}</h2>
                <p id="instructions">${m.strInstructions}</p>
            </div>
        `
    });
}

//Pour afficher la valeur de l'input range à l'écran
outputRange.textContent = inputRange.value;
inputRange.addEventListener("input", (e) => {
    outputRange.textContent = e.target.value;
});

atoz.addEventListener("click", () => {


});



displayMeals();
