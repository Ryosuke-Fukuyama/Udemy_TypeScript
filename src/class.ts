abstract class Person {
  static species = 'Homo sapiens'
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public readonly name: string, protected age: number) {
  }
  incrementAge(){
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}
// const quill = new Person('Quill', 38);
// quill.incrementAge();
// quill.greeting();

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
      console.log()
  }
  get subject(): string {
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
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
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