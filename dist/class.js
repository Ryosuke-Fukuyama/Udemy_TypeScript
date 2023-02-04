"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
// const quill = new Person('Quill', 38);
// quill.incrementAge();
// quill.greeting();
class Teacher extends Person {
    explainJob() {
        console.log();
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Bob', 27, 'history');
        return Teacher.instance;
    }
}
// const teacher = new Teacher('John', 49, 'Math');
// console.log(teacher.subject);
// console.log(Person.species)
// console.log(Person.isAdult(18))
const teacher = Teacher.getInstance();
// teacher.greeting();
console.log(teacher);
