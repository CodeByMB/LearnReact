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

const isLoggedIn = true;

function showWelcome() {
  return isLoggedIn ? "Welcome, User" : "";
}

console.log(showWelcome());

const notes = [
  { title: "Meeting Notes", content: "Discuss project roadmap" },
  { title: "Grocery List", content: "Buy milk, eggs, bread" },
  { title: "Meeting Notes", content: "Push day: Bench, Shoulder press" },
  { title: "Meeting Notes", content: "Pasta, salad, Tacos" },
];

const [firstNote, secondNote, ...otherNotes] = notes; // ...otherNotes is the rest operator.

console.log(firstNote);
console.log(secondNote.title);
console.log(otherNotes);

const note3 = {
  titles: "Meeting Notes",
  content: "Discuss project roadmap",
  isPinned: true,
};

const { titles } = note3;

console.log(titles);

const user = {
  name: "Maikel",
  address: { city: "Boston", state: "MA" },
  hobbies: ["Sports", "Movies", "Music"],
};

const {
  name,
  address: { city, state },
  hobbies: [firstHobby, ...otherHobbies],
} = user;
console.log(city, state);
console.log(firstHobby, otherHobbies);

Array Methods
const notes = [
  {
    title: "Meeting Notes",
    content: "Discuss project roadmap",
    isPinned: true,
  },
  { title: "Grocery List", content: "Buy milk, eggs, bread", isPinned: false },
  {
    title: "Workout Plan",
    content: "Push day: Bench, Shoulder press",
    isPinned: false,
  },
  { title: "Recipe ideas", content: "Pasta, salad, Tacos", isPinned: false },
];

const noteTitles = notes.map(
  (note, index) => `Index: ${index}. title: ${note.title}`
);
console.log(noteTitles);

const user = {
  name: "Maikel",
};

console.log(user.address?.city ?? "Unknown");

let value = null;
let result = value ?? "Default Value";

console.log(result);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});

myPromise.then((data) => {
  console.log(data);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected");
  }, 2000);
});

myPromise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// OLD
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// NEW
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
