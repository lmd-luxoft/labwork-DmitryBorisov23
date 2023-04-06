
let timers = document.getElementsByTagName("timer");

for(let timer of timers)
{
   let timeout = timer.getAttribute("timeout");
   let idInterval = setInterval(() => {
    let e = new CustomEvent("ontime", {buble: true, detail : idInterval});
    timer.dispatchEvent(e); 
 }, timeout);
}