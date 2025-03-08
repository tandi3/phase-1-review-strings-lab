// Write your code in this file!

const currentUser = 'Grace Hopper'

const welcomeMessage = `Welcome to Flatbook, Grace Hopper!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, G! ${currentUser.slice(0, 1)}!`;

console.log(welcomeMessage); // Output: Welcome to Flatbook, Grcae Hopper!
console.log(excitedWelcomeMessage); // Output: WELCOME TO FLATBOOK, GRACE HOPPER!
console.log(shortGreeting); // Output: Welcome G,!
