// let productName = "Телепорт бытовой VZHIH-101";
// let productPrice = 10000;
// console.log(`В наличии имеются: "${productName}"`);
// console.log(`Cтоимость товара ${productPrice} Q`);
// let discount = "10%";
// discount = productPrice * parseInt(discount) / 100;
// let sum = productPrice - discount;
// console.log(`Цена покупки составит ${sum} Q`);

// let cash = "52334224 Q";
// let productPrice = "6500 Q";

// let sum = parseInt(cash) / parseInt(productPrice);
// sum = Math.round(sum);

// let remainder = parseInt(cash) % parseInt(productPrice);
// console.log(`Мы можем закупить ${sum} едениц товара, после закупки на счету останется ${remainder} Q`);
// try {
//   value += 3;
//   console.log(value);
// } catch (e) {
//   console.log('name: ', e.name, 'message: ', e.message);
// }

// let b = 35,
// c = false,
// d = String(b),
// e = String(c);
// console.log(d, typeof(b));
// console.log(e, typeof(e));
// console.log(undefined === undefined);
// console.log(false !== 0);

// let productsInStock = 0;
// let productsInOrder = 1;

// if (productsInOrder > productsInStock) {
//   console.log("На складе нет такого количества товаров");
// } else if (productsInOrder == productsInStock) {
//   console.log("Вы забираете весь товар c нашего склада!");
// } else if (productsInOrder <= 0) {
//   console.log("Введите количество товара еще раз");
// } else {
//   console.log("Заказ оформлен");
// }

// let adress = prompt("Adress: ");
// switch (adress) {
//   case "Луна":
//     console.log("Луна: 150 Q");
//     break;
//   case "Крабовидная туманность":
//     console.log("Крабовидная туманность: 250 Q");
//     break;
//   case "Галактика Туманность Андромеды":
//     console.log("Галактика Туманность Андромеды: 550 Q");
//     break;
//   case "Туманность Ориона":
//     console.log("Туманность Ориона: 600 Q");
//     break;
//   case "Звезда смерти":
//     console.log("договорная цена");
//     break;

//   default:
//     console.log("В ваш квадрант доставка не осуществляется");
//     break;
// }

// let price = prompt("asdasd: ");
// price = parseInt(price);
// try {
//   if (typeof price !== "number" || isNaN(price)) {
//     throw "не является числом";
//   } else if (price < 0) {
//     throw "не правельная цена!";
//   } else {
//     console.log(`Цена товара введена корректно. ${price}`);
//   }
// } catch (err) {
//   console.log("Вы допустили ошибку: " + price + " " + err);
// }
// let planetOfRasidence = prompt('Планета проживания: ');
// let age = prompt('Возраст: ');

// if (planetOfRasidence == "Земля" && age < 18) {
//   console.log("Вы не достигли совершеннолетия");
// } else if (planetOfRasidence == "Земля" && age > 18) {
//   console.log("Приятных покупок");
// } else if (planetOfRasidence == "Юпитер" && age < 120) {
//   console.log("Сожалеем. Вернитесь на 120й день рождения!");
// } else if (planetOfRasidence == "Юпитер" && age > 120) {
//   console.log("Чистого неба и удачных покупок!");
// } else {
//   console.log("Спасибо что пользуетесь услугами нашего магазина!");
// }
// let number = 3;
// while (number) {
//   console.log('privet');
//   number--;
// }

// while (number < 10) {
//   var number = 0;
//   number++;
// }

// console.log(number);

// for (var someNumber = 0; someNumber < 30; someNumber++) {
//   if (someNumber % 3 !== 0) {
//     continue;
//   }
//   console.log(someNumber);
// }

// var names = [];
// names.push('Иван');
// console.log(names);
// var result = names.push('Мария', 'Василиса', 'Eмеля');
// console.log(names);
// console.log(names.length);
// console.log(result);

// let numbers = [];
// for (let i = 0; i < 5; i++) {
//   numbers.push(i);
// }
// console.log(numbers);
// let result = numbers;
// console.log(result);

// let names = ['Михаил', 'Драгни'];
// let surName = names.shift();
// console.log(surName);
// console.log(names);

/* push - добовляет в конец массива
  pop - отнимает из конца массива
  shift - отнимает из начала массива
  unshift - добавляет в начало массива*/

// let phraseWords = ['1', '2', '3', '4'];
// let someWords = phraseWords.slice(0, 2);
// console.log(someWords);
// console.log(phraseWords);

//slice - копирует
//splice - вырезает из массива и заменять

//заменяем
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// let rewriteNumbers = numbers.splice(4, 2, 'dragni', 'miha');
// console.log(rewriteNumbers); //[4, 5]
// console.log(numbers); // [0, 1, 2, 3, 'dragni', 'miha', 6, 7]

//добовляем
// var numbers = [0, 1, 2, 3, 4, 5];
// var renewNumders = numbers.splice(5, 0, 44, 16);
// console.log(numbers); // [0, 1, 2, 3, 4, 44, 16, 5]

// console.log("Список наименований.");

// var positions = [
//   "Отвертка ультрозвуковая WHO-D",
//   "Ховерборд Mattel 2016",
//   "Нейтрализатор FLASH black edition",
//   "Меч световой FORCE (синий луч)",
//   "Машина времени DeLorean",
//   "Репликатор домашний STAR-94",
//   "Лингвенсор 000-17",
//   "Целеуказатель электронный WAY-Y",
// ];

// positions.push(
//   "Экзоскелет Trooper-111",
//   "Нейроинтерфейс игровой SEGUN",
//   "Семена дерева Эйва"
// );

// let arrLength = positions.length;
// for (let i = 0; i < positions.length; i++) {
//   console.log(i + 1, positions[i]);
// }

// let first = positions.indexOf("Машина времени DeLorean");
// let oldPosition = positions.splice(first, 1);
// let newPosition = positions.unshift(oldPosition.join());
// console.log("Принять в первую очередь: ");
// for (let i = 0; i < 3; i++) {
//   console.log(i + 1, positions[i]);
// }

// let [a, b, c, d, e, ...over] = positions;
// console.log('В магазине: ');
// for (let i = 0; i < 5; i++) {
//   console.log(i + 1, );
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log("Остальные товары");
// console.log(over);

// function sum (a, b) {
//   let calc = a + b;
//   return calc;
// }

// let result = sum(1, 3);
// let result_2 = sum(6, result);
// console.log(result_2);

// let name = 'Ivan';
// function greeting(name) {
//   console.log(name);
// }

// greeting('Serghi')
// console.log(name);

// (function (name) {
//   console.log(`Приветствую ${name}!`);
// })('Ivan');

// function test(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// test(1, 2, function (value) {
//   console.log(value);
// });

// function test() {
//   console.log(...arguments);
// }

// test(1, 2, 3, 4, 5, 6, 7, 8, 9);

// let name = document.querySelector('header');
// console.dir(name);

//любое выражение всегда возвращает значение!
//site effects - выражения с побочными действиями
// console.log(10);
//ссылочный тип - это объект
/*объект - это набор свойств состаящая из названия(ключа) и его значения*/
//массив это объект
// const objectA = {
//   a: 10,
//   b: true
// }
// const copyOfA = objectA;
// copyOfA.a = 20;

// console.log(objectA);
// console.log(copyOfA);
// console.log(typeof(console.log(copyOfA)));

// const object1 = {
//   a: 11,
//   b: "abc",
//   c: true,
// };

// const object2 = object1;

// object2.c = "Ivan";

// object2.d = function name(a) {
//   console.log("Hello", a);
// };

// console.log(object1);
// object1.d((object2.b = "Vasya"));
// console.log(object1);

// function a() {
//   console.log("Hey there");
// }
// a();
// a = 10;
// console.log(a);

// const a = () => {
//   console.log("Hey there");
// };
// a();
//------------Объект------------
/* если объект содержит функцию как значение - тогда это называется метод!*/
/*метод - это свойство объекта, значение которого - функция*/
//объект - это тип значений
//объект это тип переменных
/* переменные которые будут содержать тип объект, рекомендуется объявлять через const*/

// const myCity = {
//   city: 'Comrat'
// }

// myCity.popular = 28000;
// console.log(myCity);

// myCity.country = 'Moldova';
// console.log(myCity);

// delete myCity.popular;
// console.log(myCity);

// const myCity = {
//   city: 'New York'
// }

// myCity['popular'] = true;
// console.log(myCity);

// const countryPropertyName = 'contry';

// myCity[countryPropertyName] = 'USA';
// console.log(myCity);

// const myCity = {
//   city: "New York",
//   info: {
//     isPopular: true,
//     country: "USA",
//   },
// };

// console.log(myCity.info.isPopular);
// console.log(myCity.info["isPopular"]);
// delete myCity.info.isPopular;
// console.log(myCity);
//сокращенная запись name: name => name,
//сокращенные свойства рекомендуется размещать в начале
// const name = "Bogdan";
// const postsQty = 23;
// const userProfile = {
//   name,
//   postsQty,
//   hasSignedAgreement: false,
// };
// console.log(userProfile);

//глобальный объект Window и globalThis - это одно и тоже

// const myCity = {
//   city: "New York",
//   cityGreeting() {
//     console.log("Greetings!!");
//   },
// };

// myCity.cityGreeting();

//json - формат обмена данными между компьтерами в интернете

// const object = {
//   userId: 1,
//   id: 1,
//   title: 'Test title',
//   status: {
//     completed:false,
//   },
// }
//конвертируем из js в Json
// const json = JSON.stringify(object);
// console.log(json);
//конвертируем из Json в js
// const js = JSON.parse(json);
// console.log(js);

//мутация объекта - это изменение свойств объекта, на которую ссылается переменная
//создаем копии объекта

//-----------вариант1------------

// const person = {
//   name: "Bob",
//   age: 25,
//   surName: {
//     bot: "Vasya",
//   },
// };

// const person2 = Object.assign({}, person);

// person2.age = 26;
// person2.surName = "Kolya";
// console.log(person.age);
// console.log(person2.age);
// console.log(person2.surName);

//-----------вариант2--------

// const person = {
//   name: "Bob",
//   age: 25
// }
//оператор три точки ... разделяет объект на свойства
// const person2 = {...person};
// person2.name = 'Alise'
// console.log(person2.name);
// console.log(person.name);

//---------вариант3----------

// const person = {
//   name: "Bob",
//   age: 25,
//   surName: {
//     bot: "Vasya",
//   },
// };

// const person2 = JSON.parse(JSON.stringify(person));
// person2.name = "Alise";
// person2.surName.bot = "Ivan";
// console.log(person2.name);
// console.log(person.name);
// console.log(person.surName.bot);
// console.log(person2.surName.bot);
// console.log(person);
// console.log(person2);

// function apple (a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

// console.dir(apple)

// const personOne = {
//   name: "Bob",
//   age: 21,
// };

// function increasePersonAge(person) {
//   const updatePerson = Object.assign({}, person);
//   updatePerson.age += 1;
//   return updatePerson;
// }

// const updatePersonOne = increasePersonAge(personOne);
// console.log(personOne.age);
// console.log(updatePersonOne.age);

//Колбэк функции - это те функции которые вызываются внутри других функций

// function printMyName() {
//   console.log('Mihail');
// }
// console.log('Start');
// setTimeout(printMyName, 2000);

// const a = 5;
// function myFn() {
//   function innerFn() {
//     console.log(a);
//   }
//   innerFn();
// }

// myFn();

//use strict - строгий режим
// запрещает использование необъявленных переменных
//логические оператор ! (не) всегда возвращает либо true либо false
//операторы && (и) || (или) возвращает значение одного из опарендов  и являются операторами короткого замыкания

// console.log("Bogdan" || "default value");
// let b = 10;
// b && console.log('Выполнено');

// оператор && если оба аргумента правильны то вернет значение последнего аргумента, если один из них не правильный то вернет значение  первого аргумента

// let a = 5,
//     b = 10;
// console.log(a && b);
// с = false;
// a && b && c && d //ищет первое ложное и возвращает его
//вернет результат выражения c

// a || b || c || d // ищет первое true значение и возвращет его результат

// let a, b, c, d = false;
// b = true;
// console.log(a || b || c || d);

//--------оператор ...

// const button = {
//   width: 200,
//   text: "Buy",
// };

// const redButton = {
//   ...button,
//   color: "red",
// };

// console.table(redButton);

// const defaultButton = {
//   height: 500,
//   width: 600,
//   color: "black",
//   border: 2,
// };

// const bigButton = {
//   ...defaultButton,
//   height: 800,
//   width: 700,
// };

// bigButton.height = 200;
// console.table(bigButton);
// console.table(defaultButton);

// const redButton = {
//   color: "red",
//   width: 200,
// };

// const blueButton = {
//   color: "blue",
//   height: 500,
// };

// const button = {
//   ...redButton,
//   ...blueButton,
//   color: "transparent",
// };

// console.table(button);
// const name = "Mihail";
// const city = "Comrat";

// console.log(`Меня зовут ${name}, Я живу в городе ${city}`);
//---функциональнные выражения, функции без имени, помжно присвоить переменной, можно использовать в качесте аттрибутов--
// setTimeout(function() {
//   console.log('Message');
// }, 1000);// выведет сообщение через 1 секунду

//--стрелочная функция - это выражение, всегда анонимные, вместо ключевого слова function есть =>

// const myFunction = (a, b) => {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// };

// console.log(myFunction(5, 3));
// setTimeout(() => {
//   console.log('Message');
// }, 1000);

// a => {тело} - это стрелочная функция с одни параметром
// const sum = (a, b) => a + b; //возвращает результат автоматически без return(если тело состоит из одного выражения)
// console.log(sum(5, 10));
// ----------------------1-----------------
// function multByFactor(value, multiplier = 1) {
//   return value * multiplier;
// }
// console.log(multByFactor(10, 2)); //20
// console.log(multByFactor(5)); //5
//----------------------2------------------------
// const multByFactor = function (value, multiplier = 1) {
//   return value * multiplier;
// }
//----------------------3----------------------------
// const multByFactor = (value, multiplier = 1) => value * multiplier;

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// })

// const firstPost = {
//   id: 1,
//   author: 'Bogdan'
// }

// console.table(newPost(firstPost))

// const newPost = (post, addedAt = Date()) => {
//   return { ...post, addedAt: addedAt };
// };

// const firstPost = {
//   id: 1,
//   author: "Bogdan",
// };
// console.table(newPost(firstPost));

//------------Ошибки----------


