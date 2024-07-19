/*
let js = 'Amazing';
if (js === 'Amazing') {
  alert('JavaScript is FUN!');
}
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log('Nikhil');

let firstName = 'Tej';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJobRole = 'Front end developer';
let myCurrentJobRole = 'Mobile app developer';

console.log(myFirstJobRole);
console.log(myCurrentJobRole);

Assignment 1
Values and Variables

Declare variables called country, continent and population and assign their values according to your own country (population in millions).

Log their values to the console.

let country = 'India';
let continent = 'Asia';
let population = '1442';

console.log(country);
console.log(continent);
console.log(population);


true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Nikhil');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kukreja';
console.log(lastName);




// Basic operators
// Math operators
const now = 2037;
const ageNikhil = now - 1996;
const ageSara = now - 2018;
console.log(ageNikhil, ageSara);

console.log(ageNikhil * 2, ageNikhil / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Nikhil';
const lastName = 'Kukreja';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageNikhil > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1996 > now - 2018);


const now = 2037;
const ageNikhil = now - 1996;
const ageSara = now - 2018;

console.log(now - 1996 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

const averageAge = (ageNikhil + ageSara) / 2;
console.log(ageNikhil, ageSara, averageAge);


const firstName = 'Nikhil';
const job = 'programmer';
const birthYear = 1996;
const year = 2037;

const nikhil =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(nikhil);

const nikhilNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(nikhilNew);

console.log(`Just a regular string...`);

console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String
multiple
lines`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Type conversion
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Nikhil'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 2; // 12
n = n - 1;
console.log(n);


// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nikhil'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// Equality operators

const age = '18';
if (age === 18) console.log('You just became an adult. 🎉');

if (age == 18) console.log('You just became an adult. 🎉');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 23 === 23

  console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}

 */

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Nikhil';
console.log(`I'm ${2037 - 1996} years old ${me}`);

const age = 15;
// age >= 18
//   ? console.log('I like to drink wine 🍷')
//   : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);
console.log(`I like to drink ${drink2}`);
