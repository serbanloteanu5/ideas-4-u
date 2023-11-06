// Filename: ComplexScript.js
// Description: This is a complex script that showcases various advanced JavaScript concepts and techniques

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Custom class definition for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Async function to fetch data from a remote API using Promises
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Array of random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Generate a new array with even numbers only
const evenNumbers = filterEvenNumbers(randomNumbers);

// Object literals representing different animals
const animal1 = {
  type: 'Elephant',
  age: 12,
  sound: 'Trumpet',
  makeSound: function() {
    console.log(`${this.type} says ${this.sound}!`);
  }
};

const animal2 = {
  type: 'Lion',
  age: 7,
  sound: 'Roar',
  makeSound: function() {
    console.log(`${this.type} says ${this.sound}!`);
  }
};

// Function to play animal sounds
function playAnimalSounds(animals) {
  animals.forEach(animal => animal.makeSound());
}

// Regular expression to match email addresses
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate an email address
function validateEmail(email) {
  return emailRegex.test(email);
}

// Example usage of the above functions and objects
const john = new Person('John Doe', 25);
console.log(john.getDetails());
john.greet();

console.log(randomNumbers);
console.log(evenNumbers);

animal1.makeSound();
animal2.makeSound();

playAnimalSounds([animal1, animal2]);

console.log(validateEmail('test@example.com'));

// ... Continue the code with more advanced JavaScript concepts and functionality