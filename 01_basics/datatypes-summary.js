//primitive

//7 types :string ,Number, Boolean, null, undefined, symbol ,BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId)

// const bigNumber = 324343535343434n

// Refernce (Non premitive)

//Array,objects, Functions

const heros =["sakthiman","nagraj"]
let myobj={
    name:"sanjay",
    age:22,
}

 const myfunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)


//++++++++++++++++++++++++++++++++++++++++++++

//stack(preimitive) = get copy
// Heap (Non-primitive)= get refrence(orignal)

let myYoutubename = "sanjay"

 anothername = "chaiaurcode"
 console.log(myYoutubename)
console.log(anothername)

let usrone ={
    email:"sonujoshigmail.com",
    name:"sanjayjoshi"
}

let usrTwo = usrone
usrTwo.email = "usr@google.com"
console.log(usrone.email)
console.log(usrTwo.email)