const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const elementFromList = document.createElement('li');
  elementFromList.textContent = ingredient;
  elementFromList.classList.add('item');
  ingredientsList.appendChild(elementFromList);
});




