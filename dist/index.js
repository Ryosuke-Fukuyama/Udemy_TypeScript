"use strict";
// let hello: string = 'hello';
// console.log(hello);
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: 'Jack',
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDEE"] = 2] = "GRANDEE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
let banana;
banana = anything;
let unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize
};
const newCloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
let tmp;
let tmpNull;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// const anotherAdd = function (num1: number, num2: number): number {
//   return num1 + num2
// }
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
