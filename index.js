
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    // let audio= new Audio("sounds/tom-1.mp3");
    // audio.play();
    this.style.color="red"
}); 
}


 // if use handleClick(), it will call the function once the listener is added, it will return the function, the return is undefined. handleClick is only run when you click.
// function handleClick(){
//     alert("i got");
// }

function add(num1,num2){
    return num1 + num2;

}

function subtract(num1,num2){
    return num1 - num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}
// calculator(2,3,add);  higher order function
// we can have constructor function, just like the factory that product the same objects

function Person(name,age){
    this.name = name;
    this.age = age;
}
let person1 = new Person("John",30);