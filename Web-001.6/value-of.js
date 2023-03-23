class TemperatureSensor
{
    constructor(temperature)
    {
        if(typeof temperature == "number")
        {
            this.Temperature = temperature;
        }
        else 
        throw "Invalid number";
    }
    toString()
    {
        return this.Temperature;
    }
    valueof()
    {
        return "temp:" + this.Temperature;
    }
}

let s1 = new TemperatureSensor(30);
let s2 = new TemperatureSensor(20);

console.log(s1);
console.log(s2);

console.log(s1+s2);