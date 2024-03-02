"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_list = ["Fawad", "Zahid", "Iqbal", "Mustafa"];
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
let change_guest = "Iqbal";
let new_guest = "Mubashir";
guest_list[2] = new_guest;
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
console.log(`Mr , ${change_guest} is Not Coming `);
console.log("Good News! We find Big Table So we are inviting 3 more Guests.");
// Add 3 people in array.
guest_list.unshift("Kamran");
guest_list.splice(2, 0, "Farhan");
guest_list.push("Naveed");
// 6 guest array print.
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n");
}
//Sorry Message to people not inviting.
console.log("\n Sorry we can not arrange big table, Only Two people will be invited.");
// This Code remove guest.
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry ${remove_guest}, Your Not Invited to Dinner`);
}
// 2 Pepole Invit Guest.
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n You are still invited.\n\n Thank You \n\n");
}
// 4 Guest romove.
guest_list.splice(0, 2);
console.log(guest_list);
