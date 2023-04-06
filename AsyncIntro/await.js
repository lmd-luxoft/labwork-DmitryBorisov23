async function f()
{
    return 1;
}

function _f_()
{
   new Promise((resolve) => resolve(1));
}

async function app()
{
    let result = await f();
    console.log("code completed with result " + result);
}

app();
console.log("!!! " );
//f().then((result)=>{console.log("code completed with result " + result)});