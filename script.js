//Je récupére les élements de l'UI
const searchInput = document.getElementById("searchInput");
const inputRange = document.getElementById("inputRange");
const outputRange = document.getElementById("outputRange");
const atoz = document.getElementById("atoz");
const cardContainer = document.getElementById("cardContainer")
const card = document.getElementById("card");

//Variables globales
let mealsList = [];
let sortMethod = "";

const fetchMeals = async () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json)
    .then((data) => console.log(data));
    displayMeals();
}

fetchMeals();

//Fonction pour afficher les repas
const displayMeals = () => {

}
