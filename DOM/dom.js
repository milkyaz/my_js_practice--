// // Создать div
// const div = document.createElement("div");
// // Добавить к нему класс wrapper
// div.classList.add("wrapper");
// // Поместить его внутрь тега body
// const body = document.querySelector("body");
// body.appendChild(div);
// //Создать заголовок H1 'DOM (Document Object Model)'
// const header = document.createElement("h1");
// header.textContent = "DOM (Document Object Model)";
// //Добавить H1 перед DIV с классом wrapper
// div.insertAdjacentElement("beforebegin", header);
// // Создать список <ul></ul>
// // Добавить в него 3 элемента с текстом "один, два, три"

// const ul = `
//     <ul>
//         <li>один</li>
//            <li>два</li>
//               <li>три</li>
//     </ul>
// `;
// //Поместить список внутр элемента с классом wrapper
// div.innerHTML = ul;

// //=====================================================================
// //Создать изображение
// const img = document.createElement("img");
// //Добавить следующие свойства к изображению
// // 1. Добавить атрибут source
// img.src =
//   "https://i.pinimg.com/originals/26/81/2a/26812abb98952f920eda042acc71fa80.jpg";
// // 2. Добавить атрибут width со значением 240
// img.width = 240;
// // 3. Добавить класс super
// img.classList.add("super");
// // 4. Добавить свойство alt со значение "Super Man"
// img.alt = "Super Man";
// // Поместить изображение внутрь элемента с классом wrapper
// div.appendChild(img);
// // Используя HTML строку, создать DIV с классом 'pDiv' + с 2-мя параграфами
// const elemHTML = `
// <div class = 'pDiv'>
//     <p>Параграф 1</p>
//     <p>Параграф 2</p>
// </div>
// `;
// // Поместить этот DIV до элемента <ul></ul>
// const ulList = div.querySelector("ul");
// ulList.insertAdjacentHTML("beforebegin", elemHTML);
// // Добавить для 2-го параграфа класс text
// const pDiv = document.querySelector(".pDiv");
// pDiv.children[1].classList.add("text");
// console.log(pDiv);
// // Удалить 1-й параграф
// pDiv.firstElementChild.remove();
// // Создать функцию generateAutoCard
// const generateAutoCard = (brand, color, year) => {
//   const curDate = new Date();
//   const curYear = curDate.getFullYear();
//   return `
//     <div class = "autoCard">
// <h2>BRAND YEAR${brand.toUpperCase()} ${year}</h2>
// <p>Автомобиль ${brand.toUpperCase()} ${year} года. Возраст авто - ${
//     curYear - year
//   } лет</p>
// <p>Цвет: ${color}</p>
// <button type="button" class="btn">Удалить</button>
// </div>
//     `;
// };
// // которая принимает 3 аргумента: brand, color, year

// // Функция должна возвращать разметку HTML:
// //<div>
// //<h2>BRAND YEAR</h2>
// //<p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет</p>
// //</div>;

// //Создать новый DIV с классом autos
// const carsDiv = document.createElement("div");
// carsDiv.classList.add("auto");

// // Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//   { brand: "Tesla", year: 2015, color: "Красный" },
//   { brand: "Lexus", year: 2016, color: "Серебро" },
//   { brand: "Nissan", year: 2012, color: "Черный" },
// ];

// const carsHTML = carsList
//   .map((car) => {
//     return generateAutoCard(car.brand, car.color, car.year);
//   })
//   .join("");

// // Поместить эти 3 карточки внутрь DIV с классом autos
// carsDiv.innerHTML = carsHTML;

// // Поместить DIV с классом autos на страницу DOM - до DIV с классом wrapper
// div.insertAdjacentElement("beforebegin", carsDiv);
// // Добавить кнопку Удалить на каждую карточку авто

// // При клике на кнопку - удалять карточку из структуры DOM
// // 1. Выбрать все кнопки
// const buttons = document.querySelectorAll(".btn");

// // 2. Создать функцию удаления
// function handlClick(e) {
//   const currentButton = e.currentTarget;
//   currentButton.closest(".autoCard").remove();
//   //console.log(currentButton.parentElement);
// }
// // 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
// buttons.forEach((button) => {
//   button.addEventListener("click", handlClick);
// });

//Получаем элемент
const textP = document.querySelector(".text");
//Создаем атрибут и присваиваем параметр changeColor(), это будет будущая функция, с помощью которой будет меняться цвет фон текста
// textP.setAttribute("onclick", "changeColor()");

// console.log((textP.style = "outline: none"));
// console.log(textP);
// //Создали функцию
// const changeColor = () => {
//   textP.style = `background-color: ${getColor()}`;
// };
// //Функция которая возвращает цвет в функцию changeColor()
function getColor() {
  const colors = [
    "#49A16C",
    "#064236",
    "#ED6742",
    "#F498AD",
    "#1A5AD7",
    "#AFC9DA",
    "#FFD829",
    "#282A2E",
    "#5E6064",
    "#E6E6E6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

textP.addEventListener("click", () => {
  textP.style = `background-color: ${getColor()}`;
});
