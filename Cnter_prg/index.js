const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase = document.getElementById("increasebtn");
const countlabel = document.getElementById("Countlabel");

let count = 0;
increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}