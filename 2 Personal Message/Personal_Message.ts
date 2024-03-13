//Written by: M Imran Ashraf
// Roll No. : 003379541

let personName :string = "";
personName = prompt('Enter Your Name') || "";
if(personName !== null && personName !== ""){
    alert(`"Hello, ${personName}  would you like to learn some Python today?"`);
}
else{
    alert(" Fill Your Name");
}