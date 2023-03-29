function onMouseDown(sender)
{
    setState("MOUSE DOWN");
}
function onMouseEnter(sender)
{
    setState("MOUSE ENTER");
}
function onMouseMove(sender)
{
    setState("MOUSE MOVE");
}
function onMouseLeave(sender)
{
    setState("MOUSE LEAVE");
}
function onMouseOut(sender)
{

    setState("MOUSE OUT");
}
function onMouseOver(sender)
{

    setState("MOUSE OVER");
}
function onWheel(sender)
{

    setState("MOUSE WHEEL");
}

function setState(text)
{
    let state = document.getElementById("state");
    state.innerHTML+=text+"<br/>";
}