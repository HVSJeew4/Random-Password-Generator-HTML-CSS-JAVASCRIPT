const passworBox = document.getElementById("password");
const length =12;

const upperCase="ABCDEFGHIJKLMNOPQSRTUVWXYZ"
const lowerCase ="abcdefghijklmnopqsrtuvwxyz"
const number ="1234567890"
const symbols ="!£$%^&*()_+=,./;"
const allChars =upperCase + lowerCase +number +symbols;
function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passworBox.value =password
}

function copyPassworf(){
    passworBox.select();
    document.execCommand("copy");
}