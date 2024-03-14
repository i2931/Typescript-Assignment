"use strict";
//Written by: M Imran Ashraf
// Roll No. : 00379541
// current_users array
const current_users = ["fawad", "kamran", "zahid", "farhan", "iqbal"];
// new_users array
const new_users = ["imran", "adeel", "shabir", "qader", "mustafa"];
// Loop through new_users list
for (let new_user of new_users) {
    // Convert new_user to lowercase for case insensitivity
    const lowercase_new_user = new_user.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        // Username already exists
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        // Username is available
        console.log(`The username '${new_user}' is available.`);
    }
}
