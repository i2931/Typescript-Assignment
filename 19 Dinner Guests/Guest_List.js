"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_list = ["Fawad", "Zahid", "Iqbal", "Mustafa"];
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dear.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
let change_guest = "Iqbal";
let new_guest = "Mubashir";
guest_list[2] = new_guest;
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dear.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
// console.log(`Mr , ${change_guest} is Not Coming `);
// console.log ("Good News! We find Big Table So we are inviting 3 more Guests.");
// Add 3 people in array.
guest_list.unshift("Kamran");
guest_list.splice(2, 0, "Farhan");
guest_list.push("Naveed");
// 6 guest array print.
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dear.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
//Sorry Message to people not inviting.
// console.log ("\n Sorry we can not arrange big table, Only Two people will be invited.");
// This Code remove guest.
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry ${remove_guest}, Your Not Invited to Dinner`);
}
// 2 Pepole Invit Guest.
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dear.Mr. " + guest_list[i] +",\n\n You are still invited.\n\n Thank You \n\n" );
// }
// 4 Guest romove.
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total Number Of Guest are, ${guest_list.length}`);
