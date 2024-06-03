"use strict";
// Question # 30
let usernames = ['admin', 'Ayesha', 'Asiya', 'Malaika', 'Samiya', 'Rumaisa'];
// Loop through each username
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
