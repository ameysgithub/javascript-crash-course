console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// var, let, and const
let ageL = 30;
ageL = 31;
const ageC = 30;
// ageC = 31;

console.log(ageL);
console.log(ageC);

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const varNull = null;
const varUndefined = undefined;

console.log(typeof rating);

// Concatenation
console.log('My name is ' + name + ' and I am '+ age);
//Template String
console.log(`My name is ${name} and I am ${age}`);

const helloMessage ='Hello World';

const labels = 'code, computers, it, developer'
console.log(helloMessage.length);
console.log(helloMessage.toUpperCase());
console.log(helloMessage.toLowerCase());
console.log(helloMessage.substring(0,5));
console.log(helloMessage.split(''));
console.log(labels.split(', '));

/**
 * multi line comments
 */

//Arrays - hold multiple values
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10, true]
console.log(numbers);
console.log(fruits);

console.log(fruits[1]);

fruits[3] = 'grapes'
console.log(fruits);

fruits.push('mangoes');

fruits.unshift('strawberries');

console.log(fruits)

console.log(Array.isArray(fruits));
console.log(Array.isArray('fruits'));

console.log(fruits.indexOf('oranges'));

// Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//Destructuring
const { firstName, lastName, address: { city } } = person;

console.log(firstName);

console.log(city);
person.email = 'john.doe@gmail.com';
console.log(person);

//Arrays of Objectss

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    }
]

console.log(todos)
console.log(todos[1].text)

//Convert to JSON for sending to server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// For loops
for (let i = 0; i < 10 ;i++) {
    console.log(i);
}

for (let i = 0; i <= 10 ;i++) {
    console.log(`For loop Number: ${i}`);
}

// while
let i = 0;
while(i < 10) {
    console.log(`While loop Number: ${i}`);
    i++;
}

// loop through arrays
for(let todo of todos) {
    console.log(todo.text);
}
for(let todo of todos) {
    console.log(todo.text);
}
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedMapText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompletedMapText);

const varX = 4;
const varY = 10;

if (varX > 5 ) {
    console.log('varX is greater than 5');
} else {
    console.log('varX is less than 5')
}

if (varX > 5 || varY > 10) {
    console.log('varX is 10');
}
if (varX > 5 && varY > 10) {
    console.log('varX is 10');
}

// ternary operator

const varZ = 10;
const colorVar = varZ > 10 ? 'red' : 'blue';

console.log(colorVar);

switch (colorVar) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

function addNums(num1 = 1 , num2 = 2) {
    console.log(num1+num2);
}

addNums(5,4);

const addNumbers = (num1 = 1 , num2 = 2) => num1 + num2;

console.log(addNumbers(5, 29));

// OOP
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
// Instantiate Object
const p1 = new Person('John', 'Doe', '04-03-1981');
const p2 = new Person('Mary', 'Smith', '04-03-1991');
console.log(p1)
console.log(p2)
console.log(p2.dob);
console.log(p2.dob.getFullYear());
console.log(p2.dob.getDay());

console.log(p1.getBirthYear());
console.log(p1.getFullName());

//aside date
// adding function to prototype

//Class

class Person {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
