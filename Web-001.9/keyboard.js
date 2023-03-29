function onKeyDown(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY DOWN<br/>";
}

function onKeyUp(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY UP<br/>";

}
function onKeyPress(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY PRESS<br/>";
}

function onKeyDownButton(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY DOWN BUTTON<br/>";
}

function onKeyUpButton(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY UP BUTTON<br/>";

}
function onKeyPressButton(sender)
{
    let state = document.getElementById("state");
    state.innerHTML+="KEY PRESS BUTTON<br/>";
}
function onClick(sender)
{
    let btn = document.getElementById("userButton");
    //btn.style.display="none";
    let rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}
function random(number)
{
    return Math.floor(Math.random() * (number + 1));
}
/*
let btn = document.getElementById('btn');
if (typeof btn == "button")
{
    btn.onclick = function()
    {
        let rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }
}
*/
