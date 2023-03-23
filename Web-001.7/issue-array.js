let arr = [];

arr[0] = 1;
arr[1] = 3;
arr[2] = 4;
arr[3] = -3;
arr[4] = "sdfsd";

arr[50]=5;
console.log(arr.length);

function calculations()
{
    //Min
    let minVal = null;
    for(let i of arr)
    {
        if(typeof i == "number")
        {
            if(minVal == null)
            {
                minVal = i;
            }
            if (i < minVal)
            {
                minVal = i;
            }
        }
    }
    console.log(`Min value is: ${minVal}`);

    //Max
    let maxVal = null;
    for(let i of arr)
    {
        if(typeof i == "number")
        {
            if(maxVal == null)
            {
                maxVal = i;
            }
            if (i > maxVal)
            {
                maxVal = i;
            }
        }
    }
    console.log(`Max value is: ${maxVal}`);

    //Average
    let averageVal = 0;
    let sumVal = 0;
    let cnt = 0;
    for(let i of arr)
    {
        if(i != null && i != undefined && typeof i == "number")
        {
            sumVal = sumVal + i;
            cnt = cnt + 1;
        }
    }
    console.log(`Sum of elements: ${sumVal}`);
    console.log(`count: ${cnt}`);

    if (cnt != 0)
    {
        averageVal = sumVal / cnt;
    }
    console.log(`Average value is: ${averageVal}`);
}

console.log("--------------------------------------------");
for(let i of arr)
{
    console.log(i);
}

console.log("---------------Calculations-----------------");
calculations();