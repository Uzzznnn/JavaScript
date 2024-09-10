const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;

mysubmit.onclick = function(){
    age = mysubmit.value;
if(age >= 18){
    resultElement.textContent = "You are able to enter";
}

else if (age == 0){
    resultElement.textContent = "You have just been born";
}

else if(age > 100) {
    resultElement.textContent = "You are too old";
}

}