
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert("i got");
}); 
}


 // if use handleClick(), it will call the function once the listener is added, it will return the function, the return is undefined. handleClick is only run when you click.
// function handleClick(){
//     alert("i got");
// }