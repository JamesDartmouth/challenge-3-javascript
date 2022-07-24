// Assignment code here

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','y','u','v','w','x','y','z']
var number = ['0','1','2','3','4','5','6','7','8','9']
var special = ['!','@','#','$','%','^','&','*','(',')','-','=','_','+','?','~','`']
var library = []

function generatePassword(){
    var passwordLength = window.prompt("How many characters do you want in your password (8-128)?");
    var characterLength = parseInt(passwordLength);
    
    if (isNaN(characterLength) || characterLength < 8 || characterLength >128){
        window.alert("Please pick a number between 8 and 128.")
        return
    }

    var upperPrefer = confirm("Would you like to use Upper Case Letters?")
    var lowerPrefer = confirm("Would you like to use Lower Case Letters?")
    var numberPrefer = confirm("Would you like to use Numbers?")
    var specialPrefer = confirm("Would you like to use Special Characters?")

    if (upperPrefer === false && lowerPrefer === false && numberPrefer === false && specialPrefer === false){
        window.alert("Please choose at least one valid Character type.")
        return ""
    }
    if (upperPrefer === true) {
        library = library.concat(upperCase)
    }
    if (lowerPrefer === true) {
        library = library.concat(lowerCase)
    }
    if (numberPrefer === true) {
        library = library.concat(number)
    }
    if (specialPrefer === true) {
        library = library.concat(special)
    }
    var password = ""
    console.log(library)
    for (var i=0; i < characterLength; i++){
        var newPassword = Math.floor(Math.random() * library.length);
        console.log(newPassword)
        password = password + library[newPassword]
    } 
    return password

    

    //if (upperPrefer === true){
      ///  let upperCheck = libary[]includes upperCase[]
        //
    //}
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
