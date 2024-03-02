// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
let guest_list :string[] = ["Fawad", "Zahid", "Iqbal", "Mustafa"];

for(let i=0; i < guest_list.length; i++){

    console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
}

let change_guest :string ="Iqbal";
let new_guest :string ="Mubashir";

guest_list[2] = new_guest ;

for(let i=0; i < guest_list.length; i++){

    console.log("Dr.Mr. " + guest_list[i] +",\n\n It is our Pleasure to invite you in our party.\n\n Thank You \n\n" )
}

console.log(`Mr , ${change_guest} is Not Coming `)