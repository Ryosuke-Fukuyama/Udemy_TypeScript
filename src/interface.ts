// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  readonly name: string;
  nickName?: string;
}
interface Human extends Nameable {
  age: number;
  greeting: (message: string) => void;
}
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {
  }
  greeting(message?: string) {
    if (message) {
      console.log(message);
    }
  }
}

const human: Developer = {
  name: 'Alice',
  age: 22,
  experience: 1,
  greeting(message: string) {
    console.log(message);
  }
}
const user: Human = human;
const developer_user: Developer = human;