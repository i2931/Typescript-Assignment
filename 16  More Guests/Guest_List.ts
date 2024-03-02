//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list :string[] = ["Fawad", "Zahid", "Iqbal", "Mustafa"];

// for(let i=0; i < guest_list.length; i++){

//     console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
// }

let change_guest :string ="Iqbal";
let new_guest :string ="Mubashir";

guest_list[2] = new_guest ;

for(let i=0; i < guest_list.length; i++){

    console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
}

console.log(`Mr , ${change_guest} is Not Coming `)

console.log ("Good News! We find Big Table So we are inviting 3 more Guests.")

guest_list.unshift("Kamran");
guest_list.splice(2,0, "Farhan");
guest_list.push("Naveed");

for(let i=0; i < guest_list.length; i++){

    console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
}