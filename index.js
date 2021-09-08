
const validatePassword = require('./passwordvalidation'); //import the function

// Your code goes here!
const { stdin, stdout } = require('process');           //import functions to accept user input in terminal
const readline = require('readline').createInterface({
    input: stdin,
    output: stdout
})
 var welcomeMessage = 'Enter a password to validate (or "q" to quit)';   
 console.log(welcomeMessage); 
 recursivePasswordValidation();
function recursivePasswordValidation()                 //Function to recursively test the password
{
readline.question(' $ ', pass=> {       

    if(pass == 'q')                 //base case
    {
        readline.close();
    }
    
    if(validatePassword(pass) == true && pass != 'q')       //test for vaild password and base case
    {
        console.log('The password is valid');
        recursivePasswordValidation();
    }
    if(validatePassword(pass) == false && pass != 'q')      //test for valid password and base case
    {
        console.log('The password is invalid');
        recursivePasswordValidation();
    }
    
});

} 
