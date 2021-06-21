function sum(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error(`Please enter a number.`)
    }
    return parseInt(num1) + parseInt(num2)
}

try{
  console.log(sum(1,2))
} catch(e){
    console.error(e)
} 

// Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number. &  Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

const user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username !== user.username || password !== user.password){
        throw new Error (`Invalid username or password.`)
    }
    return (`login successful!`)
} //check credentials

try{
    console.log(login("sam","123abc"))
}catch(e){
    console.error(e)
}

//  Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!". & Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

