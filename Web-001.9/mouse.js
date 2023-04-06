function onMouseDown(sender,e)
{
    setState("MOUSE DOWN",e);
}
function onMouseEnter(sender,e)
{
    setState("MOUSE ENTER",e);
}
function onMouseMove(sender,e)
{
    setState("MOUSE MOVE",e);
}
function onMouseLeave(sender,e)
{
    setState("MOUSE LEAVE",e);
}
function onMouseOut(sender,e)
{

    setState("MOUSE OUT",e);
}
function onMouseOver(sender,e)
{

    setState("MOUSE OVER",e);
}
function onWheel(sender,e)
{

    setState("MOUSE WHEEL",e);
}

function setState(text,e)
{
    //let state = document.getElementById("state");
    //state.innerHTML+=text+"<br/>";
    AddState(text+"<br/>",e)
}