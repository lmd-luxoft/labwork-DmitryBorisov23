var checked = 1;
function onMouseDown(sender)
{
    setState("MOUSE DOWN");
    if (sender.innerHTML == "")
    {
        if (checked == 1)
        {
            sender.innerHTML = "X";
            checked = 2;
            setState("First player turn");
        }
        else
        {
            sender.innerHTML = "O";
            checked = 1;
            setState("Second player turn");
        }
    }
}

function setState(text)
{
    let state = document.getElementById("state");
    state.innerHTML+=text+"<br/>";
}

function clearState(fClass,field)
{
    let tState = document.getElementsByClassName(fClass);
    for(i=0;i<tState.length;i++)
    {
        tState[i].innerHTML = "";
    }
    let state = document.getElementById(field);
    state.innerHTML="";
}