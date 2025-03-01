import {Current, Voltage, PI, getCircumference, getArea, getResistance, getVolume} from './Ohm\'s_Law.js';

console.log(`The resistance is ${getResistance()}`);
console.log(`The circumference is ${getCircumference(5)}`);
console.log(`The area is ${getArea(5)}`);
console.log(`The volume is ${getVolume(5)}`);

// Object Destructuring
//swap the values of two variables
let a = 1;
let b = 4;

[a, b] = [b, a];
console.log(a); 
console.log(b);

// Swap two elements in an array
const colors = ['red', 'blue', 'green', 'yellow'];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//Assign array elements to variables
const phones = ['iPhone', 'Samsung', 'Nokia', 'Sony'];
const [phone1, phone2, phone3, phone4, ...extraPhones] = phones;
console.log(phone1);
console.log(phone2);
console.log(extraPhones);

//Extract values from objects
const personOne = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  job: 'Software Developer'
};
const personTwo = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 40,
 job: 'Doctor' 
}

const {fistName, lastName, age, eyeColor="none", job} = personTwo;
console.log(fistName);
console.log(lastName);
console.log(age);
console.log(eyeColor);
console.log(job);

//Destrcture in function parameters
function displayName({firstName, lastName, age, eyeColor="black", job}){
console.log(`The person's name is ${firstName} ${lastName}`);
console.log(`The person's age is ${age}`);
console.log(`The person's eye color is ${eyeColor}`);
console.log(`The person's job is ${job}`);
}
displayName(personTwo);

