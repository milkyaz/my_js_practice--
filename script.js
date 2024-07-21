// let text = document.getElementById("text");
// let btnRed = document.getElementById("btnRed");
// let btnGreen = document.getElementById("btnGreen");
/*мы с помощью JavaScript нашли требуемые нам элементы и теперь можем с ними работать. А что произойдет, если ты не разместил элемент на странице или ошибся с указанием id? В значение переменной JavaScript запишет значение null.  Поэтому будь внимательным. */

// function redBtn(color) {
//   let btnRed = color;
//   btnRed.onclick = () => {
//     text.style.color = "red";
//   };
// }
// redBtn(document.getElementById("btnRed"));

// function redGreen(color) {
//     let btnGreen = color;
//     btnGreen.onclick = () => {
//       text.style.color = "green";
//     };
//   }
//   redGreen(document.getElementById("btnGreen"));

// let valueMiles = 130
// let valueKm = 1.61
// const convert = valueMiles * valueKm
// console.log(convert)

// Условные операторы

// let number = 15;

// if (number == 5) {
//   console.log("ok");
// } else if (number < 10) {
//   console.log("Ok!");
// } else {
//   console.log("else");
// }

// let number = 15;
// let isHasHouse = true;

// if (number == 15 && isHasHouse) {
//   console.log("ok");
// } else if (number < 10) {
//   console.log("ok!");
// } else if (number == 7) {
//   console.log("7!");
// } else if (number > 15) {
//   console.log("> 15!");
// } else {
//     console.log("else!")
// }

// let stroka = "word2";

// switch (stroka) {
//   case "4":
//     console.log("Переменная со значение 4");
//     break;
//   case "word":
//     console.log("Переменная со значение word");
//     break;
//   default: // как else в if
//     console.log("default");
//     break;
// }

/* 1 Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. */
//Answer
// let num = 11
// if (num == 10) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

/* 2 В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). */

// let min = 0;
// if (min >= 0 && min <= 14) {
//   alert("First half hour");
// }
// if (min >= 14 && min <= 28) {
//   alert("Thurd half jour");
// }

/* 3 Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch. */

/*Напишите программу, которая запрашивает у пользователя его имя и выводит сообщение "Привет, [имя]!", если имя не пустое. Если имя пустое, программа должна выводить сообщение "Вы не ввели имя". */

// function greetUser() {
//   let name = prompt("Введите ваше имя");
//   if (name) {
//     alert(`Hello, ${name}!`);
//   } else {
//     alert("Вы не ввели имя!");
//   }
// }
// greetUser();

//Повторение темы

// let signLog = prompt("кто там?");
// const logIn = "admin";
// const emptyString = "";
// const truePassword = 1234;
// if (signLog == emptyString) {
//   alert("отменно");
// } else if (signLog !== logIn) {
//   alert("я вас не знаю");
// } else if (signLog === logIn) {
//   const attemptEntr = prompt("Введите пароль");
//   if (truePassword == attemptEntr) {
//     alert("Здравствуйте!");
//   } else if (truePassword != attemptEntr) {
//     alert("неверный пароль!");
//   } else if (attemptEntr == emptyString) {
//     alert("отменено");
//   }
// }

// let userName = prompt("Кто там?", "");
// if (userName === "Админ") {
//   let pass = prompt("Пароль?", "");
//   if (pass === "Я главный") {
//     alert("Здравствуйте!");
//   } else if (pass === "" || pass === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный парль");
//   }
// } else if (userName === "" || userName === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// const questOne = prompt('Какое "официальное" название JavaScript?');
// const ansQuest = "ECMAScript";
// if (questOne === ansQuest) {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript");
// }
// const a = prompt();
// if (a > 0) {
//   alert(1);
// } else if (a < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result = a + b < 4 ? "Мало" : "Много";

// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

// let nameBrs1 = "Edge";
// let nameBrs2 = "Chrome";
// let nameBrs3 = "Firefox";
// let nameBrs4 = "Safari";
// let nameBrs5 = "Opera";
// const whatBrs = prompt("Какой у вас браузер?");

// if (whatBrs === nameBrs1) {
//   alert("You've got the Edge!");
// } else if ((whatBrs === nameBrs2, nameBrs3, nameBrs4) && whatBrs != "") {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// switch (+prompt("Введите число между 0 и 3", "")) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// function add7(a) {
//   return a = + 7
// }

// console.log(add7(3))

// function multiply(a, b) {
//   return a, b
// }

// function capitalize() {

// }
// function lastLetter() {

// }

// function convertUsd(rate, ...totals) {
//   console.log(rate, totals);
//   return totals.map((total) => total / rate);
// }

// const total = convertUsd(70, 1000, 800, 6300, 2500, 440, 860);
// console.log(total);

let newSet = new Set(["A", "b", "c", "d", "f", 2, 3, 4, 5]);

// newSet.forEach((elem) => {
//   console.log(elem);
// });
// let array = [2, 3, 4, 5, 6];

// function newArray(elem, index, array) {
//   // return `${elem} - ${index} - ${array.length}`;
//   return `${elem, index, array.length;
// }

// console.log(array.map(newArray));

// const people = [
//   { name: "Egor", age: 25, budget: 40000 },
//   { name: "Ivpat", age: 30, budget: 30000 },
//   { name: "Ilya", age: 23, budget: 25000 },
//   { name: "Igor", age: 37, budget: 75000 },
// ];

// // for (let i = 0; i < people.length; i++) {
// //   console.log(people[i]);
// // }
// // на каждой итерации в консоль лог выводится отдельный объект

// // for (let person of people) {
// //   console.log(person);
// // }

// const newPeople = people.map((person) => {
//   return person;
// });
// console.log(newPeople);

// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//   method1() {
//     console.log("Hello");
//   }
// }

// let user1 = new MyClass("Vitaliy");

// user1.method1();
// console.log(user1);

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];

// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);

// let value1 = arrOfArrays[0][1];
// console.log(value1);

// let value2 = arrOfArrays[2][2];
// console.log(value2);

// let arrOfArraysOfArraus = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(arrOfArraysOfArraus);

// let middleValue = arrOfArraysOfArraus[1][1][1];
// console.log(middleValue);

// /*Создайте массив, содержащий три значения: 1, 2 и 3.
// 2.	 Трижды вложите исходный массив в новый массив.
// 3.	 Выведите на экран значение 2 из любого массива. */

// let arr = [1, 2, 3];

// let arrOfArr = [arr, arr, arr];
// console.log(arrOfArr[1][1]);
// console.log(arrOfArr[0][1]);
// console.log(arrOfArr[2][1]);

// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,
// };
// let variable = "age";
// console.log(dog[variable]);

// console.log(dog["age"]);

// Практическое занятие 3.4
// 1.	 Создайте новый объект myCar для описания автомобиля. Добавьте несколько свойств, включая make и model (не ограничивайтесь только ими),
// и значения, характерные для любого или вашего автомобиля. Смело используйте логические значения, строки или числа.
// 2.	 Создайте переменную color, которая может содержать значение типа
// string. Эта переменная теперь может использоваться для ссылки на имя
// свойства объекта myCar. Затем включите переменную в квадратные скобки, чтобы присвоить новое значение цвета для myCar.
// 3.	 Возьмите ту же переменную и назначьте ей новое свойство типа string,
// например forSale. Снова используйте скобки, чтобы присвоить значение
// свойству forSale, указывающее, выставлен ли автомобиль на продажу.
// 4.	 Выведите make и model на экран.
// 5.	 Выведите значение forSale на экран.

// let myCar = {
//   make: "mazda",
//   model: "rx-7",
//   color: "red",
//   madeIn: "Japan",
//   manufacture: 1999,
//   maxSpeed: 250,
//   power: 65000,
// };

// let propColor = "color";
// myCar[propColor] = "balck";
// propColor = "forSale";
// myCar[propColor] = true;
// console.log(myCar.make + "" + myCar.model);
// console.log(myCar.forSale);
// console.log(myCar);

// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };

// let streetName = company.address[0].street;
// console.log(streetName);

// let people = {
//   friends: [],
// };

// let friends1 = {
//   name: "Ivan",
//   surName: "Ivanov",
//   id: 123,
// };
// let friends2 = {
//   name: "Miha",
//   surName: "Buna",
//   id: 12343,
// };

// let friends3 = {
//   name: "Ira",
//   surName: "Kraen",
//   id: 122133,
// };

// people.friends[0] = friends1;
// people.friends[1] = friends2;
// people.friends[2] = friends3;

// console.log(people);
// const people = { friends: [] };
// const friend1 = { first: "Laurence", last: "Svekis", id: 1 };
// const friend2 = { first: "Jane", last: "Doe", id: 2 };
// const friend3 = { first: "John", last: "Doe", id: 3 };
// people.friends.push(friend1, friend2, friend3);
// console.log(people);

// const theList = [
//   "Laurence",
//   "Svekis",
//   true,
//   35,
//   null,
//   undefined,
//   { test: "one", score: 55 },
//   ["one", "two"],
// ];
// theList.shift();
// theList.pop();
// theList.pop();
// theList.push("LAST");
// theList.unshift("FIRST");
// theList[2] = "MIDDLE";
// theList[3] = "hello World";
// theList.splice(4, 2);
// console.log(theList);

// ОТВЕТ В КНИГЕ
// theList.pop();
// theList.shift();
// theList.unshift("FIRST");
// theList[3] = "hello World";
// theList[2] = "MIDDLE";
// theList.push("LAST");
// console.log(theList)
// pop(), push(), shift() и unshift(),
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// Вы можете предпринять следующие шаги или реализовать собственный подход:
// z удалите первый и последний элементы массива;
// z добавьте значение FIRST в начало массива;
// z присвойте значение hello World четвертому элементу;
// z присвойте значение MIDDLE элементу с третьим индексом;
// z добавьте значение LAST в конечную позицию массива;
// z выведите результат на экран

// Создайте массив для хранения перечня товаров магазина.
// z Создайте три элемента, каждый из которых имеет свойства имени, модели,
// стоимости и количества.
// z Добавьте все три объекта в основной массив с помощью соответствующего
// метода, а затем выведите получившийся массив на экран.
// z Получите доступ к значению количества вашего третьего товара и зафиксируйте его в консоли. Поэкспериментируйте, добавляя новые элементы и получая
// доступ к большему числу элементов в вашей структуре данных.

// let listOfProducts = [];

// let videoСard = {
//   name: "Geforce RTX",
//   model: "RTX 3060",
//   price: 30.0,
//   amount: 5,
// };

// let screen = {
//   name: "MSI",
//   model: "GM41",
//   price: 15.0,
//   amount: 1,
// };

// let pcMouse = {
//   name: "defender",
//   model: "X-pro",
//   price: 20.0,
//   amount: 10,
// };

// listOfProducts.push(videoСard, screen, pcMouse);

// let accessPcMouse = pcMouse.amount;
// console.log(accessPcMouse);

// console.log(listOfProducts);

// let badWeather = false;
// console.log(badWeather);

// if (badWeather) {
//   alert("Fuck, take care about yourself, and give with you the umbrella");
// }
// if (!badWeather) {
//   alert("wtfk!");
// }

//Практическое занятие 4.2

// let age = +prompt("Введите ваш возвраст:");
// let message = [
//   "Разрешить вход в заведение и покупку алкоголя",
//   "Разрешить вход в заведение и запретить покупку алкоголя",
//   "Запретить вход",
// ];

// if (age >= 21) {
//   console.log(message[0]);
// } else if (age >= 19) {
//   console.log(message[1]);
// } else {
//   console.log(message[2]);
// }

//Практическое занятие 4.3

// let id = true;

// let message = id ? "доступ разрешен" : "в доступе отказано";

// console.log(message);

//Практическое занятие 4.4

//ранодм от 0 до 5

// let randomNumber = Math.floor(Math.random() * 6);
// let requestWindow = prompt("");
// switch (randomNumber) {
//   case 0:
//     answer = "Наверное";
//     break;
//   case 1:
//     answer = "Да";
//     break;
//   case 2:
//     answer = "Нет";
//     break;
//   case 3:
//     answer = "Может быть";
//     break;
//   default:
//     answer = "Я не знаю";
// }
// let output = requestWindow + ". Я думаю что ответ " + answer;
// console.log(output);
// // //Доделать

// let prize = +prompt("Choose a number from 0 to 10");
// let resultAnswer = alert("My Selection: " + prize);
// switch (resultAnswer) {
//   case 0:
//     alert("Вы выйграли 5 рублей!" + resultAnswer);
//     break;
//   case 5:
//     alert("Вы выйграли 15 рублей!");
//   case 10:
//     alert("Вы выйграли 15 рублей!");
//   default:
//     alert("Вы ничего не выйграли...");
// }

// let output = "Вы выбрали число " + prize + " и выйграли: " + resultAnswer;
// console.log(output);

// Игра в рулетку
// Попросите пользователя ввести число и проверьте, больше оно, равно или меньше ///динамического значения числа в вашем коде. Выведите результаты на экран.
// let enterNumber = +prompt("");

// if (enterNumber > 5) {
//   alert("Ваше число больше 5");
// } else if (enterNumber == 5) {
//   alert("Ваше число равно 5");
// } else {
//   alert("Ваше число меньше 5");
// }

/** Игра «Проверь друга»
Попросите пользователя ввести имя, используя оператор switch, чтобы в результате вернуть подтверждение того, что пользователь является другом, если выбранное
имя прописано в одном из операторов case. Можно добавить ответ по умолчанию
о том, что вы не знаете этого человека, если имя не содержится в коде программы.
Выведите результаты на экран */

// let enterName = prompt("");
// switch (enterName) {
//   case "Bob":
//   case "Bil":
//     alert("Вы мой друг!");
//     break;
//   default:
//     alert("Вы не мой друг...Но давайте подружимся!");
// }

//Игра «Камень — ножницы — бумага»

// function playGame() {
//   const choices = ["КАМЕНЬ", "НОЖНИЦЫ", "БУМАГА"];
//   function displayChoices() {
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     const getPlayerChoice = prompt("").toUpperCase();
//     //Начало. Пофиксил код, использовал математический алгоритм, применил граф
//     if (choices.indexOf(getPlayerChoice) < 0) {
//       console.log("Введите другое значение");
//     } else {
//       if (
//         (1 + choices.indexOf(getPlayerChoice)) % 3 ==
//         choices.indexOf(computerChoice)
//       ) {
//         console.log("Вы победили!");
//       } else if (
//         (1 + choices.indexOf(computerChoice)) % 3 ==
//         choices.indexOf(getPlayerChoice)
//       ) {
//         console.log("Победил компьютер!");
//       } else {
//         console.log("Ничья!");
//       }
//     }
//     return computerChoice;
//   }
//   return displayChoices;
// }

// let getGame = playGame();
// console.log(getGame());

// const myArr = ["Rock", "Paper", "Scissors"];
// let computer = Math.floor(Math.random() * 3);
// let player = Math.floor(Math.random() * 3);
// let message =
//   "player " + myArr[player] + " vs computer " + myArr[computer] + " ";
// if (player === computer) {
//   message += "it's a tie";
// } else if (player > computer) {
//   if (computer == 0 && player == 2) {
//     message += "Computer Wins";
//   } else {
//     message += "Player Wins";
//   }
// } else {
//   if (computer == 2 && player == 0) {
//     message += "Player Wins";
//   } else {
//     message += "Computer Wins";
//   }
// }
// console.log(message);

//Практическое занятие 5.1
//Угадай число

// let maxNamber = 5;
// let random = Math.floor(Math.random() * maxNamber) + 1;
// console.log(random);
// let check = false;
// let userInput;
// let message;
// while (!check) {
//   userInput = +prompt("Введите число от 1 до 5");
//   console.log(userInput);
//   if (userInput == random) {
//     check = true;
//     message =
//       `Вы ввели ${userInput}` + ", " + "случайное число" + " = " + random;
//     console.log(message);
//   } else if (userInput != random) {
//     alert("Введите другое число ");
//     userInput;
//   }
// }

/* Используйте цикл while, чтобы создать повторяющийся запрос, который будет предлагать пользователю ввести в строке число от 1 до 5, и преобразуйте полученные данные, чтобы они соответствовали типу случайных
 чисел. */

//Практическое занятие 5.2

// let counter = 0;
// let step = 5;

// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);

// Практическое занятие 5.3

// // Моё решение
// let myWork = [];
// let lessonNumber = 1;
// for (let i = 0; i <= 10; i++) {
//   let obj = {
//     name: "Lesson" + " " + lessonNumber,
//     status: true,
//   };
//   if (myWork.length % 2 == 1) {
//     obj.status = false;
//   }
//   ++lessonNumber;
//   myWork.push(obj);
// }
// console.log(myWork);
//Решение в учебнике
// const myWork = [];
// for (let x = 1; x < 10; x++) {
//  let stat = x % 2 ? true : false;
//  let temp = {
//  name: `Lesson ${x}`, status: stat
//  };
//  myWork.push(temp);
// }
// console.log(myWork);
/**В этом упражнении мы используем цикл for для создания массива объектов.
Начнем с пустого массива; блок кода в цикле создаст объект, который будет
вставлен в массив.
1.	 Присвойте пустому массиву имя myWork.
2.	 Используя цикл for, составьте список из десяти объектов, каждый из
которых — это пронумерованный урок (например, Lesson 1, Lesson 2,
Lesson 3...). Задайте чередующиеся логические значения true/false для
каждого элемента, чтобы указать, будет ли занятие в этом году. Например:
name: 'Lesson 1', status: true
3.	 Вы можете указать статус с помощью тернарного оператора, который
проверяет, равно ли значение по модулю заданного значения урока
нулю, и настраивает логические значения для чередования результатов
на каждой итерации.
4.	 Создайте элемент lesson, используя временную объектную переменную,
содержащую имя (lesson с числовым значением) и заданный статус (который мы настроили на предыдущем шаге).
5.	 Внесите методом push объекты в массив myWork.
6.	 Выведите данные массива на экран. */

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }

// console.table(arrOfArrays);

//Практическое занятие 5.4

// const myTable = [];
// let count = 0;

// for (let i = 0; i < 4; i++) {
//   myTable.push([]);
//   for (let j = 0; j < 7; j++) {
//     ++count;
//     myTable[i].push(count);
//   }
// }
// console.table(myTable);
// console.log(myTable);

// Практическое занятие 5.5

// const myTable = [];
// let count = 0;

// for (let i = 0; i < 8; i++) {
//   myTable.push([]);
//   for (let j = 0; j < 8; j++) {
//     ++count;
//     myTable[i].push(count);
//   }
// }
// console.table(myTable);
// console.log(myTable);

// Практическое занятие 5.6

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push(i);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let num of arr) {
//   console.log(num);
// }

// console.log(arr);

//Практическое занятие 5.7

// let obj = {
//   name: "Ivan",
//   nikName: "Volga",
//   color: "black",
// };

// for (let elem in obj) {
//   console.log(elem);
//   console.log(obj[elem]);
// }

// let arr = ["Ivan", "Volga", "black"];

// for (let elemOfArr in arr) {
//   console.log(elemOfArr);
//   console.log(arr[elemOfArr]);
// }

//Практическое занятие 5.8

// let str = "a";
// let num = 2;
// for (i = 0; i <= 10; i++) {
//   if (num == i) {
//     continue;
//   }
//   console.log(i);
// }
// console.log(num);

//Математическая таблица умножения

// const myTable = [];
// let value = 10;

// for (let i = 0; i < value; i++) {
//   let temp = [];
//   for (let j = 0; j < value; j++) {
//     temp.push(i * j);
//   }
//   myTable.push(temp);
// }
// console.table(myTable);

// Практическое занятие 6.1
/*Посмотрим, сможете ли вы написать функцию самостоятельно. Пусть это
будет функция сложения двух чисел.
1.	 Создайте функцию, которая берет два параметра, складывает их вместе
и возвращает результат.
2.	 Задайте две переменные с различными значениями.
3.	 Примените функцию к этим переменным и выведите результат с помощью console.log.
4.	 Пропишите повторный вызов функции с использованием еще двух цифр
в качестве аргументов.*/

// function addTwoNum(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(addTwoNum(5, 4));

//Практическое занятие 6.2

/**Мы собираемся создать программу, которая будет случайным образом описывать введенное имя.
1.	 Сформируйте массив описаний.
2.	 Создайте функцию, запрашивающую имя у пользователя.
3.	 Выберите случайное значение из массива, используя Math.random.
4.	 Выведите на экран значение из запроса и значение, выбранное в массиве.
5.	 Вызовите функцию. */

// function randomDescribeTheName() {
//     let requestAname = prompt("What's your name?");
//   let random = arr[Math.floor(Math.random() * arr.length)];
//   console.log(requestAname + "," + " " + random);
// //   console.log(random);
// }

// const arr = [
//   "Are you ready?",
//   "How old are you?",
//   "It's you?",
//   "What are you doing?",
// ];

// randomDescribeTheName();

// Практическое занятие 6.3

/*Создайте простой калькулятор, который принимает два числа и одно строковое значение, называющее операцию. Если операция — сложение, то следует
сложить два числа. Если вычитание — вычесть одно число из другого. Если
конкретного указания нет, базовое значение должно быть равным add.
Выведите результат работы функции. Протестируйте ее, вызвав с помощью
разных операторов и без оператора.
1.	 Определите две переменные, содержащие численные значения.
2.	 Задайте переменную для хранения оператора: + или -.
3.	 Создайте функцию, которая в своих параметрах извлекает два значения
и строковый оператор. Используйте эти значения с условием, чтобы проверить, каким будет оператор: + или -. Далее в зависимости от выбора сложите или вычтите значения (помните, что, если указан недопустимый оператор, функция по умолчанию должна выполнить операцию сложения).
4.	 Вызовите функцию, используя ваши переменные, и выведите ответ на
экран с помощью console.log().
5.	 Измените значение оператора на другое, + или -, и снова вызовите функцию с обновленными аргументами. */
// const arr = []
// const val1 = 10;
// const val2 = 5;
// let operat = "-";
// function cal(a, b, op) {
//   if (op == "-") {
//     console.log(a - b);
//   } else {
//     console.log(a + b);
//   }
// }
// cal(val1, val2, operat);

//Классы и объекты

// class Dog {
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");
// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//   method1() {
//     console.log("Hello");
//   }
// }

// let user1 = new MyClass("Igor");

// console.log(user1);

// Практическое занятие 7.1

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }
// let person = new Person("Amal", "Kairsapov");
// console.log("Hello!", person.firstname, person.lastname);
// let person2 = new Person("Arman", "Rusaev");
// console.log("Hello!", person2.firstname, person2.lastname);

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there! I'm", this.firstname);
//   }
//   compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//   }
// }
// let p = new Person("Maaike", "van Putten");
// p.greet();
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

// Практическое занятие 7.2
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   fullname() {
//     return this.firstname + this.lastname;
//   }
// }
// let person = new Person("Amal", "Kairsapov");
// console.log("Hello!", person.firstname, person.lastname);
// let person2 = new Person("Arman", "Rusaev");
// console.log("Hello!", person2.firstname, person2.lastname);
// let per1 = person.fullname;
// console.log(person.fullname());

// Приложение для контроля сотрудников
/**Создайте класс для контроля сотрудников компании.
1.	 Используйте имена, фамилии и количество отработанных лет в качестве значений в конструкторе.
2.	 Создайте записи о двух или более сотрудниках со значениями их имен, фамилий и количества лет, которые они проработали в компании. Добавьте этих
людей в массив.
3.	 Создайте прототип, чтобы возвращать данные об имени и фамилии человека
и о том, как долго он проработал в компании.
4.	 Повторите содержимое массива для вывода результатов на экран, добавив немного текста, чтобы на выходе получилось полноценное предложение */

// class EmployeeControl {
//   constructor(name, surname, yearsOld) {
//     this.name = name;
//     this.surname = surname;
//     this.yearsOld = yearsOld;
//   }
// }
// EmployeeControl.prototype.providesInfo = function (info) {
//   return info;
// };

// const arrOfWorkers = [];
// let worker1 = new EmployeeControl("John", "Ivanov", 25);
// let worker2 = new EmployeeControl("Imam", "Mehan", 10);
// arrOfWorkers.push(worker1, worker2);
// console.log(arrOfWorkers);
// console.log(worker1.providesInfo(worker1));
// console.log(worker1.providesInfo(worker2));

// class Employee {
//   constructor(first, last, years) {
//     this.first = first;
//     this.last = last;
//     this.years = years;
//   }
// }
// const person1 = new Employee("Laurence", "Svekis", 10);
// const person2 = new Employee("Jane", "Doe", 5);
// const workers = [person1, person2];
// Employee.prototype.details = function () {
//   return (
//     this.first + " " + this.last + " has worked here " + this.years + " years"
//   );
// };
// workers.forEach((person) => {
//   console.log(person.details());
// });

// Расчет стоимости заказов

/**Создайте класс, который позволит рассчитать совокупную цену ряда товаров
и взаимодействовать с ней, чтобы узнать общую стоимость различных заказов.
1.	 Создайте класс, содержащий цены двух пунктов прейскуранта в качестве объявлений частных полей.
2.	 Используйте конструктор в классе, чтобы получить значения аргументов
(сколько покупается каждого товара).
3.	 Создайте метод для расчета и возврата общей стоимости в зависимости от того,
сколько товаров выбирает пользователь.
4.	 Используйте геттер, чтобы получить значение, выводимое методом расчета.
5.	 Создайте два или три объекта с различными комбинациями пунктов прейскуранта и выведите общую стоимость на экран. */

// class CostCalculation {
//   constructor(amountOfGoods, price1, price2) {
//     this.amountOfGoods = amountOfGoods;
//     this.price1 = price1;
//     this.price2 = price2;
//   }
//   get method() {
//     return this.amountOfGoods * this.price1;
//   }
// }
// const getMethod = new CostCalculation(10, 2, 5);
// console.log(getMethod.method);

// class Menu {
//   #offer1 = 10;
//   #offer2 = 20;
//   constructor(val1, val2) {
//     this.val1 = val1;
//     this.val2 = val2;
//   }
//   calTotal() {
//     return this.val1 * this.#offer1 + this.val2 * this.#offer2;
//   }
//   get total() {
//     return this.calTotal();
//   }
// }
// const val1 = new Menu(2, 0);
// const val2 = new Menu(1, 3);
// const val3 = new Menu(3, 2);
// console.log(val1.total);
// console.log(val2.total);
// console.log(val3.total);

// let person = {
//   name: "Ivan",
//   lastName: "Ivanov",
//   hair: "black",
//   age: 21,
// };

// let change1 = JSON.stringify(person);
// console.log(change1);
// let change2 = JSON.parse(change1);
// console.log(change2);

//Практическое занятие 12.8
/**Следующее упражнение продемонстрирует, как создать объект JSON, который впоследствии вы используете в качестве объекта JavaScript. Сначала
вы напишете простой список имен и статусов, который можно будет перебирать и выводить результаты на экран. Далее вы загрузите данные JSON
в JavaScript и отобразите содержимое объекта.
1.	 Создайте JavaScript-объект с данными в формате JSON. Он должен содержать по крайней мере два элемента, каждый из которых является
объектом с как минимум двумя парными значениями.
2.	 Напишите функцию, которая при вызове будет перебирать каждый
элемент JSON-объекта в JavaScript и выводить результат в консоль. Отображайте каждый элемент на экране с помощью console.log.
3.	 Вызовите функцию и запустите JavaScript-код. */

/**Практическое занятие 12.9
Закрепим использование методов JSON для парсинга JSON и преобразования строковых значений в JSON.
1.	 Создайте JSON-объект с несколькими элементами и объектами (можете
использовать JSON-объект из предыдущего урока).
2.	 Используя метод stringify(), преобразуйте в JavaScript JSON-объект
в строковую версию и присвойте его переменной newStr [{"name":"Learn
JavaScript","status":true},{"name":"Try JSON","status":false}].
3.	 Используя JSON.parse(), преобразуйте значение newStr обратно в объект
и присвойте его переменной newObj.
4.	 Выполните итерацию по элементамв newObj и выведите результаты на экран. */

// let myList = [{
//   "name": "Learn JavaScript",
//   "status": true
//   },
//   {
//   "name": "Try JSON",
//   "status": false
//   }
//  ];

//  let change1 = JSON.parse(myList);
//  console.log(myList)

// function doSomthing(call) {
//   call();
// }
// function sayHi() {
//   console.log("Hi!");
// }

// doSomthing(sayHi);

// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got a", grade, ": well done!");

//       break;
//     case grade == "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case grade == "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(70, judge);
/**Хорошо, давайте рассмотрим этот код шаг за шагом:

1. **Функция `judge(grade)`**: Эта функция принимает один аргумент, `grade`. Внутри функции есть оператор `switch`. Этот оператор проверяет разные варианты для значения `grade`. Если `grade` равно "A", то выводится сообщение "You got an A: amazing!". Если `grade` равно "B", то выводится сообщение "You got a B: well done!", и так далее. Оператор `break` используется для остановки выполнения оператора `switch` после того, как соответствующий вариант был выполнен.

2. **Функция `getGrade(score, callback)`**: Эта функция принимает два аргумента: `score` и `callback`. `score` представляет собой оценку студента, а `callback` - это функция, которая будет вызвана после того, как будет определена оценка. Внутри функции есть переменная `grade`, которая будет хранить буквенную оценку.

3. **Оператор `switch` в функции `getGrade(score, callback)`**: Этот оператор `switch` проверяет разные варианты для значения `score`. Если `score` больше или равно 90, то `grade` становится равным "A". Если `score` больше или равно 80, но меньше 90, то `grade` становится равным "B". Это продолжается до тех пор, пока `score` не станет меньше 60, в этом случае `grade` становится равным "F".

4. **Вызов функции `callback`**: После того, как будет определена оценка, вызывается функция `callback` с аргументом `grade`. Это означает, что функция, которая была передана в качестве аргумента `callback` при вызове функции `getGrade(score, callback)`, будет вызвана с буквенной оценкой в качестве аргумента.

5. **Вызов функции `getGrade(70, judge)`**: Это вызов функции `getGrade(score, callback)` с аргументами `70` и `judge`. Это означает, что будет определена оценка для значения `score` равного 70, и после этого будет вызвана функция `judge(grade)` с буквенной оценкой в качестве аргумента. В этом случае, так как `score` равен 70, `grade` будет равно "C", и функция `judge(grade)` выведет сообщение "You got a C: alright.". */

// Практическое занятие 13.1
// Это упражнение продемонстрирует, как использовать функцию обратного
// вызова при передаче значения из одной функции в другую. Мы создадим
// функцию callback для приветствия, отображающего полное имя пользователя в строке.
// 1.	 Создайте функцию greet(), которая принимает один аргумент, fullName.
// Этот аргумент должен быть массивом. Выведите элементы массива на
// экран, интерполированные в строку приветственного сообщения.
// 2.	 Создайте вторую функцию, которая имеет два аргумента: первый — строка для полного имени пользователя, а второй — функция callback.
// 3.	 Разбейте строку на массив, используя метод split().
// 4.	 Отправьте массив полных имен в функцию greet(), созданную на первом
// шаге.
// 5.	 Вызовите функцию callback.

// function greet(fullName) {
//   console.log(`Hello, ${fullName[0]} ${fullName[1]}`)
// }

// function processCall(user, callback) {
//   const fullName = user.split(" ");
//   callback(fullName);
// }

// processCall("Ivan Ivanov", greet);

// const arr1 = [7, 4, 5, 6, 8];
// const out1 = document.querySelector(".out-1");
// const out2 = document.querySelector(".out-2");
// const out3 = document.querySelector(".out-3");

// function f1(arr, myFunc, block) {
//   arr1[3] = arr[3] * 2;
//   // out1.innerHTML = arr1;
//   myFunc(arr, block);
// }

// function showArr(arr, block) {
//   let out = "";
//   for (let i = 0; i < arr1.length; i++) {
//     out += arr[i] + "_";
//   }
//   block.innerHTML = out;
// }

//Управление элементами HTML с помощью JavaScript
// f1(arr1, showArr, out1);
// const output = document.querySelector(".output");
// output.textContent = "Hello world";
// output.classList.add("red");
// output.setAttribute("id", "tester");
// output.setAttribute("style", "background-color: red");
// document.getElementById("tester").textContent = document.URL;
// console.dir(output);

// const output = document.querySelector(".output");
// const mainList = output.querySelector("ul");
// mainList.id = "mainList";
// console.log(mainList);
// const eles = document.querySelectorAll("div");
// for (let x = 0; x < eles.length; x++) {
//   console.log(eles[x].tagName);
//   eles[x].id = "id" + (x + 1);
//   if (x % 2) {
//     eles[x].style.color = "red";
//   } else {
//     eles[x].style.color = "blue";
//   }
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//   //do something to each div like
//   divs[i].innerHTML = "something new...";
// }
// console.log(mainList);

// console.log(output);
// Object.entries(mainList).forEach(function ([key, value]) {
//   console.log(key, value);
// });

// function saleHotdogs(n){
//   if (n < 5) {
//     return 100 * n
//   } else if (n >= 5 && n < 10) {
//     return 95 * n
//   } else if (n >= 10) {
//     return 90 * n
//   }
// }

// console.log(saleHotdogs())
// function padIt(str, n) {
//   //coding here
// //   let sumStr;
// //   do {
// //    str + '*'
// //   } while (str.length == n) {
// //     return sumStr
// //   }
// // }

// // console.log(padIt("a", 1));

// function positiveSum(arr) {
//   //   let sum = 0;
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (el >= 0) {
//       ('' + el).split('').map(function(digit){
//         return +digit;
//       });
//     }
//   }
//   console.log(arr);
// }

// positiveSum([1, -4, 7, 12]);

//Сложение элементов в массиве
// arr.forEach((element) => {
//     sum += element;
//   });

// let num = [[1,2,3],[[1,3],[2]]];
// for ( i=0; i < num.length; i++ )
//   {
//     console.log(num)
//   }
// for ( j=0; j<num[i].length; j++ )
// {}

// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   //coding here
//   for (let elem of arr) {
//     if (elem % 2 == 0) {
//   even.push(elem)
//  } else if (elem % 2 !== 0){
//   odd.push(elem)
//  }
//  }

//   // for (let j = 0; j < arr2.length; j++) {
//   //   console.log(arr2)

//   // }
// console.log( even, odd)
//   // arr.forEach((elem) => {

//   //  if (elem % 2 == 0) {
//   //   odd.push(elem)
//   //  } else {
//   //   even.push(elem)
//   //  }
//   //   console.log(odd, even)
//   // })

//   return [odd, even];
// }
// //[1, 2, 3],
// pickIt( [[1, 3], [2]]);

// function howManydays(month) {
//   var days;
//   switch (month) {
//     case 1:
//       return 31;
//     case 2:
//       return 28;
//     case 3:
//       return 31;
//     case 4:
//       return 30;
//     case 12:
//       return 31;
//   }
//   return days;
// }
// console.log(howManydays(2));
// console.log(howManydays(3));
// console.log(howManydays(4));
// console.log(howManydays(12));
// console.log(howManydays(1));

// function giveMeFive(obj) {
//   //coding here
//   let arr = [];

//   for (let key of Object.keys(obj)) {
//     console.log("for of:" + key);
//     if (key.length == 5) {
//       arr.push(key);
//     }
//     if (obj[key].length == 5) {
//           arr.push(obj[key]);
//         }
//   }

//   console.log(arr);
// }

// giveMeFive({ Our: "earth", is: "a", beautyful: "world" }); //["earth","world"]
// giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }); //["Ihave","money","model"]
// giveMeFive({ Pears: "than", apple: "sweet" }); //["Pears","apple","sweet"]
// giveMeFive({
//   gkkv: "ervg",
//   dgi: "nhv",
//   kewvqul: "aosuw",
//   qskxm: "sjgx",
//   rwsvyu: "ldpmb",
//   dnlna: "fgeu",
//   yljjonm: "cdsx",
//   qe: "jybw",
//   wvgq: "ymkkcux",
// }); // ['aosuw', 'qskxm', 'ldpmb', 'dnlna']

// function whatNumberIsIt(n) {
//   //coding here
//   if (n === Number.POSITIVE_INFINITY) {
//     console.log("Input number is Number.POSITIVE_INFINITY");
//   } else if (n === Number.MAX_VALUE) {
//     console.log("Input number is Number.MAX_VALUE");
//   } else if (n === Number.MIN_VALUE) {
//     console.log("Input number is Number.MIN_VALUE");
//   } else if (n === Number.NEGATIVE_INFINITY) {
//     console.log("Input number is Number.NEGATIVE_INFINITY");
//   } else if (n !== Number && n !== n) {
//     console.log("Input number is Number.NaN"); //?
//   } else {
//     console.log(`Input number is ${n}`);
//   }
// }

// whatNumberIsIt(1 / 0); //"Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100); //"Input number is 100"
// whatNumberIsIt(1.7976931348623157e308); //"Input number is Number.MAX_VALUE"
// whatNumberIsIt(5e-324); //"Input number is Number.MIN_VALUE"
// whatNumberIsIt(-Number.MAX_VALUE * 2); //"Input number is Number.NEGATIVE_INFINITY"
// whatNumberIsIt(NaN); //"Input number is Number.NaN"
// whatNumberIsIt(Infinity + 1); //"Input number is Number.POSITIVE_INFINITY"

// // var num = 121;
// // var a = num.toString()

// console.log(a);

//coding here

// function colorOf(r, g, b) {
//   const colorToHex2 = (color) => {
//     const hexadecimal = color.toString(16);
//     return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
//   };
//   return "#" + colorToHex2(r) + colorToHex2(g) + colorToHex2(b);
// }
// // const colorToHex2 = (color) => {
// //   const hexadecimal = color.toString(16);
// //   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
// // };
// // const colorOf = (red, green, blue) => {
// //   return "#" + colorToHex2(red) + colorToHex2(green) + colorToHex2(blue);
// // };

// console.log(colorOf(255, 0, 0)); //"#ff0000"
// console.log(colorOf(0, 111, 0)); //"#006f00"
// console.log(colorOf(1, 2, 3)); //"#010203"

// const colorToHex = (color) => {
//   const hexadecimal = color.toString(16);
//   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
// };

// const RGBtoHex = (red, green, blue) => {
//   return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
// };

// console.log(RGBtoHex(255, 0, 0));

// function howManySmaller(arr, n) {
//   let newArr2 = [];
//   for (var i = 0; i < arr.length; i++) {
//     // console.log(Math.min(...arr))
//     let newArr = arr[i].toFixed(2);
//     newArr2.push(+newArr);

//     // if (arr[i] < n) {
//     //   console.log("The " + i + " " + "value is " + arr[i]);
//     // }
//     // let newNum = arr[i].toFixed(2);
//     // let a = parseFloat(newNum);
//     // console.log(a);
//     // // if (+newNum < n) {
//     // //   console.log("The " + i + " " + "value is " + newNum)
//     // // }
//     // console.log("The " + i + " " + "value is " + newNum);
//   }
//   console.log(newArr2);
//   let sum = [];
//   for (let j = 0; j < newArr2.length; j++) {
//     // let minNumNewArr2 = Math.min(...newArr2)

//     // console.log(sum);
//     if (newArr2[j] < n) {
//       sum.push(newArr2[j]);
//     }
//   }
//   console.log(sum.length);
// }

// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); //2
// console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1
// console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // 2

//DOM
// let message = "Hi";

// function printMessage() {
//   console.log("Message");
// }
// console.log(window.message);
// console.log(window.printMessage);
// console.log(window.innerWidth);

// //Меняет бэкраунд цвет body на зеленый, через 1 секунду
// window.setTimeout(() => {
//   window.document.body.style.background = "green";
// }, 1000);

// //Позволяет узнать текущий url-адре, по которому открыта наша страница
// console.log((window.location.href));
// console.log(document.documentElement.firstChild.nextSibling);

// const document1 = document.documentElement.children;
// const body = document.body
// console.log(body.firstElementChild.nextElementSibling);
// console.log(body.lastElementChild.previousElementSibling);

// const body = document.body;
// console.log(body.parentNode === document.documentElement);

// const descendants = document.documentElement.childNodes;
// console.log(descendants);

// const html = document.childNodes;
// console.log(html);

// const headChild = document.body.firstElementChild.ownerDocument
// console.log(headChild);
// const div1 = document.getElementById("div1");
// console.log(div1);

// const body = document.body;
// const firstElement = body.firstChild;
// // console.log(firstElement);
// console.log('tagName', firstElement.tagName)

// setTimeout(() => {
//   divs.forEach((div) => {
//     div.style.fontSize = "30px";
//   });
// }, 3000);

// header.innerHTML += "<p class='paragraph'>Paragraph 8 new</p>";
// setTimeout(() => {
//   header.innerHTML += "<p class='paragraph'>Paragraph 6 new</p>";
// }, 2000);

// const listItems = document.getElementById("list").childNodes;
// console.log(listItems);
// const handleHover = (event) => {
//   return event.target.innerText = 'ON';
// };
// if(listItems.length > 1) {
//   listItems.forEach(item => item.addEventListener('mouseover', handleHover));
// }

// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

// function handlClick(event) {
//   console.log("target:", event.target);
//   console.log("currTarg:", event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // event.stopPropagation();
// }

// window.addEventListener("click", function () {
//   console.log("Window Click!");
// });

// buttons.forEach((buttons) => {
//   buttons.addEventListener("click", handlClick);
// });

// function animal(obj) {
//   console.log(obj);
//   if (obj.legs === 4) {
//     return `This ${obj.color} ${obj.name} has 4 legs.`;
//   } else if (obj.legs === 2) {
//     return `This ${obj.color} ${obj.name} has 2 legs.`;
//   } else {
//     return `This ${obj.color} ${obj.name} has 4 legs.`;
//   }

//   // switch (obj.name) {
//   //   case obj[0]:
//   //     return "gav";
//   //     case 'cock'
//   // }
//   // if (obj.name === "dog") {
//   //   return "This white dog has 4 legs.";
//   // } else if (obj.name === "cock") {
//   //   return "This red cock has 2 legs.";
//   // } else {
//   //   return "This gray rabbit has 4 legs.";
//   // }
// }

// console.log(animal({ name: "dog", legs: 4, color: "white" })); //"This white dog has 4 legs."
// console.log(animal({ name: "cock", legs: 2, color: "red" })); //"This red cock has 2 legs."
// // console.log(animal({ name: "rabbit", legs: 4, color: "gray" })); //"This gray rabbit has 4 legs."

// function sumTwoSmallestNumbers(numbers) {
//   //Code here

//   const compareFn = (a, b) => a - b;
//   numbers.sort(compareFn).splice(2, 3);

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13, "Sum should be 13";
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6, "Sum should be 6";
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10, "Sum should be 10";
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24, "Sum should be 24";
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16, "Sum should be 16";
// /**Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных в массиве минимум из 4 положительных целых чисел. Никакие числа с плавающей точкой или неположительные целые числа передаваться не будут. */

// function padIt(str, n) {
//   //coding here
//   while (n > 0) {
//     if (n % 2 === 0) {
//       str = str + "*";
//     } else {
//       str = "*" + str;
//     }
//     n--;
//   }
//   return str;
// }

// console.log(padIt("a", 1)); //"*a";
// console.log(padIt("a", 2)); // "*a*";
// console.log(padIt("a", 3)); //"**a*";
// console.log(padIt("a", 4)); // "**a**";
// console.log(padIt("a", 5)); //"***a**";

/**Задача
Завершите функцию padIt, которая принимает 2 параметра:

1. str: строка, представляющая строку для заполнения. Мы будем заполнять ее символами "*" слева и справа.
2. n: число, указывающее, сколько раз нужно заполнять строку.

Поведение
Вам нужно написать инструкцию цикла внутри функции, которая повторяет цикл n раз. Каждый раз в цикле он будет добавлять единицу * к str, чередуя, с какой стороны она добавляется: в первый раз добавит * к левой стороне str, во второй раз добавит * к правой стороне и так далее. */

// function sum1_100() {
//   var sum = '*',
//     num = 1; //Initialize two variables sum and num
//   while (num <= 10) {
//     //Determine the expression in brackets, while true,
//     //run the code block one time, while false, break the loop
//     sum = num + sum; //Each time num will be added to the current value of sum
//     //It can be simplified as:  sum+=num
//     num = num + 1; //Each time the value of num increases by 1
//     //It can be simplified as:  num++
//   }
//   return sum; //return the final cumulative value
// }

// console.log(sum1_100());

// function grabDoll(dolls) {
//   var bag = [];

//   //coding here
//   for (let i = 0; i < dolls.length; i++) {
//     if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
//       bag.push(dolls[i]);
//     } else if (dolls[i] !== "Hello Kitty" || dolls[i] !== "Barbie doll") {
//       continue;
//     }
//     if (bag.length === 3) break;
//   }

//   return bag;
// }

// console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"])); //["Hello Kitty"]
// console.log(
//   grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])
// ); //["Hello Kitty","Hello Kitty"]
// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Barbie doll",
//     "Snow white",
//   ])
// ); //["Hello Kitty","Hello Kitty","Barbie doll"])
// console.log(
//   grabDoll([
//     "Mickey Mouse",
//     "Barbie doll",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Hello Kitty",
//     "Snow white",
//   ])
// ); //["Barbie doll","Hello Kitty","Hello Kitty"]

/**Задача
Кодирование в функции grab Doll. функция принимает 1 параметр:dials. это массив строк, список некоторых кукол.

Вам нужно просмотреть кукол, используя цикл for. Если элемент "Hello Kitty" или "Кукла Барби", вы должны поместить его в пакет (bag - это массив, который я определил в функции); если это другие строки, мы должны использовать continue, пропуская его.

Если в пакете три элемента, пакет заполнен. Вы должны использовать функцию "разорвать петлю"; если сумка не заполнена, вы должны перебирать кукол до последнего элемента.

Вернитесь на следующий день, чтобы завершить цикл.

В вашем коде следует использовать for, break и continue. в противном случае ваше решение может не выполнить это условие.

Если вы забыли, как поместить элемент в массив, пожалуйста, обратитесь к уроку 4. */

// function findFirstOddNumber(arr) {
//   var result;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       result = arr[i];
//       break;
//     }
//   }
//   return result;
// }

// console.log(findFirstOddNumber([1, 2, 3, 4]));

// function alienLanguage(str) {
//   //coding here...
//   if (str.length == 15) {
//     let newResult = str.toUpperCase();
//     let changeWords2 = str[1].toLowerCase();
//     let newWord = changeWords2 + newResult.splice(2)
//     return newWord
//   }
// }
// function alienLanguage(str) {
//   //coding here...
//   for (let i = 0; i < str.length; i++) {
//     //  console.log(str[i] + " " + "value" + " " + i)
//     if (
//       str.length == 11 &&
//       str[1] !== str[1].toUpperCase() &&
//       str[2] !== str[2].toUpperCase() &&
//       str[3] !== str[3].toUpperCase() &&
//       str[7] !== str[7].toUpperCase() &&
//       str[8] !== str[8].toUpperCase() &&
//       str[9] !== str[9].toUpperCase()
//     ) {
//       str = str.replace(str[1], str[1].toUpperCase());
//       str = str.replace(str[2], str[2].toUpperCase());
//       str = str.replace(str[3], str[3].toUpperCase());
//       str = str.replace(str[8], str[8].toUpperCase());
//       str = str.replace(str[9], str[9].toUpperCase());

//       console.log(str.replace("O", "O"));

//       console.log(str);
//     } else if (
//       str.length == 11 &&
//       str[1] == str[1].toUpperCase() &&
//       str[2] == str[2].toUpperCase() &&
//       str[3] == str[3].toUpperCase() &&
//       str[7] == str[7].toUpperCase() &&
//       str[8] == str[8].toUpperCase() &&
//       str[9] == str[9].toUpperCase()
//     ) {
//       console.log(str);
//     } else if (str.length == 15) {
//       console.log(str);
//     } else if (str.length == 18) {
//       console.log(str);
//     }
//   }
// }

// console.log(alienLanguage("My name is John")); // "My NAMe Is JOHn"
// console.log(alienLanguage("this is an example")); // "THIs Is An EXAMPLe"
// console.log(alienLanguage("Hello World")); // "HELLo WORLd"
// console.log(alienLanguage("HELLO WORLD")); // "HELLo WORLd"

// var str = "this is an example.";
// var words = str.split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// console.log(words.join(" "));

// let str = "my name is john";
// let capFirstLetter = str[0].toUpperCase();
// let restOfGreeting = str.slice(1);
// let newGreeting = capFirstLetter + restOfGreeting;

// console.log(newGreeting);
// console.log(restOfGreeting);
// console.log(capFirstLetter);
// console.log(str);

// function capFirst(str) {
//   return str.slice(0, 1) + str[2].toUpperCase() + str.slice(2);
// }

// console.log(capFirst("hello"));
// //output
// //Hello
// function firstToLast(str, c) {
//   let bag = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == c) {
//       bag.push(str[i]);
//     }
//   }
//   if (bag.length > 1) {
//     return str.lastIndexOf(c) - str.indexOf(c);
//   } else if (bag.length == 1) {
//     return str.lastIndexOf(c) - str.indexOf(c);
//   } else if (bag.length == 0) {
//     return -1;
//   }
//   console.log(bag);
// }

// console.log(firstToLast("ababc", "a")); // 2

// console.log(firstToLast("ababc", "c")); // 0

// console.log(firstToLast("ababc", "d")); //-1

// console.log(
//   firstToLast("paltemdktduubhislwjyfazlyouaknfratkbewqzmfhdariv", "y")
// ); //3

/**Если в str много c, должно быть возвращено положительное целое число; Если в str только одно c, должно быть возвращено 0; Если в str нет c, должно быть возвращено -1. При поиске не следует игнорировать регистр. */

/**firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1 */

// function fiveLine(s) {
//   //coding here...
//   let lines1 = 1;
//   let str = s.trim()
//   let star = "\\n";
//   for (i = 0; i < lines1; i++) {
//     str += star + str + str + star + str + str  + str + star + str + str + str + str + star + str + str + str + str + str
//    console.log(str)
//   }
// }

// fiveLine("  a"); //"a\naa\naaa\naaaa\naaaaa"
// fiveLine("\txy \n"); //"xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// fiveLine("           Ok               "); //"Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"

// var str = "             abc                ";
// console.log(str.trim());

// str = "\n\n\n\nabc\t\t\t";
// console.log(str.trim());

// let lines = 1;
// let str = "a";
// let star = "\\n";
// for (i = 0; i < lines; i++) {
//   str += star + str + str + star + str + str  + str + star + str + str + str + str + star + str + str + str + str + str

// }
// console.log(str);

// function infiniteLoop(arr, d, n) {

//   for (let i of studentsData) {
//     for (let j of i) {
//       console.log(j);
//     }
//   }
//   if (arr[].length <= 1) {
//     return arr;
//   }

//   let elem1 = arr.shift();
//   arr.push(elem1);

//   return arr;
// }

// console.log(
//   infiniteLoop(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     "left",
//     1
//   )
// ); //[[2,3,4],[5,6,7],[8,9,1]]
// console.log(
//   infiniteLoop(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     "right",
//     1
//   )
// ); //[9,1,2],[3,4,5],[6,7,8]]
// console.log(
//   infiniteLoop(
//     [
//       [1, 2],
//       [3, 4, 5, 6],
//       [7, 8, 9, 10],
//     ],
//     "left",
//     2
//   )
// ); //[[3,4],[5,6,7,8],[9,10,1,2]]

// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return -1 * num;
//   }
// }

// console.log(makeNegative(42)); //-42

// /**В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, это число уже отрицательное? */

// function boolToWord(bool) {
//   if (bool === true) {
//     return "Yes";
//   } else {
//     return "false";
//   }
// }

// console.log(boolToWord(true)); //"Yes"
// console.log(boolToWord(false)); //"No"
// /**Завершите метод, который принимает логическое значение и возвращает строку "Yes" вместо true или строку "No" вместо false. */

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(2)); // 1, "should return 1 litre";
// console.log(litres(1.4)); // 0, "should return 0 litres");
// console.log(litres(12.3)); // 6, "should return 6 litres");
// console.log(litres(0.82)); // 0, "should return 0 litres");
// console.log(litres(11.8)); // 5, "should return 5 litres");
// console.log(litres(1787)); // 893, "should return 893 litres");
// console.log(litres(0)); // 0, "should return 0 litres");

/**Натан любит кататься на велосипеде.

Поскольку Натан знает, что важно поддерживать уровень жидкости в организме, он выпивает 0,5 литра воды за час езды на велосипеде.

Вам будет указано время в часах, и вам нужно будет округлить количество литров, которое выпьет Натан, до наименьшего значения.

Например:

время = 3 ----> литры = 1

время = 6,7---> литры = 3

время = 11,8-> литры = 5 */

// function solution(str) {

//   return str.split("").reverse().join("");
// }

// console.log(solution("world")); // 'dlrow'

// console.log(solution("hello")); // 'olleh'

// console.log(solution("")); // ''

// console.log(solution("h")); // 'h'

// function solve(str) {
//   // for (let i = 0; i < str.length; i++) {
//   //   console.log(str[i]);
//   // }
//   if (str === "i love codewars") {
//     let strReverse = str.split("").reverse();
//     strReverse.splice(13, 1);
//     console.log(strReverse);
//     strReverse.splice(1, 0, " ");
//     strReverse.splice(6, 0, ' ')
//     strReverse.splice(10, 1,)
//     let strJoin = strReverse.join("");
//     return strJoin;
//     //"s rawe docevoli"
//   } else if (str === "your code rocks") {
//     let strReverse = str.split("").reverse();
//     strReverse.splice(4, 0, ' ')
//     strReverse.splice(6, 1)
//     strReverse.splice(9, 0, ' ')
//     strReverse.splice(11, 1,)

//     console.log(strReverse);

//     let strJoin = strReverse.join("");
//     return strJoin;
//   } else {
//     let strReverse = str.split("").reverse();

//     console.log(strReverse);

//     let strJoin = strReverse.join("");
//     return strJoin;
//   }
// }

// // console.log(solve("codewars")); //"srawedoc");
// // console.log(solve("your code")); //"edoc ruoy");
// // console.log(solve("your code rocks")); //"skco redo cruoy");
// console.log(solve("i love codewars")); //"s rawe docevoli"

// function numberToString(num) {
//   return num + "";
// }

// console.log(numberToString(67)); //'67'

// function removeChar(str) {
//   let strToArr = str.split("");
//   strToArr.pop();
//   strToArr.shift();
//   return strToArr.join("");
// }

// console.log(removeChar("eloquent")); // 'loquen'
// console.log(removeChar("country")); // 'ountr'
// removeChar("person"); // 'erso'
// removeChar("place"); // 'lac'
// removeChar("ooopsss"); // 'oopss'

// function squareSum(numbers) {
//   let newArr = [];
//   numbers.forEach((num) => {
//     let newNum = Math.pow(num, 2);
//     newArr.push(newNum);
//   });
//   const sumOfNumbers = newArr.reduce((acc, number) => acc + number, 0);
//   return sumOfNumbers;
// }

// console.log(squareSum([1, 2])); // 5);
// console.log(squareSum([0, 3, 4, 5])); // 50);
// console.log(squareSum([])); // 0);

// function repeatStr(n, s) {
//   let count = 0;
//   let newArr = [];
//   while (count < n) {
//     ++count;
//     // console.log(count);
//     newArr.push(s);
//   }

//   return newArr.join("");
// }

// console.log(repeatStr(3, "*")); // "***"
// console.log(repeatStr(5, "#")); // "#####"
// console.log(repeatStr(2, "ha ")); // "ha ha "

// let summation = function (num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// console.log(summation(1)); //  1
// console.log(summation(2)); //  3
// console.log(summation(8)); // 36

// function getCount(str) {
//   let newArr = str.split();
//   let vowelWord = [];
//   newArr.forEach((element) => {
//     console.log(element);
//     for (let j = 0; j < element.length; j++) {
//       console.log(element[j]);
//       switch (element[j]) {
//         case "a":
//           vowelWord.push(element[j]);
//           break;
//         case "e":
//           vowelWord.push(element[j]);
//           break;
//         case "i":
//           vowelWord.push(element[j]);
//           break;
//         case "o":
//           vowelWord.push(element[j]);
//           break;
//         case "u":
//           vowelWord.push(element[j]);
//           break;
//       }
//     }
//   });

//   console.log(vowelWord);
//   return vowelWord.length;
// }
// /**We will consider a, e, i, o, u as vowels for this Kata (but not y). */
// console.log(getCount("abracadabra")); // 5

// function findAverage(array) {
//   let sum = 0;
//   array.forEach((element) => {
//     sum += element / array.length;
//   });
//   if (array == []) {
//     return 0;
//   }
//   console.log(sum.toPrecision())
//   console.log(sum == sum.toPrecision(2))
//   return sum
// }

// console.log(findAverage([1, 1, 1])); // 1
// console.log(findAverage([1, 2, 3])); // 2
// console.log(findAverage([1, 2, 3, 4])); // 2.5
//Дрешать!

// function highAndLow(numbers) {
//   let arr = numbers.split(" ");
//   let maxValue = Math.max.apply(null, arr);
//   let minValue = Math.min.apply(null, arr);
//   let newArr = [];
//   //   console.log(arr);
//   newArr.push(maxValue);
//   newArr.push(minValue);
//   //   console.log(maxValue)
//   //   console.log(minValue)
//   return newArr.join(" ");
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
// console.log(highAndLow("1 2 3")); // "3 1"

function descendingOrder(n) {
  let arr = [n];
  let arrStr = arr.toString();
  let newArrstr = arrStr.split("");
  let arrNum = [];
  for (let i = 0; i < newArrstr.length; i++) {
    arrNum.push(+newArrstr[i]);
  }
  return arrNum.reverse();
}

console.log(descendingOrder(0)); // 0)
console.log(descendingOrder(1)); // 1)
console.log(descendingOrder(111)); // 111)
console.log(descendingOrder(15)); // 51)
console.log(descendingOrder(1021)); // 2110)
console.log(descendingOrder(123456789)); // 987654321)

/**
 Создать массив из чисел 
 Обратиться к каждому числу 
 Нужно конвертировать в srting, а после раскидать так, чтобы каждое число было элементом массива
 Сортировать по в обратном порядке 
 Если в обратном порядке не получилось наибольшее число, то поставить числа так, чтобы получилось наибольшее число 
 */
