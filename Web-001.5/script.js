let a = 10;
let b = 10;
let c = 10;

function getSquare(a,b,c)
{
    let p = (a + b + c) / 2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));    
}

console.debug(getSquare(a,b,c));