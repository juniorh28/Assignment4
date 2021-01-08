let btn1 = document.getElementById(".button1");
let btn2 = document.getElementById(".button2");
let text = document.getElementById(".text");

function button1() {
  let a = document.createTextNode("I'm right");
  document.body.appendChild(a);
}

function button2() {
  let a = document.createTextNode("No, I'm right");
  document.body.appendChild(a);
}




var header = document.querySelector('.header');

header.onmouseover = function()
{
    alert("Hey, I told you not to hover over me!");
}

function passValid()
{
    var passWord = document.getElementById('password').value;
    
        if(passWord == 12345678)
        {
            document.getElementById("stuff").innerHTML = "The password is correct";
        }else{
            alert("The password is incorrect!");
        }
    
}

