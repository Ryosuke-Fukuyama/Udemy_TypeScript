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
}

const fruits = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDEE,
  VENTI
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
let banana;
banana = anything;

let unionType: number | string = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
let unionTypes: (number | string)[] = [21, 'hello']

const apple: 'apple'= 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth = {
  color: 'white',
  size: clothSize
}

type ClothSize = 'small' | 'medium' | 'large';
const newCloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello(): void {
  console.log('hello')
}
let tmp: undefined;
let tmpNull: null;

const anotherAdd: (num1: number, num2: number) => number = function (num1, num2) {
  return num1 + num2
}
// const anotherAdd = function (num1: number, num2: number): number {
//   return num1 + num2
// }

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
})

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput
}

function error(message: string): never {
  throw new Error(message);
}