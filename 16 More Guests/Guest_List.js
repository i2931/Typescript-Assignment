"use strict";
///Written by: M Imran Ashraf
// Roll No. : 00379541n in your list.
let guest_list = ["Fawad", "Zahid", "Iqbal", "Mustafa"];
// for(let i=0; i < guest_list.length; i++){
//     console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }
let change_guest = "Iqbal";
let new_guest = "Mubashir";
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n");
}
console.log(`Mr , ${change_guest} is Not Coming `);
console.log("Good News! We find Big Table So we are inviting 3 more Guests.");
guest_list.unshift("Kamran");
guest_list.splice(2, 0, "Farhan");
guest_list.push("Naveed");
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n");
}
