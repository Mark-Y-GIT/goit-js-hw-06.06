const categoriesRef = document.getElementById('categories');
const categoriesItemsRef = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRef.children.length}`);
console.log('');

categoriesItemsRef.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}`);
  console.log(`Elements: ${lastElementChild.children.length}`);
});
