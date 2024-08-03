'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


function logger() {
  console.log('My name is Nikhil');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('5');
console.log(num);


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1996);

// Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 60 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, 'Nikhil'));
console.log(yearsUntilRetirement(2000, 'Sanket'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);

  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, 'Nikhil'));
console.log(yearsUntilRetirement(2000, 'Sanket'));


const friend1 = 'Sanket';
const friend2 = 'Nikhil';
const friend3 = 'Manas';

const friends = ['Sanket', 'Nikhil', 'Manas'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Tej';
console.log(friends);

// friends = ['Bob', 'Alice'];

const firstName = 'Nikhil';
const nikhil = [firstName, 'Kukreja', 2024 - 1996, 'Developer', friends];
console.log(nikhil);
console.log(nikhil.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Add elements
const friends = ['Sanket', 'Nikhil', 'Manas'];
const newLength = friends.push('Jatin'); // Pushes the element at the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('Simran'); // To add element beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Nikhil'));
console.log(friends.indexOf('Bob'));
friends.push(23);

console.log(friends.includes('Nikhil'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Nikhil')) {
  console.log('You have a friend called Nikhil');
}



const nikhilArray = [
  'Nikhil',
  'Kukreja',
  2024 - 1996,
  'Developer',
  ['Sanket', 'Nikhil', 'Manas'],
];

const nikhil = {
  firstName: 'Nikhil',
  lastName: 'Kukreja',
  age: 2024 - 1996,
  job: 'Developer',
  friends: ['Sanket', 'Nikhil', 'Manas'],
};

// console.log(nikhilArray);
console.log(nikhil);

console.log(nikhil.lastName);
console.log(nikhil['lastName']);

const nameKey = 'Name';
console.log(nikhil['first' + nameKey]);
console.log(nikhil['last' + nameKey]);

const interestedIn = prompt(
  'What do you want know about Nikhil? Choose between firstName, lastName, age, job, and friends'
);

if (nikhil[interestedIn]) {
  console.log(nikhil[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

nikhil.location = 'Ghatkopar';
nikhil['twitter'] = '@nikhilkukreja26';

console.log(nikhil);

console.log(
  `${nikhil.firstName} has ${nikhil.friends.length} friends, and his best friend is called ${nikhil.friends[0]}`
);
*/

const nikhil = {
  firstName: 'Nikhil',
  lastName: 'Kukreja',
  birthYear: 1996,
  job: 'Developer',
  friends: ['Sanket', 'Nikhil', 'Manas', 'Jatin'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(nikhil.calcAge());
// console.log(nikhil['calcAge'](nikhil.birthYear));

console.log(nikhil.age);
console.log(nikhil.age);
console.log(nikhil.age);

console.log(nikhil.getSummary());
