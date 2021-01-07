
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