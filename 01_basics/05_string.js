const name ="sanjay"
const repocount = 50

console.log(` hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('sanjay-hc')//diffrent type of assign string
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());//use string to uppercase
console.log(gameName.charAt(2));//see which object in second postion
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)//show reverse character
console.log(anotherString);

const newStringOne = "   hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim());//when we need to trim white spaces

const url = "https://hitesh.com/hitersh%20choudhary"

console.log(url.replace('%20','-'))//replace

console.log(url.includes('hitesh'))//when we want to know this keyword is available or not 

console.log(gameName.split('-'));//string split bases on space
