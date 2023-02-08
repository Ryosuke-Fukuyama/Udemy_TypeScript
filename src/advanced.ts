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
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello: TmpFunc = function (x: string | number) { return 0};
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string) { return 0};
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunc: FuncA | FuncB;

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
  pet.speak();
  // switch (pet.kind) {
  //   case 'bird':
  //     pet.fly();
  // }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird);
havePet(new Dog);

const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
(<HTMLInputElement>document.getElementById('input')).value = 'initial input second_value';

interface Designer {
  name: string;
  // インデックスシグネチャ
  [index: string]: string;
}
const designer: Designer = {
  name: 'Quill',
  role: 'web'
}
// console.log(designer.fafa);

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedDate: DownloadedData = {
  id: 1
}
console.log(downloadedDate.user?.name?.first);
const userData = downloadedDate.user ?? 'no-user';
type id = DownloadedData["id"];
// let target = 'hello';
// let source: 'hello' = 'hello';
enum Color {
  RED,
  BLUE
}
// let target = 100;
// let source = Color.RED;
class AdvancedPerson {
  name: string = 'Peter';
  age: number = 35;
}
class AdvancedCar {
  name: string = 'Prius';
  age: number = 5;
}
let target = new AdvancedPerson;
let source = new AdvancedCar;
target = source;

// function advancedFn(...args: number[]) {
// }
// advancedFn(0, 3, 3, 3)
function advancedFn(...args: readonly  [string, number, boolean?]) {

}
advancedFn('hi', 3, true)

const milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
const peter = {
  name:'Peter',
  age: 38
} as const;
type PeterType = typeof peter;