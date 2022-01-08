
function buttonclick(){

    document.getElementById("demo").innerHTML = "No, I am correct";
}

function buttonclick2(){

    document.getElementById("demo").innerHTML = "No you aren't, I AM CORRECT!!";
}

function hOver(text){
    text.innerHTML = "I told you not to hover over me!";
    //text.alert("I told you not to hover over me!")
}
function hOverOut(text){
    text.innerHTML = "Don't hover over me"

}


let buttonclick3 = document.querySelector("form").addEventListener("submit", function () {
    let currentVal = document.getElementById("exampleInputPassword1").value;
    let truePassowrd = 12345678;
   
    if (truePassowrd == currentVal) 
    {
      return true;
    } else 
    {
      alert("Your Password is incorrect!");
    }
});

//another way to do this

/*let buttonclick3a = document.querySelector('.button');
let headerss = document.querySelector('.header');

buttonclick3a.onclick = function passwordCorrect(){
    let usernamez = document.mb.username.value;
    let passwordz = document.mb.password.value;

    if(passwordz !== '12345678'){
        alert('Your password is incorrect. Try again.');
        return false;
    }
    headerss.innerText = 'Your password is correct. We will redirect you to the next page shortly.'
}*/