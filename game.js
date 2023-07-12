var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
let msg;
let live=document.getElementById("lives");
let a=10;
submitButton.onclick=()=>{

    a--;
    let b=a;
    console.log();
    let input=document.getElementById("number-input").value;
    if(input==randomNumber){
        location.href="./Won.html";
    }
    else if(input>randomNumber){
        msg="Oops! your guess is high!";
    }
    else if(input<randomNumber){
        msg="Oops! your guess is low";
    }
    if(a==1){
        submitButton.onclick=()=>{
            location.href="./loss.html";
        }
        
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    live.innerHTML=a,"lives";
}