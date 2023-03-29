sandbox = [1,2,3];
sandbox.push(11);
sandbox.unshift(22);

console.log(sandbox);
console.log(sandbox.pop());
console.log(sandbox.shift());
console.log(sandbox);

sandbox = ["I","go","my","sweet","Home"];
let result = sandbox.splice(1,3);
console.log(sandbox);
console.log(result);

sandbox = ["I","go","my","sweet","Home"];
result = sandbox.splice(1,2,"dream","job");
console.log(sandbox);
console.log(result);

rabbit = ["and","I","go","to","cafe"];
result = sandbox.splice(0,0, ...rabbit);
console.log(sandbox);
console.log(result);

//----------slice
sandbox = ["I","go","my","sweet","Home"];
console.log(sandbox.slice(1,3));
console.log(sandbox.slice(-2));
console.log(sandbox.slice(-1));

//----------concat
sandbox = ["I","go","my","sweet","Home"];
rabbit = ["and","I","go","to","cafe"];
console.log(sandbox.concat(rabbit));

//----------forEach
sandbox.forEach(element => {
    console.log(element);
});

sandbox.forEach((element,index) => {
    console.log(`position in array${index} value=${element}`);
});
sandbox.forEach((element,index,arr) => {
    console.log(`position in array${index} value=${element} in array ${arr}`);
});

//----------indexOf/lastIndexOf & includes
console.log(sandbox.indexOf("Home"));
console.log(sandbox.indexOf("garage"));

result = sandbox.concat(sandbox,rabbit);
console.log(result.indexOf("I"));

let nans = [NaN];
console.log(nans.indexOf(NaN));
//console.log(nans.include(NaN));

result = sandbox.find((item,index,array)=>item.length > 3);
console.log(result);
result = sandbox.find((item,index,array)=>item.length > 20);
console.log(result);

result = sandbox.findIndex((item,index,array)=>item.length > 3);
console.log(result);
result = sandbox.findIndex((item,index,array)=>item.length > 20);
console.log(result);

result = sandbox.concat(sandbox,rabbit);
console.log(result.findLastIndex((item,index,array)=>item.length == 1));

//----------filter
result = sandbox.concat(sandbox,rabbit);
console.log(result.filter((item,index,array)=>item.length <3));

math = [1,2,3,4,"bug",{bug:true},5,6];
console.log(math.filter((item)=>typeof item == "number"));

result = sandbox.map((item,index,array)=>item.length);
console.log(result);

//----------sort
let src = [1,2,15];
src.sort();
console.log(src);
src.sort((a,b) => {
    if(a>b) return 1;
    else if (a==b) return 0;
        else if (a<b) return -1;
});
console.log(src);
src.sort((a,b) => {
    if(a>b) return -1;
    else if (a==b) return 0;
        else if (a<b) return 1;
});
console.log(src);


//----------reverse
sandbox.reverse();
console.log(sandbox);

//----------split/join
query = "a=2&b=3&c=4";
result = query.split("&");
console.log(result);
buf = result.join(",");
console.log(buf);

//----------reduce/reduceRight
result = sandbox.reduce((accumulator, item, index,array) => accumulator+item.length,0);
console.log(result);
result = sandbox.reduceRight((accumulator, item, index,array) => accumulator-item.length,0);
console.log(result);

//----------isArray
console.log(Array.isArray([1,2,3,4]));
console.log(Array.isArray("test"));