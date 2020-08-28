// Задание 2
// В HTML есть пустой список ul#ingredients
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li, после
// чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement()
// {/* <ul id="ingredients"></ul> */}


const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ingredientsList = document.querySelector("#ingredients");
const createIngredientsList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  createIngredientsList.prepend(createItem);
});

ingredientsList.append(createIngredientsList);

