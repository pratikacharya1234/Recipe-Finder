const apiKey = 'cc77e58a53ab4c4c1a0deb4271d5dded';
const apiUrl = 'https://api.edamam.com/search'; 
const loader = document.getElementById('loader');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function searchRecipes() {
  const searchInput = document.getElementById('searchInput').value;

  showLoader();

  fetch(`${apiUrl}?q=${searchInput}&app_id=86a48720&app_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayRecipes(data.hits);
      hideLoader(); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      hideLoader(); 
      alert("enter correctly")
    });
}

function displayRecipes(recipes) {
  const recipeResults = document.getElementById('recipeResults');
  recipeResults.innerHTML = '';

  recipes.forEach(recipe => {
    const { label, image, url } = recipe.recipe;
    
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipeCard');

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = label;

    const recipeImage = document.createElement('img');
    recipeImage.src = image;
    recipeImage.alt = label;

    const recipeLink = document.createElement('a');
    recipeLink.href = url;
    recipeLink.textContent = 'View Recipe';

    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeLink);

    recipeResults.appendChild(recipeCard);
  });
}

hideLoader();




