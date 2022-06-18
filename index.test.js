// it("17 и в Африке 17", () => {
//   expect(17).toEqual(17);
// });

// it("18 это вам не 17", () => {
//   expect(18).not.toEqual(17);
// });

// const getEvenNumbers = (numbers) => numbers.filter((el) => el % 2 == 0);

// it("should get only even numbers from array", () => {
//   const result = getEvenNumbers([1, 2, 3, 4]);
//   expect(result).toEqual([2, 4]);
// });

// import getSum, { getSquaredNumbers, getOddNumbers } from "./train.js";

// it("should get squared numbers", () => {
//   const result = getSquaredNumbers([1, 2, 3]);
//   expect(result).toEqual([1, 4, 9]);
// });

// it("should keep odd numbers only", () => {
//   const result = getOddNumbers([1, 2, 3, 4, 5]);
//   expect(result).toEqual([1, 3, 5]);
// });

// it("should get sum of numbers", () => {
//   const result = getSum(8, 4);
//   expect(result).toEqual(12);
// });
// it("17 равно 17", () => {
//   expect(17).toEqual(17);
// });

// it("18 не рано 17", () => {
//   expect(18).not.toEqual(17);
// });

// import { getEvenNumbers } from "./train.js";

// it("should get only even numbers", () => {
//   const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
//   expect(result).toEqual([2, 4, 6, 8]);
// });

// import getSum, { getSquaredArray, getOddNumbers } from "./train.js";

// it("should get only odd numbers", () => {
//   const result = getOddNumbers([1, 2, 3, 4, 5, 6]);
//   expect(result).toEqual([1, 3, 5]);
// });

// it("should get squared numbers", () => {
//   const result = getSquaredArray([1, 2, 3, 4, 5]);
//   expect(result).toEqual([1, 4, 9, 16, 25]);
// });

// it("should get sum of numbers", () => {
//   const result = getSum(5, 26);
//   expect(result).toEqual(31);
// });

// 

// import { counter1, counter2 } from "./train.js";

// it('should get number from counter', ()=> {
//   expect(counter1()).toEqual(0);
// })

// it('should get number from counter', ()=> {
//   expect(counter2()).toEqual(0);
// })

// import { user } from './train.js'

// it ('should get full name from object', ()=> {
//   const result = user.getFullName();
//   expect(result).toEqual('Ivan Dragni')
// })

// import { callbackPrompt } from './train.js';

// it('should', ()=> {
//   const result = callbackPrompt.showDeferredPrompt(1000);
//   expect(result).toEqual(1);
// })

// const user = {
//   name: "Ivan",
//   sayHi() {
//     return(`Hi, I'am ${this.name}!`);
//   },
// };

// import { defer } from './train.js';

// it ('should get deffered function', ()=> {
//   const result = defer(user.sayHi, 1000);
//   expect(result()).toEqual(`Hi, I'am Ivan!`)
// } )

