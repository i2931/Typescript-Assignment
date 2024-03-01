// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName :string = '';
personName =prompt("Enter Your Name") || '';
let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase();
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

if(personName !== null && personName !== ''){
    alert(`${personName}
    Lowerase : ${lowercase}
    UpperCase : ${uppercase}
    TitleCase : ${titlecase}
    `)
}
else{
    alert(' Fill Your Name ');
}