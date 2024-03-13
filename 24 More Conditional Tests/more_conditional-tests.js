"use strict";
//Written by: M Imran Ashraf
// Roll No. : 00379541
//Equality and Inequality Test 1
console.log("Equality test with string : ", "Mango" === "Mango");
//Equality and Inequality Test 2
console.log("In Equality test with string : ", "Mango" != "apple");
// Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("Equality test with Number : ", 5 === 5);
//Numerical tests involving inequality
console.log("Inequality test with Number : ", 5 != 7);
//greater than test
console.log("Greater than test: ", 15 > 5);
// less than test
console.log("Less than test: ", 5 < 15);
//greater than or equal to
console.log("greater than or equal to test: ", 15 >= 15);
//less than or equal to
console.log("less than or equal to test: ", 3 <= 5);
//Tests using "and" operator
console.log("And operator test ", 5 === 5 && 15 > 5);
//Test using "or" operator
console.log("Or operator test ", 5 === 5 || 15 > 5);
//Test whether an item is in a array
const fruits = ["Mango", "banana", "apple"];
console.log("Test 'apple' in the array: ", fruits.includes("apple"));
// Test whether an item is not in a array
console.log("tisting 'strawberry' is not in array", !fruits.includes("strawberry"));
