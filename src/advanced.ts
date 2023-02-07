type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;
// オーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
// タイプガード
// typeof演算子
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase('hello');

type NomadWorker = Engineer | Blogger;
//  in演算子
function describeProfile(nomadWorker: NomadWorker) {
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}

class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow');
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
// instanceof演算子
function havePet(pet: Pet) {
  switch (pet.kind) {
    case 'dog':
      pet.speak();
  }

  if (pet instanceof Bird) {
    pet.speak();
    pet.fly();
  }
}
// havePet(new Bird);
havePet(new Dog);

const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
(<HTMLInputElement>document.getElementById('input')).value = 'initial input value';

interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: 'Quill',
  role: 'web'
}
// console.log(designer.fafa);