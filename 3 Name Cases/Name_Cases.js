"use strict";
let personName = '';
personName = prompt("Enter Your Name") || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`${personName}
    Lowerase : ${lowercase}
    UpperCase : ${uppercase}
    TitleCase : ${titlecase}
    `);
}
else {
    alert(' Fill Your Name ');
}
