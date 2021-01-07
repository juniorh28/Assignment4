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
