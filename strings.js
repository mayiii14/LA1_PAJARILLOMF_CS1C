let favActorFirstName = 'Ryan';
let favActorLastName = 'Reynolds';
let fullName = favActorFirstName + " " + favActorLastName;

let uppercase = favActorFirstName.toUpperCase(); //converting the string into uppercase

let message = `My favorite actor is, ${uppercase}.`;

message += " His best show is Silicon Valley.";

console.log('First Name:', favActorFirstName);
console.log('Last Name:', favActorLastName);
console.log('Full Name:', fullName);
console.log(uppercase);
console.log(message);
