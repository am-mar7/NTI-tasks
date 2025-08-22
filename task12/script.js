// Create an object with multiple properties
const obj = {
    name: "nada", // String property
    age: 33, // Number property
    isGraduated: true, // Boolean property
    hoppy: ["reading", "cooking"], // Array property (note: 'hoppy' is likely a typo for 'hobby')
    parent:{
        father : 'ahmed' ,
        mother : 'hasnaa',
    },
};
  
  // Create an empty object using the Object constructor
  var obj2 = new Object();
  
  // Access object properties using dot notation
  console.log(obj.name); // Output: "nada"
  console.log(obj.isGraduated); // Output: true
  
  // Access object properties using bracket notation
  console.log(obj["name"]); // Output: "nada"
  console.log(obj["age"]); // Output: 33
  
  // Modify object properties
  obj.name = "nour"; // Change name to "nour"
  obj["age"] = 22; // Change age to 22 using bracket notation
  
  console.log(obj); // Output the modified object
  
  // Add a new property to the object
  obj.last_name = "ali";
  console.log(obj); // Now includes last_name: "ali"
  
  // Output the current state of the object
  console.log(obj);
  
  // Add properties to obj2
  obj2.name = "mahmed";
  obj2.age = 45;
  console.log(obj2); // Output: {name: "mahmed", age: 45}
  
  // Remove a property from obj
  delete obj.isGraduated;
  console.log(obj); // isGraduated property is now gone
  
  // Access array elements within the object
  console.log(obj.hoppy[0]); // Output: "reading" (first element in hoppy array)
  console.log(obj.hoppy); // Output: ["reading", "coking"] (whole array)
  
  // Initialize empty array in obj2
  obj2.hoppy = [];
  
  // Access nested object property
  console.log(obj.parent.mother); // Output: "Mona"
  
  // Add number property (two equivalent ways)
  obj.number = 123456874; // First assignment
  obj["number"] = 4563217; // Second assignment overwrites first
  console.log(obj); // Output includes number: 4563217
  
  // Loop through all properties in obj
  for (y in obj) {
    console.log(y + " is " + obj[y]); // Outputs each property and value
  }
  
  // Loop through all properties in obj2
  for (y in obj2) {
    console.log(y + " is " + obj2[y]); // Outputs each property and value
  }
  
  // Create new object and get properties from user input
  var obj3 = new Object();
//   obj3.name = prompt("enter your name");
//   obj3.age = prompt("enter your age");
//   obj3.number = prompt("enter your number");
  
  // Display collected user data
  for (z in obj3) {
    console.log(z + " is " + obj3[z]);
  }
  
  // String manipulation examples
  var name1 = "Nada Ahmed Mohamed";
  
  // String properties and methods
  console.log(name1.length); // Output: 17 (length of string)
  console.log(name1.toLowerCase()); // Output: "nada ahmed mohamed"
  console.log(name1.toUpperCase()); // Output: "NADA AHMED MOHAMED"
  
  var newName = name1.trim(); // Removes whitespace from both ends
  console.log(newName); // Output: "Nada Ahmed Mohamed"
  
  // Check if string contains substring
  console.log(name1.toLowerCase().includes("na")); // Output: true
  
  // String replacement
  var name2 = name1.replace("a", "5"); // Replaces first 'a' with '5'
  console.log(name2); // Output: "N5da Ahmed Mohamed"
  
  var name3 = name1.toUpperCase().replaceAll("A", "5"); // Replaces all 'A's with '5'
  console.log(name3); // Output: "N5D5 5HMED MOH5MED"
  
  // String character access
  console.log(name1[0]); // Output: "N" (first character)
  
  // String slicing
  var name4 = name1.slice(0, -3); // Gets string without last 3 chars
  console.log(name4); // Output: "Nada Ahmed Moh"
  
  // String searching
  console.log(name1.indexOf("A")); // Output: 5 (index of first 'A')
  
  // Remove all spaces
  var name5 = name1.replaceAll(" ", "");
  console.log(name5); // Output: "NadaAhmedMohamed"
  
  // Substring methods
  var name6 = name1.substring(5, 10); // Gets chars from index 5 to 9
  console.log(name6); // Output: "Ahmed"
  
  var name7 = name1.substr(3, 6); // Gets 6 chars starting at index 3
  console.log(name7); // Output: "a Ahm"
  
  // Find last space position
  console.log(name1.lastIndexOf(" ")); // Output: 10
  
  // Check string ending
  console.log(name1.endsWith("Mohamed")); // Output: true
  
  // String concatenation
  console.log(name1 + " jjjjj"); // Output: "name + jjjjj"
  var name8 = name1.concat(name2, name3); // Combine multiple strings
  console.log(name8);
  
  // Template literal example
//   var city = "Sohag";
// //   var city = prompt(); // Get city from user
//   var first_name = ` my city is ${city} `; // String interpolation
//   console.log(first_name);
  
  // Split string into array
  console.log(name1.split(" ")); // Output: ["Nada", "Ahmed", "Mohamed"]
  
  // Sample data structures
  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      stock: 30,
    },
    {
      id: 3,
      name: "Headphones",
      price: 149.99,
      category: "Electronics",
      stock: 50,
    },
    {
      id: 4,
      name: "Desk Chair",
      price: 199.99,
      category: "Furniture",
      stock: 10,
    },
    { id: 5, name: "Coffee Mug", price: 9.99, category: "Kitchen", stock: 100 },
  ];
  
const employees = [
    {
      id: 101,
      name: "John Doe",
      department: "IT",
      salary: 75000,
      skills: ["JavaScript", "Python", "SQL"],
    },
    {
      id: 102,
      name: "Jane Smith",
      department: "HR",
      salary: 65000,
      skills: ["Recruitment", "Training"],
    },
    {
      id: 103,
      name: "Mike Johnson",
      department: "IT",
      salary: 80000,
      skills: ["Java", "C++", "Cloud"],
    },
    {
      id: 104,
      name: "Sarah Williams",
      department: "Marketing",
      salary: 70000,
      skills: ["SEO", "Content", "Social"],
    },
];
const nums = [10, 20, 30, 40, 50];
const arrayBtn = document.getElementById('arraybtn');
const stringbtn = document.getElementById('stringbtn');
const objbtn = document.getElementById('objbtn');
const funbtn = document.getElementById('funbtn');
const productbtn = document.getElementById('productbtn');
const searchbtn = document.getElementById('searchbtn');
const exitbtn = document.getElementById('exit');
const mathbtn = document.getElementById('mathbtn');
const datebtn = document.getElementById('datebtn');
const advancedbtn = document.getElementById('advancedbtn');
function arrayOperation() {
  let msg = `
Array Operation
===============
Original array: [${nums}]
`;
  const x = 100;
  nums.push(x);
  msg += `Array after pushing ${x}: [${nums}]`;
  nums.pop();
  msg += `\nArray after popping: [${nums}]`;
  msg += `\nDoubled values: [${nums.map(v => v * 2)}]`;
  msg += `\nFiltered values (>25): [${nums.filter(v => v > 25)}]`;
  alert(msg);
}

let text = 'fish milk tamr hende';

function stringOperation() {
  alert(`
String Operation
================
Original string: '${text}'
Uppercased: '${text.toUpperCase()}'
Lowercased: '${text.toLowerCase()}'
Index of "milk": ${text.indexOf('milk')}
Includes "hende": ${text.includes('hende')}
Replace "milk" with "water": ${text.replace('milk', 'water')}
Split by space: [${text.split(' ')}]
  `);
}

function objOperation() {
  let msg = `
Object Operation
================
Original object:
${JSON.stringify(obj, null, 2)}
`;
  alert(msg);
}

function funOperation() {
  const x = Number(prompt("Enter number"));
  if (!x) return;
  alert(`
Function Operation
==================
Square of ${x}: ${Math.pow(x, 2)}
Cube of ${x}: ${Math.pow(x, 3)}
Counter: ${x}, ${x + 1}, ${x + 2}
  `);
}

function productOperation() {
  let msg = `
Product Operation
=================
Total products: ${products.length}
`;
  let totalprice = 0;
  products.forEach(p => totalprice += p.price);
  msg += `
Total price: ${totalprice}
Average price: ${totalprice / products.length}
Products by category:
`;
  products.forEach(p => msg += `\n${JSON.stringify(p)}`);
  alert(msg);
}

function searchOperation() {
  const key = prompt("Enter key of search");
  if (!key) return;
  let msg = `Products:\n`;
  if (key === 'n') {
    products.forEach(p => {
      if (p.name) msg += `\n${p.name}, ${p.price}, ${p.category}`;
    });
    msg += `\n\nEmployees:\n`;
    employees.forEach(e => {
      if (e.name) msg += `\n${e.name}, ${e.skills}`;
    });
  } else if (key === 's') {
    msg += `\nNone\n\nEmployees:\n`;
    employees.forEach(e => {
      if (e.skills) msg += `\n${e.name}, ${e.skills}`;
    });
  }
  alert(msg);
}

function exit() {
  window.close();
}

function domath() {
  const x = Number(prompt('Enter first number'));
  if (!x) return;
  const y = Number(prompt('Enter second number'));
  if (!y) return;
  alert(`
Math Operation
==============
Sum: ${x + y}
Subtract: ${x - y}
Multiply: ${x * y}
Division: ${x / y}
Power: ${Math.pow(x, y)}
Square root of ${x}: ${Math.sqrt(x)}
Random number between ${x} and ${y}: ${Math.floor(Math.random() * (y - x + 1)) + x}
  `);
}

function showDateInfo() {
  const now = new Date();
  const rawDate = now.toString();
  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  const currentYear = now.getFullYear();
  const christmas = new Date(currentYear, 11, 25);
  if (now > christmas) christmas.setFullYear(currentYear + 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((christmas - now) / oneDay);
  const components = `
Year: ${now.getFullYear()}
Month: ${now.getMonth() + 1}
Day: ${now.getDate()}
Hours: ${now.getHours()}
Minutes: ${now.getMinutes()}
Seconds: ${now.getSeconds()}
Day of Week: ${now.getDay()}
  `;
  alert(
    `Raw Date: ${rawDate}
Formatted Date: ${formattedDate}

Christmas Date: ${christmas.toDateString()}
Days left until Christmas: ${daysLeft}

Date Components:
${components}`
  );
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function advancedOperation() {
    let num = parseInt(prompt("Enter a number:"));
    if(!num)
        return
    alert(` Factorial of num  =  ${factorial(num)} \n Fibonacci of num = ${fibonacci(num)} `);
  }
  

  
arrayBtn.addEventListener('click', arrayOperation);
stringbtn.addEventListener('click', stringOperation);
objbtn.addEventListener('click', objOperation);
funbtn.addEventListener('click', funOperation);
productbtn.addEventListener('click', productOperation);
searchbtn.addEventListener('click', searchOperation);
exitbtn.addEventListener('click', exit);
mathbtn.addEventListener('click', domath);
datebtn.addEventListener('click', showDateInfo);
advancedbtn.addEventListener('click' , advancedOperation);
