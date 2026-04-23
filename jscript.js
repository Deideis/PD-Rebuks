let name = "Deivids"
let num = 17

var asd = 24.6 //tas pats kas let

const num2 = 9 //nemainīgs

//if num < 6:
//  print("hi")
//elif num < 10:
//  print("hey")
//else

if (num > 5) {
    console.log("Num ir lielāks par 5")
}

else if (num < 10) {
    console.log("num mazaks par 10")
} else {
    console.log("num ir liels")
}

// < > <= >= != == 

// !== === strict
// != == non-strict

let x = 2.5
let y ="2.5"

if (x == y) {
    console.log("ir vienāds")
} else {
    console.log("nav vienāds")
}

if (x === y) {
    console.log("ir vienāds")
} else {
    console.log("nav vienāds")
}

// AND => &&
// OR => ||
// NOT => !

/* let num1 = 3

if (!(num1 == num2 || num1 === num2 && num1 === 10)) {
    console.log("idk")
}

let i = 1
while (i < 10) {
    console.log(i)
    i++
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

/* VAI

let i = 1
for (; i < 10; i++) {
    console.log(i)
}
*/

//def myFunction():
//    print(name)
//myFunction("hjjkdkhtjk")

function myFunction(name) {
    console.log(name)
}

myFunction("Deivids")

//VAR izsaukt pirms funkcija ir definēta


const myFunction2 = (name) => {
    console.log(name)
}

myFunction2("Deivids")
//NEVAR izaukt pirms definācijas