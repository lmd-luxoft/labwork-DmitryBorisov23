alert("Hi!");
console.log("Hello!!!");
document.write("<h1>This document generated by JS</h1>");
document.write("<p id='para'>Text inside paragraph</p>");
let element=document.getElementById("para");
element.style.color="red";
element.innerHTML = "<b><i>Text was changed</i></b>";