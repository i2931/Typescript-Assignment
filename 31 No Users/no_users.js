"use strict";
//Written by: M Imran Ashraf
// Roll No. : 00379541
// array for usernames
let usernames = ['admin', 'fawad', 'kamran', 'zahid', 'Daniyal'];
// Checking User Availiblity 
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Removimg all usernames from the array
    usernames = [];
    console.log("All usernames have been removed. " + usernames.length);
}
