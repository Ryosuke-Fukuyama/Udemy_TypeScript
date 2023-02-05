"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        if (message) {
            console.log(message);
        }
    }
}
const human = {
    name: 'Alice',
    age: 22,
    experience: 1,
    greeting(message) {
        console.log(message);
    }
};
const user = human;
const developer_user = human;
