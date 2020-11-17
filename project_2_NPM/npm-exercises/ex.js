//Ex. 1

let validator = require('validator');

//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'));

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone('786-329-9958'));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist).toLowerCase());

//Ex. 4
let faker = require('faker');
function makeHuman(num) {
    for (i = 0; i < num; i++) {
        console.log(faker.name.firstName());
        console.log(faker.image.avatar());
        console.log(faker.company.companyName());
    }
}

makeHuman(2);
