const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createItem = ingredients =>
  ingredients.map(item => {
    const listItemRef = document.createElement('li');

    listItemRef.classList.add('item');
    listItemRef.textContent = item;

    return listItemRef;
  });

const markup = createItem(ingredients);

ingredientsRef.append(...markup);
