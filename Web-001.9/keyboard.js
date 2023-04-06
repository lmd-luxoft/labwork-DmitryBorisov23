function onKeyDown(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY DOWN<br/>";
    AddState("KEY DOWN<br/>",e)
}

function onKeyUp(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY UP<br/>";
    AddState("KEY UP<br/>",e)

}
function onKeyPress(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY PRESS<br/>";
    AddState("KEY PRESS<br/>",e)
}

function onKeyDownButton(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY DOWN BUTTON<br/>";
    AddState("KEY DOWN BUTTON<br/>",e)
}

function onKeyUpButton(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY UP BUTTON<br/>";
    AddState("KEY UP BUTTON<br/>",e)

}
function onKeyPressButton(sender,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+="KEY PRESS BUTTON<br/>";
    AddState("KEY PRESS BUTTON<br/>",e)
}
function onClick(sender,e)
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
