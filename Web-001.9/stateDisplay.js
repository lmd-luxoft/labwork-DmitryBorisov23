function AddState(eventName, eventObject)
{
    let newStateStr = '';
    if(eventObject.type.indexOf("key") >= 0)
    {
        //newStateStr = `<tr><td>${eventName}</td><td>${JSON.stringify(eventObject)}</td></tr>`;
        newStateStr = `<tr><td>${eventName}</td><td>${eventObject.keyCode} ${eventObject.key}`;
    }
    else if (eventObject.type.indexOf("mouse") >= 0)
    {
        newStateStr = `<tr><td>${eventName}</td><td>ClientX=${eventObject.clientX}, ClientY=${eventObject.clientY}, screenX = ${eventObject.screenX}, screenY=${eventObject.screenY}`;
    }
    newStateStr += ` ${eventObject.type}</td></tr>`
    let state = document.getElementById("state");
    state.innerHTML += newStateStr;
    //state.appendChild(newStateStr);
}