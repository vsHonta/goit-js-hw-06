const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refIngredients = document.querySelector('#ingredients');

const allTags = ingredients.map(item => {
  const tag = document.createElement('li');
  tag.classList.add('item');
  tag.textContent = `${item}`;  
  return tag
})

refIngredients.append(...allTags)