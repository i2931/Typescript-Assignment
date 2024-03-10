// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//Equality and Inequality Test 1
console.log("Equality test with string : ", "Mango" === "Mango");

//Equality and Inequality Test 2
console.log("In Equality test with string : ", ("Mango" as string) != "apple");

// Tests using the lower case function
console.log("Lower Case function test: ","HELLO".toLowerCase() === "hello");

//Numerical tests involving equality
console.log("Equality test with Number : ", 5 === 5);

//Numerical tests involving inequality
console.log("Inequality test with Number : ", (5 as number) != 7);

//greater than test
console.log("Greater than test: ", 15 > 5);

// less than test
console.log("Less than test: ", 5 < 15);

//greater than or equal to
console.log ("greater than or equal to test: ", 15 >= 15 );

//less than or equal to
console.log("less than or equal to test: ", 3<= 5);

//Tests using "and" operator
console.log("And operator test ", 5 === 5 && 15 > 5);

//Test using "or" operator
console.log("Or operator test ", 5 === 5 || 15 > 5);

//Test whether an item is in a array
const fruits :string[] = ["Mango", "banana", "apple"];
console.log("Test 'apple' in the array: ", fruits.includes("apple"));

// Test whether an item is not in a array

console.log("tisting 'strawberry' is not in array", !fruits.includes("strawberry"));