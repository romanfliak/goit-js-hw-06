const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const ulAi = document.querySelector('#ingredients');
ingredients.map((ingredient) => {
  const itemEi = document.createElement('li');
  itemEi.classList.add('item');
  itemEi.textContent = ingredient;
  return ulAi.append(itemEi) ;
}).join('');


console.log(ulAi);