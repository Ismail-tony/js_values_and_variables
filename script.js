//VALUES AND VARIABLES//
const Country = 'Nigeria';
const Continent = 'Africa';
let Population;
Population = 226.2
console.log('My name is Ismail Babalola. I am from ' + Country + ' a country in  ' + Continent + ". The population of "+ Country + ' is ' + Population + '.');

//DATA TYPES//
const isIsland = false;
const language = 'Yoruba';
console.log(typeof isIsland);
console.log(typeof Population);
console.log(typeof Country);
console.log(typeof language);

//BASIC OPERATOR//
console.log(Population/2);
console.log(Population++);
console.log(Population > 6);
console.log(Population < 33);

const description = Country + 
' is in ' + 
Continent + 
' , and 1/3 of its ' + 
Population + 
' million people speak ' + 
language;
console.log(description);