///Written by: M Imran Ashraf
// Roll No. : 00379541


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