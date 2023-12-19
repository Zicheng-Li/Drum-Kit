// check button press
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    // let audio= new Audio("sounds/tom-1.mp3");
    // audio.play();
    let b=this.innerHTML;
    makeSound(b);
    buttonAnimation(b);
}); 
}

// check keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            let audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            let audio1= new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            let audio2= new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
        case "d":
            let audio3= new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            let audio4= new Audio("sounds/snare.mp3");
            audio4.play();
            audio4.play();
            break;
        case "k":
            let audio5= new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "l":
            let audio6= new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
        default:
            console.log(b);
}
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
// calculator(2,3,add);  higher order function, callback function
// we can have constructor function, just like the factory that product the same objects

function Person(name,age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        alert("My name is " + this.name + " and I am " + this.age + " years old.");
    }
}
let person1 = new Person("John",30);

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
} 