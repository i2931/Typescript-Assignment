"use strict";
///Written by: M Imran Ashraf
// Roll No. : 00379541
let guest_list = ["Fawad", "Zahid", "Iqbal", "Mustafa"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n");
}
let change_guest = "Iqbal";
let new_guest = "Mubashir";
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dr.Mr. " + guest_list[i] + ",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n");
}
console.log(`Mr , ${change_guest} is Not Coming `);
