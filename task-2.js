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

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");

function createList() {
  return ingredients.map((ingredient) => {
    const elemLi = document.createElement("li");
    elemLi.textContent = ingredient;
    return elemLi;
  });
}

list.append(...createList());
