"use strict";
var _a, _b, _c;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
// タイプガード
// typeof演算子
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) { return 0; };
let unionFunc;
//  in演算子
function describeProfile(nomadWorker) {
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
// instanceof演算子
function havePet(pet) {
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
const input = document.getElementById('input');
input.value = 'initial input value';
document.getElementById('input').value = 'initial input second_value';
const designer = {
    name: 'Quill',
    role: 'web'
};
const downloadedDate = {
    id: 1
};
console.log((_b = (_a = downloadedDate.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedDate.user) !== null && _c !== void 0 ? _c : 'no-user';
// let target = 'hello';
// let source: 'hello' = 'hello';
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
// let target = 100;
// let source = Color.RED;
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 5;
    }
}
let target = new AdvancedPerson;
let source = new AdvancedCar;
target = source;
// function advancedFn(...args: number[]) {
// }
// advancedFn(0, 3, 3, 3)
function advancedFn(...args) {
}
advancedFn('hi', 3, true);
const milk = 'milk';
let drink = milk;
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
