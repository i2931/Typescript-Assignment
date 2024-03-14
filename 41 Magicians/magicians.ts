//Written by: M Imran Ashraf
// Roll No. : 00379541



// Array magicians
const magicians: string[] = ["Fawad", "Harry Potter", "Kamran", "Bilal"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);