//  Chapter 4: Variable Names Legal and Illegal 

var productCost = 3.45;
var nameOfBand;
var itemCount = 10;
var johnDoe;

// Legal variable examples
var userName, _value, $amount, firstName, total123;

// Illegal variable examples (commented out to prevent errors)
// var 123total;
// var user-name;
// var var;
// var first name;
// var @email;

//  Chapter 5: Math Expression I

var remainderOperator = "%";
var num = 20 % 6;
var largeNum = 1000 * 2000;
var a = 10, b = 4;
var difference = a - b;
var leftover = 15 % 4;
alert(5 * 3);

// ==================== Chapter 6: Math Expression II 

var x = 5;
x += 1;
x++;

x = 100;
x--;

x = 50;
var y = x++;

y = 50;
var z = --y;

var num = 10;
var newNum = num--;

var myVar = 8;
var anotherVar = myVar++;

var counter = 5;
counter++;
alert(counter);

//  Chapter 7: Math Expression III 

var calculatedNum = 2 + (2 * 6);
calculatedNum = (2 + 2) * 6;    
calculatedNum = (2 + 2) * (4 + 2);
calculatedNum = ((2 + 2) * 4) + 2; 

var cost = (2 + 2) * (4 + 10);
var units = 2 + (2 * 4) + 10; 
var pressure = (4 / 2) * (4 / 2);
pressure = (4 / 2) + 3; 

//  Chapter 8: Concatenating Text Strings 

var numStr = "2" + "2";

var message = "Hello," + "Dolly";
alert(message); 
alert("33" + 3); 

alert("Pakistan " + "Zindabad");

var result = "Score: " + 100;

var firstName = "Ali";
var lastName = "Khan";
var fullName = firstName + " " + lastName;

//  Chapter 9: Prompts 

var firstNamePrompt = prompt("Enter first name");
var country = prompt("Country?", "China");
var yourName = prompt("Enter Your Name");
var city = prompt("Enter city name", "Lahore");

var msg = "Your favorite food?";
var defaultFood = "Pizza";
var userFood = prompt(msg, defaultFood);

var reply = prompt("What's your hobby?", "Reading");
alert(reply);




//  Chapter 10: if Statements 

// 1. 
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City OF Lights");
}

// 2. 
var x = 5;
var y = 5;
if (x === y) {
  var z = prompt("What is the value of z?");
}

// 3. 
var ZipCode = prompt("Enter Zip Code:");
if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

// 4. 
var testNum = 5;
if (testNum === 5) {
  testNum = 1;
}

//  Chapter 11: Comparison Operators 

// 1. 
var a = 10;
var b = 20;
if (a !== b) {
  console.log("a and b are not equal");
}

// 2. 
var marks = 80;
var passMarks = 50;
if (marks >= passMarks) {
  console.log("You passed!");
}

// 3. 
var numCheck = 10;
if (numCheck !== 5) {
  numCheck = 5;
}

// 4. 
if (7 !== 3) {
  alert("Congratulations!");
}

// 5. 
var userFirstName = prompt("Enter your first name:");
if (userFirstName !== "Ali") {
  alert("No match");
}
