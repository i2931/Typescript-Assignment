//Written by: M Imran Ashraf
// Roll No. : 00379541


// array for usernames
const usernames: string[] = ["fawad", "kamran", "zahid", "farhan", "iqbal"];

// using forEach method
usernames.forEach(username => {
  // Step 3: Inside the loop, special greeting for "admin", For Others printing a Simple greeting
  if (username.toLowerCase() === "admin") {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});