 // console.log("Hello World !");
// console.log("Hello World !");

// window.alert("This is hello form alert box!");

// document.getElementById("MyHeading1").textContent = "Hello using JS";   
// document.getElementById("Mypara1").textContent = "BLA BLA BLA";

// let age;
// age = window.prompt("Enter your age : ");
// let name1;
// name1 = window.prompt("Enter your name : ");
// let student = true;

// document.getElementById("age").textContent = age;
// document.getElementById("name1").textContent = name1;
// document.getElementById("student").textContent = student;

// let username;

// document.getElementById("Submit").onclick = function(){
//     username = document.getElementById("Username").value;
//     document.getElementById.textContent = `Hello ${username} using JS`;
// }

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");

let count = 0;

increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count=0;
    countLabel.textContent = count;
}