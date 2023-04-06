class BankCard
{
    constructor(cardNumber,balance,pin, limit)
    {
        this.CardNumber = cardNumber;
        this.Balance = balance;
        this.Pin = pin;
        this.Limit = limit;
    }
    operation(operationType,amount,pin)
    {
        if (pin == this.Pin)
        {
            this.Balance = this.Balance + amount;
            console.log(this.CardNumber + " " + operationType + ":" + amount);
            return this.CardNumber + " balance:" + this.Balance;
        }
        else
        {
            return "Wrong PIN for card: " + this.CardNumber;
        }
    }
    cashWithdrawal(amount,pin)
    {   
        if (this.Balance - amount >= 0)
        {
            return this.operation("withdrawal",-1 * amount,pin);
        }
        else
        {
            return "This card type doesn't allow negative balance. Card number: " + this.CardNumber;
        }
    }
    cashDeposit(amount,pin)
    {
        return this.operation("cash deposit",amount,pin);
    }
    getBalance(pin)
    {
        if (pin == this.Pin)
        {
            return this.CardNumber + " balance:" + this.Balance;
        }
        else
        {
            return "Wrong PIN for card: " + this.CardNumber;
        }
        
    }
}

class DebitCard extends BankCard
{
    constructor(cardNumber,balance,pin,limit)
    {
        super(cardNumber,balance,pin,limit);
    }
}

class CreditCard extends BankCard
{
    constructor(cardNumber,balance,pin,limit)
    {
        super(cardNumber,balance,pin,limit);
    }
    cashWithdrawal(amount,pin)
    {   
        if (this.Balance - amount >= (-1 * this.Limit) )
        {
            return this.operation("withdrawal",-1 * amount,pin);
        }
        else
        {
            return "This card type exeeds limit. Card number: " + this.CardNumber;
        }
    }
}


console.log("---------------------Credit-------------------------");
let creditCard = new CreditCard("001122334455",0,"1122",1000);
console.log(creditCard.getBalance("1100"));
console.log(creditCard.getBalance("1122"));
console.log(creditCard.cashDeposit(1000,"1122"));
console.log(creditCard.cashDeposit(900,"1102"));
console.log(creditCard.cashWithdrawal(500,"1102"));
console.log(creditCard.cashWithdrawal(600,"1122"));
console.log(creditCard.cashWithdrawal(600,"1122"));
console.log(creditCard.getBalance("1122"));
console.log(creditCard.cashWithdrawal(1600,"1122"));
console.log(creditCard.getBalance("1122"));

console.log("---------------------Debit--------------------------");
let debitCard = new DebitCard("001122334456",0,"1123",0);
console.log(debitCard.getBalance("1100"));
console.log(debitCard.getBalance("1123"));
console.log(debitCard.cashDeposit(1000,"1123"));
console.log(debitCard.cashDeposit(900,"1102"));
console.log(debitCard.cashWithdrawal(500,"1102"));
console.log(debitCard.cashWithdrawal(600,"1123"));
console.log(debitCard.cashWithdrawal(600,"1123"));
console.log(debitCard.getBalance("1123"));

console.log("----------------------------------------------------");
console.log(creditCard.getBalance("1122"));
console.log(debitCard.getBalance("1123"));
console.log("----------------------------------------------------");