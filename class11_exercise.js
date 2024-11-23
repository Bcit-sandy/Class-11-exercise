const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a function that allows the host to check the registry to see all the user registered.
Use a loop to go through all the users registered
This application also allows the host add users to the banned list and check them when they need to

// Planning:
There are 5 functions in total
AddUserToRegistry(): adding people into an array "users = []";
CheckRegistry(): read through the list of people in an array "users = []"
BanUser(): Add users in an array "banned = []"
CheckBanned(): read through the list of banned people in an array "banned = []"

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...
- When banned.includes(_name) --> do not add user

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  readline.question("What is the name of user registered? ", _name => {
    if (!settings.addRegistry) {            //setting is off, addRegistry:false;
      console.log("Adding users is currently disabled in settings.");
      return StartApp();
    }
    let checkBans=banned.includes(_name) //check if users is in the ban list
    if(checkBans){
      console.log(`${_name} is in the banned list.`);
    } else {
       users.push(_name);                             // add names to list 
      console.log(`${_name} is registered!`);
    }
    StartApp();
  });
}

function CheckRegistry() {
  for(let n=0; n<users.length; n++){
    console.log(`Registered user(s): ${users[n]}`)      // read the name in list according to order in list
    StartApp();
  }
}

function BanUser(){
  readline.question("What is the name of banned user? ", _name => {
    banned.push(_name);          // add names to list 
    console.log(`${_name} is banned!`)
    StartApp();
  });
}

function CheckBanned(){
  for(let n=0; n<banned.length; n++){
    console.log(`Banned user(s): ${banned[n]}`)           // read the name in list according to order in list
    StartApp();
  }
}

function StartApp(){
  readline.question("What would you like to do? ", _command=>{
      if(_command === "quit"){
          readline.close();
      } else if(_command === "add register user"){
          //add name to user list
          AddUserToRegistry();
      } else if(_command === "check registered user"){
          //check registered user list
          CheckRegistry();
      } else if(_command === "ban user"){
          //add name to ban list
          BanUser();
      } else if(_command === "check banned user"){
          //check banned user list
          CheckBanned();
      } else if (_command === "switch"){
        //toggle the switch
        settings.addRegistry=!settings.addRegistry;
        StartApp();
      }else {
        console.log("Unknown command. Please try again.");
        //unknown command, ask try again
        StartApp();
      } 
    });
}

StartApp();


// Comments:
// Reviewed by Thea: very clear planning, well organized! I really like how detailed it is. Clean code, very easy to understand and read. 
// Reviewed by Angie: Detailed and easy to follow. Good job!

