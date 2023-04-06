class Person
{
    constructor(firstName,lastName,age)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
    }
    toString()
    {
        return this.FirstName + " " + this.LastName + " " + this.Age;
    }
}

let p1 = new Person("Peter","Vasiliev",20);
let p2 = new Person("Petra","Vasilieva",18);

console.log(p1);
console.log(p2);

alert(p1);
alert(p2);