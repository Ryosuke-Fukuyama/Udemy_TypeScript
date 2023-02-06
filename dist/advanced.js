"use strict";
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
    return '';
}
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
