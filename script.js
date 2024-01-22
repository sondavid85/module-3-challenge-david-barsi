var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','"','#','$','%','&','(',')','*','+','-','/',':',';','<','>','=','?','@','[',']','{','|','}','~','^',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr =['0','1','2','3','4','5','6','7','8','9',]

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //generate password based on prompts
  var password = "";
  for( var i = 0; i < characterLength; i++) {
   var randomIndex = Math.floor(Math.random() * choiceArr.length); 
   password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
   var hasPromt = false;

  characterLength = parseInt(prompt("How many charaters? (8 - 128 charaters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be, 8 - 128 digits. Try again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
    hasPromt = true;
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
    hasPromt = true;
  }

  if (confirm("Do you want specail characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
      hasPromt = true;
  }

  if (confirm("Do you want numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr); 
    hasPromt = true;         
  }

  if (!hasPromt){
    alert('Please select at least one charater type')
    return false;
  }
  return true;
}

// Write password to the #password input
function writePassword() {
 var correctPrompts = getPrompts(); //either true or false
 var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  }
  else {
    passwordText.value = "";
  }
}

