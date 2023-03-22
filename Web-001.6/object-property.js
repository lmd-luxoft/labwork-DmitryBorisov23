let x = {tag:2,value:"test"};
console.log(x.tag,x.value);
console.log(x["tag"],x["value"]);

let item1 = "tag";
let item2 = "value";
console.log(x[item1],x[item2]);


console.log(x.bug);

if(x.bug==undefined)
{
    
console.log("Not exists");
}

delete x.value;
console.log(x.value);

if(item2 in x)
{
console.log(item2 + " is present in x");
}
else
{
    console.log(item2 + " is not present in x");
}
x.value = 2;
x.userid = "user--user";

for(let p in x)
{
    console.log(p + "="+ x[p]);    
}