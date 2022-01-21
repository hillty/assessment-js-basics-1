console.log("Welcome to the password validator tool.")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password:", function(input){
	tokens = input.split(' ')

    password = tokens[0]

    if(password.length < 10){
        console.log("Your password is not long enough, please enter a password 10 characters long or more.")
    }else if(password.length >= 10){
        console.log("Password entered successfully.")
    }


reader.close()

})

