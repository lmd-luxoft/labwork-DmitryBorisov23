class Report
{
    constructor(author,reportDate)
    {
        this.Author = author;
        this.Date = reportDate;
    }
    getHeader()
    {
        return "Author: " + this.Author;
    }
    getBody()
    {
        return "((NO CONTENT))";
    }
    getFooter()
    {
        return "Report Date: " + this.Date;
    }
    Create()
    {
        return (this.getHeader() + this.getBody() + this.getFooter());
    }
}

let stelsReport = {
    Author: "Pavel",
    Date: new Date(),
    getHeader: () => "Author: " + stelsReport.Author,
    getBody: () => "((NO CONTENT))",
    getFooter: () => "Report's date " + stelsReport._Date,
    Create: () => stelsReport.getHeader() + stelsReport.getBody + stelsReport.getFooter()
}

class ConcreteReport1 extends Report
{    
    constructor(author,reportDate)
    {
        super(author,reportDate)
    }

    getBody()
    {
        return "<ol><li>item1</li><li>item2</li2></ol>";
    }

}

class ConcreteReport2 extends ConcreteReport1
{    
    constructor(author,reportDate)
    {
        super(author,reportDate)
    }
    getHeader()
    {
        return "<h1>" + super.getHeader() + "</h1>";
    }
}


let myReport = new Report("Pavel",new Date());
let myReport2 = new Report("Zofia",new Date());
console.log(myReport.Create());
console.log(stelsReport.Create());

let reportWithBody = new ConcreteReport1("Pavel",new Date());
console.log(reportWithBody.Create());

let reportWithH1 = new ConcreteReport2("Pavel",new Date());
console.log(reportWithH1.Create());