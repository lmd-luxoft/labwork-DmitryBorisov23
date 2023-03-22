class BankCard
{
    constructor(cardNumber,balance,pin,cardType)
    {
        this.CardNumber = cardNumber;
        this.Balance = balance;
        this.Pin = pin;
        this.CardType = cardType;
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
        if (this.Balance - amount >= 0 || this.CardType == "Debit")
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

console.log("---------------------Credit-------------------------");
let creditCard = new BankCard("001122334455",0,"1122","Credit");
console.log(creditCard.getBalance("1100"));
console.log(creditCard.getBalance("1122"));
console.log(creditCard.cashDeposit(1000,"1122"));
console.log(creditCard.cashDeposit(900,"1102"));
console.log(creditCard.cashWithdrawal(500,"1102"));
console.log(creditCard.cashWithdrawal(600,"1122"));
console.log(creditCard.cashWithdrawal(600,"1122"));
console.log(creditCard.getBalance("1122"));

console.log("---------------------Debit--------------------------");
let debitCard = new BankCard("001122334456",0,"1122","Debit");
console.log(debitCard.getBalance("1100"));
console.log(debitCard.getBalance("1122"));
console.log(debitCard.cashDeposit(1000,"1122"));
console.log(debitCard.cashDeposit(900,"1102"));
console.log(debitCard.cashWithdrawal(500,"1102"));
console.log(debitCard.cashWithdrawal(600,"1122"));
console.log(debitCard.cashWithdrawal(600,"1122"));
console.log(debitCard.getBalance("1122"));

console.log("----------------------------------------------------");