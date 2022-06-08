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
// const fnWithError = () => {
//   throw new Error("Some error");
// };
// fnWithError();
// console.log("Continue...");

// try {
//   Выполнение блока кода
// } catch (error) {
//   Этот блок выполняется в случае возникновения ошибок в блоке try
// }

// const fnWithError = () => {
//   throw new Error("Some error");
// };
// try {
//   fnWithError();
// } catch (error) {
//   console.error(error)
//   console.log(error.message);
// }
// console.log("Continue...");

//Выражения могут быть использованы как аргументы в вызовах функций, в отличии от инструкций
//ВЫРАЖЕНИЯ ВСЕГДА ВОЗВРАЩАЮТ ЗНАЧЕНИЯ

//Способ проверки инструкции и выражения(способ отличить), необходимо передать в функцию в качестве аргументов то что хотите проверить...
// function myFn(a) {
//   console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(2 + 3)//5
// myFn(b)//true
// myFn(c = c + 1)//11
// myFn(c = c + 1;)// error нельзя передать инструкцию
// myFn(let d)//error нельзя передать инструкцию

//------------------Массивы----------------

// const myArray = [1, 2, 3];
// console.log(myArray);

// const myArray2 = new Array(1, 2, 3);
// console.log(myArray2);

// const myObj = {
//   0: 1,
//   1: 2,
// }
// console.log(myObj[0]);// 1// если свойство числовое, то обращение к нему через точку выбросит ошибку
// const myArray = [1, 2, 3, 4];
// console.log(myArray);
// console.log(myArray.length);

// myArray[2] = 'abc';
// console.log(myArray);
// console.log(myArray[2]);

// myArray[4] = true;
// console.log(myArray);
// console.log(myArray.length);

// const myArray = [1, 2, 3];
// myArray.push(4);//добовляет элемент в конец массива
// console.log(myArray);
// myArray.push(true);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// const removedElement = myArray.pop();//удаляет элемент с конца массива и возвращает значение
// console.log(myArray);
// console.log(removedElement);
// myArray.unshift(true);//добавляет элемент в начало массива
// console.log(myArray);
// myArray.shift();//удаляет первый элемент массива и возвращает значение(удаленый элемент)
// console.log(myArray);
//эти методы не создают новый массив они мутируют(изменяют) оригинал, так как массив это объект в переменной хранится ссылка на массив а не сам массив

//---------------forEach--------------
//перебирает все элементы массива и выполняет определенные действия с этими элементами
// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.forEach(el => console.log(el * 2))//2 4 6

// console.log(myArray);//метод forEach не меняет оригинальный массив
//forEach - всегда возвращает underfind

//--------------Map------------------------
//перебирает массив как и forEach, но результат выдает абсолютно новый массив сформированный из результат cakkback функции
// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map(el => el * 3)///[3, 6, 9]

// console.log(newArray);//[3, 6, 9]
// console.log(myArray);//[1, 2, 3]

// const myArray = [1, 2, 3];
// console.log(myArray);

// const newArray = myArray.map((el) => {
//   return el * 3;
// });
// console.log(newArray);
// в функциональных выражениях нельзя неявно возвращать результат как в стрелочных функциях, то есть нельзя сокращать фигурные скобки в теле функции

//--------------Деструктуризация------------

// const userProfile = {
//   name: "Bogdan",
//   commentsQty: 23,
//   hasSignedAgreement: false,
// };

// const { name, commentsQty } = userProfile;//создает переменные на основании свойств и значений объекта userProfile
// const { hasSignedAgreement } = userProfile;

// console.log(name);//Bogdan
// console.log(commentsQty);//23
// console.log(hasSignedAgreement);//false

//-----Пример деструктуризации объекта------

// const myObj = {
//   name: 'Vasya',
//   surName: 'Ivanov',
//   age: 23,
// }
// const { name, age, ...over } = myObj//создали переменные на основании свойств объекта, неиспользованные свойства передали новому объекту over
// console.log(name);//Vasya
// console.log(age);//23
// console.log(over);//{surName: 'Ivanov'}
// const { surName: familia } = over;//создали новую переменную из объекта over, а так же поменяли название переменной
// console.log(familia);//Ivanov

//----Пример деструктуризации массива----

// const fruits = ['Apple', 'Banana'];
// const [fruitOne, fruitTwo] = fruits;
// console.log(fruitOne);//Apple
// console.log(fruitTwo);//Banana

// const myArray = [1, 2, 3, 4];

// const [ name, surName, ...over] = myArray;//создали переменные на основании свойсв массива, остальные свойства присвоили новому массиву over
// console.log(name);//1
// console.log(surName);//2
// console.log(over);//[3,4]

// const [ age, height ] = over; //создали переменные на основании массива over
// console.log(age);//3
// console.log(height);//4

//-----Пример деструктуризации фунакции----

// const myObj = {
//   name: "Bogdan",
//   age: 23,
//   married: true,
// };//создали объект

// const userInfo = ({ name, age }) => {/*создали переменную к кторой присвоили стрелочную функцию, где значения оттребутов функции были деструктуризированы из объекта myObj, соответственно значения аттребутов стрелочной функции будет равной переменным созданным благодаря деструктуризации объекта*/
//   if (!age) {
//     console.log(`user ${name} -`);
//   }

//   console.log(`User ${name} +`);
// };

// userInfo(myObj);//User Bogdan +

//это необходимо когда функции получают объект в качестве параметров(аттрибутов)

// const person = {
//   age: 20,
// };

// if (!person.name) {
//   console.log("Имя не указано");
// }

// const age = 11;
// if (age > 18) {
//   console.log('Is adult');
// } else if (age >= 12) {
//   console.log('Is teenager');
// } else {
//   console.log('Is child');
// }

// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "One of the arguments is not a number";
//   }
//   if (a <= 0 || b <= 0) {
//     return "Number are not positive";
//   }
//   return a + b;
// };
// console.log(sumPositiveNumbers(5, 6));

// const month = 2;
// switch (month) {
//   case 12:
//     console.log("Декабрь");
//     break;
//   case 1:
//     console.log("Январь");
//     break;
//   case 2:
//     console.log("Февраль");
//     break;
//   default:
//     console.log("Это не зимний месяц");
//     break;
// }
// если необходимо выполнить задачу исходя из значений той или иной переменной, то лучше использовать инструкцию switch

//-------------Тернарные операторы--------------

// тернарный оператор это выражение, можно использовать чтоб присвоить значение переменной
//Условие ? Выражение1 : Выражение2
//внутри может быть только выражение, нельзя вставлять другую инструкцию типа if или while
// const value = 11;
// value ? console.log("Условие истино") : console.log("Условие ложно"); //условие истино

// const value1 = 11;
// const value2 = 25;

// value1 && value2 ? myFunction1(value1, value2) : myFunction2();

// let value = 11;
// console.log(value >= 0 ? value : -value); //11
// value = -5;
// const res = value >= 0 ? value : -value;
// console.log(res);

//-------------Циклы-------------

// const myArray = ['first', 'second', 'third'];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }// не рекомендуется исползовать с массивами

// const myArray = ["first", "second", "third"];
// myArray.forEach((element, index) => {
//   console.log(element, index);
// }); рекомендуется использовать с массивами

// for (key in Object) {
// key это название свойства объекта
//действия с каждым свойством объекта
//значение свойства - Object[key]
// }

// const myObject = {
//   x: 10,
//   y: true,
//   z: "abc",
// };

// for (const key in myObject) {
//   console.log(key, myObject[key]);
// }

// const myObject = {
//   x: 10,
//   y: true,
//   z: "abc",
// };

// Object.keys(myObject).forEach((key) => {
//получение всех ключей объекта, формирует массив
//   console.log(key, myObject[key]);
// });

// Object.values(myObject).forEach((value) => {
//   console.log(value); // получает все значения свойств определенного объекта, формирует массив(конвертирует объект в массив)
// });

//благодаря методам keys и values можно трансформировать объект в массив

// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//   console.log(myArray[key]);
// }

// for (Element of Iterable) {
//Действия с определенным элементом
// }

// const myString = "Hey";

// for (const letter of myString) {
//   console.log(letter); // H e y выведет значения каждой буквы с новой строки
// }

// const myArray = [true, 10, 'abc', null];

// for (const element of myArray) {
//   console.log(element); // выведет true, 10, abc, null с новой строки
// }

//myArray.forEach(element => {
// console.log(element); аналог функции for of,
// })

// for of  нельзя использовать для оюъектов

//---------------модули--------------

//export -- вывод
//import -- ввод

// const myName = () => {
//   console.log("Mihail");
// };

// export default myName;
// import printMyName from "./adsdad.js";
// printMyName() //Mihail

// const sum = (a, b) => {
//   return a + b;
// };
// export default sum;

// const one = 1;
// const two = 'two'

// export {
//   one,
//   two
// }

//------------классы-------------

//классы позволяют создавать протатипы для объектов

// class Comment {
//   constructor(text) {// вызывается только тогда когда мы создаем новый экземпляр класса
//     this.text = text
//     this.votesQty = 0
//   }
//   upvote() {//будут наследоваться каждым экземпляром
//     this.votesQty += 1
//   }
// }

// this - это специальная переменная которая указывает на экземпляр класса

// const firstComment = new Comment('First comment'); //вызывается функция constructor, вернет новый объект, который будет наследовать все методы класса комментарий(Comment)
// console.log(firstComment);

// console.log(firstComment instanceof Comment);// true, проверка принадлежности
// console.log(firstComment instanceof Object);// true

//firstComment.upvote()
// console.log(firstComment.votesQty);//1
//firstComment.upvote()
// console.log(firstComment.votesQty);//2

//firstComment.hasOwnProperty('text')// проверяет есть ли у этого экземпляра собственное свойство text //true
//firstComment.hasOwnProperty('votesQty') //true
//firstComment.hasOwnProperty('upvote') //false
//firstComment.hasOwnProperty('hasOwnProperty')//false

// const firstComment = new Comment('First comment');
// const secondComment = new Comment('Second comment');
// const thirdComment = new Comment('Third comment');

// firstComment.upvote();
// firstComment.upvote();
// secondComment.upvote();

// console.log(firstComment.votesQty);
// console.log(secondComment.votesQty);
// console.log(thirdComment.votesQty);

// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }
//   upvote() {
//     this.votesQty += 1
//   }
//   static mergeComments(first, second) {//static свойства не наследуются экземплярами классов, но они доступны как методы данного класса
//     return `${first} ${second}`
//   }
// }

// Comment.mergeComments('First comment.', 'Second comment')

//статические методы не наследуются экземлярами класса, его можно вызвать только через сам класс.

//расширение классов
// class NumbersArray extends Array {
//   sum() {
//     return this.reduce((el, acc) => acc += el, 0)
//   }
// }

// const myArray = new NumbersArray(2, 5, 7)
// console.log(myArray);
// myArray.sum();

//--------------------------------------------------------

// let age = 26;
// console.log(age.toString());
// console.log(String(age));
// console.log(typeof age);

//функция рандомных чисел в диапазоне
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42));

//--------работа со строками---
// const name = 'Владилен';
// console.log(name.length);//8
// console.log(name.toUpperCase());//ВЛАДИЛЕН
// console.log(name.toLowerCase());//владилен
// console.log(name.charAt(2));//а
// console.log(name.indexOf("а"));//2
// console.log(name.startsWith('!'));//false
// console.log(name.endsWith('ен'));//true
// console.log(name.repeat(3));//ВладиленВладиленВладилен
// console.log(name.trim()); //очищает пробелы
// console.log(name.trimLeft()); //очищает пробелы c лева
// console.log(name.trimRight()); //очищает пробелы с права

// function logPerson(s, name, age) {
//   console.log(s, name, age);
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Владилен'
// const personAge = 26

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
// console.log(output);

// const myArr = ['aada', 'asda', 'adsa', 'adasd', 'vasya', 'petya'];
// let counter = 0;
// setInterval(function () {
//   if (counter >= 0 && counter <= 9) {
//     console.log(counter + 1, myArr[counter++]);
//   }
// }, 1000);

// function sum(source) {
//   let res = 0;
//   for(let i = 0; i < source.length; i++) {
//     res += source[i];
//   }
//   return res;
// }

// console.log(sum([1,2,3]));

// const n = 150;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum); //11325

// const n = 150;
// let sum = 0;
// let i = n;

// while (i > 0) {
//   sum += i;
//   i--;
// }

// console.log('Result: ' + sum);//11325

// const m = 5;
// const n = 21;
// let result = 1;

// for (let i = m; i <= n; i++) {
//   if (i % 2 === 1) {
//     result *= i;
//   }
// }
// console.log(result); //4583103525

// const m = 5;
// const n = 21;
// let result = 1;

// let i = m;

// do {
//   if (i % 2 === 1) {
//     result *= i;
//   }
//   i++;
// } while (i <= n);

// console.log('Result: ' + result); //4583103525

// for (let i = 1; i <= 5; i++) {
//   console.log(`\n==> ${i} <==\n\n`);
//   for (let n = 1; n <= 10; n++) {
//     let result;
//     result = n * i;
//     console.log(`${i} x ${n} = ${result}`);
//   }
// }

// let sum = (a, b) => a + b;
// console.log(sum(2, 5));

// function sum1 (a, b) {
//   return a + b
// }
// console.log(sum1(3, 6));

// const sayHi = name => `Hi, ${name}!`;
// console.log(sayHi('Ivan'));

// function hi (name = 'User', anotherName) {
//   console.log(arguments[1]);
//   return `Hi, ${name}`
// }
// console.log(hi());

// const getEvenOdd = number => (number % 2 === 0)? `even`: `odd`;
// console.log(getEvenOdd(5));

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(3, 5));

// const sayHi = name => `Hi, ${name}`;
// console.log(sayHi('Ivan'));

// const getEvenOdd = function (number) {
//   return (number % 2 === 0)? 'Even': 'Odd';
// }
// console.log(getEvenOdd(6));

// const square = num =>  num * num;
// console.log(square(6));

// const numbers = [1, 2, 3, 4];
// const arr = new Array();

// console.log(`Element #1 ${numbers[1]}`);
// console.log(`Element last ${numbers[numbers.length - 1]}`);

// const numbers = [1, 2, 3, 4];
// function getArrayBoun(arr) {
//   if(!Array.isArray(arr)) {
//     return null;
//   }
//   return [arr.length, arr[0], arr[arr.length - 1]];
// }
// console.log(getArrayBoun(numbers));

// const numbers = [1, 2, 3, 4];
// let sumOfNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sumOfNumbers += numbers[i];
// }

// console.log(sumOfNumbers);
//-------вычисляет сумму чисел в массиве----
// const numbers = [1, 2, 3, 4];
// function sum(numbers) {
//   let sumOfNumbers = 0;

//  for(let num of numbers) {
//    sumOfNumbers += num; // проходится по всем элементам массива и присваивает значение премерменной num
//  }

//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
//   }
//   return sumOfNumbers;
// }

// const sumOfElements = sum(numbers);

// console.log("result: " + sumOfElements);
// const people = ['Tom', 'Ann', 'Bob'];
// people.push('Jack', 'John');//добавлем в конец
// people.unshift('Ivan')//добавляем в начало
// const deleteLastElem = people.pop();//удаляет и возвращет удаленный элемент
// const deleteFirstElem = people.shift();//удаляет и возвращет удаленный элемент
// console.log(people);

// function getSpecialNumbers(from, to) {
//   let specialNumbers = [];
//   for (let i = from; i <= to; i++) {
//     if(i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }
//   return specialNumbers;
// }
// const specialNumbers = getSpecialNumbers(10, 30);
// console.log(specialNumbers);

// const numbers = [11, 22, 33, 55, 66];
// const [a, b, ...rest] = numbers;
// console.log(a, b, [1, 2, 3, ...rest]);

// function swap(arr) {
//   const [start, ...rest] = arr;
//   return [...rest, start];
// }

// console.log(swap([1, 2, 3, 4]));
//--------------
//for in переберает ключи объекта (только для объекта)
//for of перебирает значения массива
//----------------
// const myArr = [1, 2, 3, 4];
// function getArrayBoun(arr) {
//   if(!Array.isArray(arr)) {
//     return null;
//   }
//   return [arr.length, arr[0], arr[arr.length-1]];
// }
// console.log(getArrayBoun(myArr));

// const myArr = [1, 2, 3, 4, 5];
// function getSum(arrNum) {
//   let result = 0;
//   if(!Array.isArray(arrNum)) {
//     return null;
//   }
//   for (let i of arrNum) {
//     result += i;
//   }
//   return result;
// }
// console.log(getSum(myArr));

// function getSpecialNumbers(from, to) {
//   if (!(Number.isInteger(from) && Number.isInteger(to))) {
//     return `Error`;
//   }
//   const result = [];
//   for (let i = from; i <= to; i++) {
//     if (i % 3 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getSpecialNumbers(20, 50));
// const myArr = [1, 2, 3, 4, 5];
// const swap = arr => {
//   const [first, ...rest] = arr;
//   return [...rest, first]
// }
// console.log(swap(myArr));
// console.log(myArr);

// const getSpecialNumbers = (numbers) => numbers.filter((numArr) => numArr % 3 === 0); // -- 4 -- сокращенный вариант
// let specialNumbers = [];
//обычный for -- 1 --
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 3 === 0) {
//     specialNumbers.push(numbers[i]);
//   }
// }
// forEach -- 2 --
// numbers.forEach(numArr => {
//   if(numArr % 3 === 0){
//     specialNumbers.push(numArr);
//   }
// });
//filter -- 3 --
// const result = numbers.filter((numArr) => numArr % 3 === 0);
//создает новый массив,наполняет его элем которые возвращают из колбэка тру
// return numArr % 3 === 0 ? true: false;
// return numbers.filter((numArr) => numArr % 3 === 0);
// };

// const getSpecialNumbers = arr => arr.filter(numArr => numArr % 3 === 0);
// const myArr = [1, 2, 3, 4, 5, 6];

//   function getSpecialNumbers(arr) {
//     const specialNumbers = [];
//     arr.forEach(function(numArr) {
//       if(numArr % 3 === 0) {
//         specialNumbers.push(numArr);
//       }
//     });
//     return specialNumbers
//   }

// console.log(getSpecialNumbers(myArr));

// const getSpecialNumbers = arr => arr.filter(numArr => numArr % 3 === 0);
// console.log(getSpecialNumbers(myArr));
// const myArr = [1, 2, 3, 4, 5, 6];

// const getSpecialNumbers = arr => arr.filter(numArr => numArr % 3 === 0);
// console.log(getSpecialNumbers(myArr));
// const sortArray = (numbersArr) => numbersArr.slice().sort((a, b) => a - b);
// const copy = [...numbersArr]; //копирование массива
// const copy = numbersArr.slice(); //копирует и возвращет, если не передать аргум то копирует все
// return numbersArr.slice().sort((a, b) => a - b);
// }
// console.log(sortArray(arr));
// console.log(arr);
// const arr = [2, 4, 30, 1, 5, 21, 18];

// const flatArray = (arr) => {};

// [1, 2, 3, 4, 5].reduce((acc, num) => {
//   return acc + num;
// }, 0)

// let a = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
// console.log(sum);
//prev - вычисляемое значение
//prev= a[0]!!!

// let b = a.reduce((prev, item, index) =>{
//   return prev + item;
// }, 0)

// console.log(b);

// let a = [3, 1, 2, 5, 1, 2, 4];
// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }
// console.log(max);

// let c = a.reduce((prev, item) => {
//   if (prev < item) {
//     return item;
//   }
//   return prev;
// })

// const c = a.reduce((prev, item) => prev < item ? item: prev);

// let max = a[0];
// let index = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//     index = i;
//   }
// }

// let d = a.reduce(
//   (prev, item, index) => {
//     if (item > prev[1]) {
//       return [index, item];
//     }
//     return prev;
//   },
//   [0, a[0]]
// );

// console.log(d);
// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);

// const data = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [5, 6, 7],
// ];
// const myArr = [1, [2, 3, 4], 5, [6]];

// const flatArr = (arr) => arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
// console.log(flatArr(myArr));

// let arr = [1,2,3];
// arr.push(4); //мутирует добавляет елем
// const newArr = arr.concat(4,5,6,7,8);//не мутирует создает новый массив и добовляет елем
// console.log(arr);//[1,2,3]
// console.log(newArr);//[1,2,3,4,5,6,7,8]
// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// const getMessagesForPassesStudents = (allStudents, failedStudents) =>
//   allStudents
//     .filter((name) => !failedStudents.includes(name))
//     .map((name) => `Good job, ${name}`);

// console.log(getMessagesForPassesStudents(allStudents, failedStudents));
// const myArray = [20, 16, 15, 12, 21, 31, 28];

// function getSpecialNumbers(arr) {
//   const result = [];
//   arr.forEach(function (element) {
//     if(element % 3 === 0) {
//       result.push(element);
//     }
//   })
//   return result;
// }

// function getSpecialNumbers(arr) {
//   let result = arr.reduce((acc, elem) => {
//     if (elem % 3 === 0) {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
//   return result;
// }

// const getSpecialNumbers = (arr) => arr.reduce((acc, elem) => {
//   if (elem % 3 === 0) {
//     acc.push(elem);
//   }
//   return acc
// }, []);

// const getSpecialNumbers = arr =>  arr.filter(elem => elem % 3 === 0)

// console.log(getSpecialNumbers(myArray));

// const myArray = [20, 16, [15], 12, [21], 31, 28];

// function sortDesc(arr) {
//   const newArr = arr.slice();
//   return newArr.sort((a, b) => b - a);
// }

// const sortDesc = (arr) => arr.slice().sort((a, b) => b - a);

// const flatArray = (arr) => arr.reduce((acc, elem) => acc.concat(elem), []);
// const flatArray = arr => arr.flat();

// console.log(flatArray(myArray));
// const allStudets = ["Ann", "Bob", "John", "Ivan", "Kate"];
// const failedStudents = ["Ivan", "Kate"];

// const getMessagesForBestStudents = (allStudets, failedStudents) =>
//   allStudets
//     .filter((name) => !failedStudents.includes(name))
//     .map((name) => "Good job! " + name);

// console.log(getMessagesForBestStudents(allStudets, failedStudents));

//forEach
// myArr.forEach(name => {
//   console.log((name));
// })

//filter
// const userLess30 = myArr.filter(number => number > 5);
// console.log(userLess30);

//reduce
//создаем из массива объект
// const userObj = arr.reduce((acc, user) => {
//   acc[user._id] = user;
//   return acc
// }, {});

// const myArr = [1, 2, 3, 4, 5, [6], 7, 8, 9];
// const getSpecialNumbers = arr => arr.filter(number => number % 3 === 0);
// const sortDesc = arr => arr.slice().sort((a, b) => b - a)
// const flatArray = (arr) => arr.reduce((acc, elem) => acc.concat(elem), []);

// const all = ['a', 'b', 'c', 'd'];
// const failed = ["b", "d"];

// const getMessagesForBestStudents = (all, failed) => all.filter((elem) => !failed.includes(elem)).map((elem) => `Good job ${elem}!`)

// console.log(getMessagesForBestStudents(all, failed));

// const transformToObject = (arr) => {
//   let obj = {};
//   arr.forEach((el) => {
//     obj[el] = el;
//   });
//   return obj;
// };
// const myArr = [1, "text"];
// console.log(transformToObject(myArr));

// const user = {
//   name: "Tom",
//   age: 17,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// const concatProps = (obj) => {
//   const arr = [];
//   for (let i in obj) {
//     arr.push(obj[i]);
//   }
//   return arr;
// };
// console.log(concatProps(user));

// const concatProps = (obj) => {
//   let arr = [];
//   for (let i in obj) {
//     arr = arr.concat(obj[i])
//   }
//   return arr;
// };
// console.log(concatProps(user));

// const myArr = ['a', 17.1, 'John Doe'];

// const transformToObject = arr => {
//   const obj = {};
//   arr.forEach(el => obj[el] = el)
//   return obj;
// }
// console.log(transformToObject(myArr));
// const myObj = {
//   name: "John Doe",
//   age: 17,
//   interest: "football",
// };

// const myArr = [1,2,3,4,5];

// const concatProps = (obj, arr) => {
//   const newArr = arr.slice();
//   for (let key in obj){
//     newArr.push(obj[key])
//   }
//   return newArr
// }

// const concatProps = (obj, arr) => {
//   for (let key in obj){
//     arr = arr.concat(obj[key]);
//   }
//   return arr
// }

// console.log(concatProps(myObj, myArr));
// console.log(myArr);

// const transformToObject = arr => {
// const obj  = {};

// arr.forEach(el => obj[el] = el);

// return obj;

// return arr.reduce((acc, el) => {
//   acc[el] = el;
//   return acc;
// }, {});
// }

// const transformToObject = arr => arr.reduce((acc, el) => {
//   acc[el] = el;
//   return acc;
// }, {})

// const user = {
//   name: "Tom",
//   age: 17,
// };

// const transformToArray = obj => {
//   let newArr = [];
//   for(let k in obj) {
//     newArr = newArr.concat(obj[k]);
//   }
//   return newArr;
// }

// console.log(transformToArray(user));

// console.log(transformToObject(myArr));
// const myArr = [1,2,3,4,5,6];

// const transformToObject = arr => {
//   return arr.reduce((acc, el) => {
//     acc[el] = el;
//     return acc
//   }, {})
// }

// console.log(transformToObject(myArr));

// const transformToArray = obj => {
//   let newArray = [];
//   for(let key in obj){
//     newArray = newArray.concat(obj[key]);
//   }

//   return newArray;
// }

// console.log(transformToArray(user));

// const user = {
//   Tom: 17,
//   "John Doe": 19,
//   Bob: 18,
// };

// const getAdults = (usersObj) => {
//   const usersArray = Object.entries(usersObj);
//---------{'Tom: 17', 'John Doe': 19, 'Bob': 18} => [['Tom, 17'], ['John Doe', 19], ['Bob', 18] ]------

//   const filteredUsersArray = usersArray.filter((user) => user[1] >= 18);
//--------[['Tom, 17'], ['John Doe', 19], ['Bob', 18] ] => [['John Doe', 19], ['Bob', 18]]-----

//   const usersName = filteredUsersArray.map((user) => user[0]);
//------[['John Doe', 19], ['Bob', 18]] =>  ['John Doe', 'Bob']------
//   return usersName;
// };

// console.log(getAdults(user));

// const getAdults = usersObj => {
//   const usersArray = Object.entries(usersObj);
//   const filteredUsersArray = usersArray.filter(el => {
//     return el[1] >= 18;
//   })
//   const usersName = filteredUsersArray.map(el => {
//     return el[0];
//   })
//   return usersName;
// }

// console.log(getAdults(user));

// const getAdults = usersObj => Object.entries(usersObj).filter(el => el[1] >= 18).map(el => el[0]);
// const myArr = [1,2,3,4,5,6];

// const transformToArray = obj => {
//   let newArr = [];
//   for(let k in obj) {
//     newArr = newArr.concat(obj[k]);
//   }
//   return newArr;
// }

// const valuesFromObject = obj => Object.values(obj);
// console.log(valuesFromObject(user));//[17, 19, 18]
// const keysFromObject = obj => Object.keys(obj);
// console.log(valuesFromObject(user));//['Tom', 'John Doe', 'Bob']

// const user = {
//   name : 'Tom',
//   age: 17,
// };

//------1------копируем объект в новый объект (копирует на одном уровне)
// const newObj = Object.assign({}, user);
//функция еопирования объекта
// const copyObj = obj => Object.assign({}, obj);

//-----2------копируем объект (копирует на одном уровне)
// const player = {...user};

//-----3----- (копирует на одном уровне)
// const {name: myName = 'default', ...restProps} = user;
// console.log(myName);
// console.log(restProps);

// const player = {
//   game: 'football',
//   ...restProps,
// }

// console.log(player);

// const users = {
//   "John Doe": 19,
//   Tom: 17,
//   Bob: 18,
// };

// const getAdults = (usersObj) =>
//   Object.entries(usersObj)
//     .filter((el) => el[1] >= 18)
//     .map((el) => el[0]);

// console.log(getAdults(users));

// const copyObj = obj => Object.assign({}, obj);

// const copyObj = obj => ({ ...obj });

// const copyObj = obj => {
//   const { ...newObj} = obj
//   return newObj;
// }
// console.log(copyObj(users));
