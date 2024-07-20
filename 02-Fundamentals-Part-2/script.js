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
*/

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
