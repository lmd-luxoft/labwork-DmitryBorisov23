var checked = 1;
class TicTacToe
{
    handleEvent(e)
    {
        console.log(e.type)
        switch(e.type)
        {
            case 'mousedown' : 
                this.onMouseDown(e);
                break;
            case 'mouseup' : 
                this.onMouseUp(e);
                break;
            case 'click' : 
                this.onClick(e);
                break;
        }
    }
    onMouseDown(e)
    {
        console.log("mouse down");
    }
    onMouseUp(e)
    {
        console.log("mouse up");
    }
    onClick(e)
    {
        setState("Mouse Click");
        console.log(e);
        if (e.target.innerHTML == null)
        {
            if (checked == 1)
            {
                e.target.innerHTML = "X";
                checked = 2;
                setState("First player turn");
            }
            else
            {
                e.target.innerHTML = "O";
                checked = 1;
                setState("Second player turn");
            }
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
            
function onClickEvent(e)
{
    setState("Mouse Click");
    console.log(e);
    if (e.currentTarget.innerHTML == "")
    {
        if (checked == 1)
        {
            e.currentTarget.innerHTML = "X";
            checked = 2;
            setState("First player turn");
        }
        else
        {
            e.currentTarget.innerHTML = "O";
            checked = 1;
            setState("Second player turn");
        }
    }
}