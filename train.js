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