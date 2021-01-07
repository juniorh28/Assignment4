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
    // alert("Hey, I told you not to hover over me!");
}

var passWord = document.getElementById("id").value;

if(typeof passWord === 'number')
{
    if(passWord === 12345678)
    {
        heading = document.getElementById('');
        heading.innerText;
        headding.innerText = "The passoword is correct";
        header.innerText;
    }else{
        alert("The password is incorrect!");
    }
}else{
    alert("This is not a number!");
}