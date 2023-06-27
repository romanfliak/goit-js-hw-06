const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const ulAi = document.querySelector('#ingredients');
const liElement = ingredients.map((ingredient) => {
  const itemEi = document.createElement('li');
  itemEi.classList.add('item');
  itemEi.textContent = ingredient;
  return itemEi 
})

console.log(liElement);

ulAi.append (...liElement);

