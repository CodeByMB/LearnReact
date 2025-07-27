// Functions

// Normal function
function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(5, 10));

// Arrow function
const getRectangleArea1 = (width, height) => {
  return width * height;
};

console.log(getRectangleArea1(5, 10));

// shorter for 1 line return (returns automatically to the variable.)
const getRectangleArea2 = (width, height) => width * height;

console.log(getRectangleArea2(5, 10));

const sayHello = () => console.log(`Hello!`);
sayHello();

// // callback
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(double);

// callback in arrow function
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);

console.log(double);

// Important note: A arrow function can not be called before the initialization.
// A normal function can be called before.

const person = {
  name: "Maikel",
  sayHelloRegular: function () {
    console.log("Regular: ", this.name);
  },
  sayHelloArrow: () => console.log("Arrow: ", this.name), // This return the browser window object and not the person object, so will return undifined in node and window object in the browser.
};

person.sayHelloRegular();
person.sayHelloArrow();

// Template Literals
const name = "Maikel";
const greeting = `Hello, my name is ${name}`;

console.log(greeting);

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note = {
  title: "Discuss project",
  timestamp: Date.now(),
};

console.log(`Last Edited: ${formatDate(note.timestamp)}`);

// Ternary & Short Circuit Rendering

// Old fashion
const number = 5;
let message;

if (number % 2 === 0) {
  message = `Even Number`;
} else {
  message = `Odd Number`;
}

// Ternary
const number2 = 5;
const message2 = number2 % 2 === 0 ? "Even Number" : "Odd Number";

console.log(`The number ${number2} is a ${message2}`);

const note2 = {
  title: "Meeting notes",
  content: "Discuss project roadmap",
  timestamp: Date.now(),
  isPinned: true,
};

const noteText = `
  Title: ${note2.title}
  Status: ${note2.isPinned ? "Pinned" : "Regular Note"}
  Last Edited: ${new Date(note2.timestamp).toLocaleString()}
`;

console.log(noteText);
