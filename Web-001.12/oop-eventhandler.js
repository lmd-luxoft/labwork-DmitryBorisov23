class BusinessService
{

    handleEvent(e)
    {
        console.log(e.type)
        switch(e.type)
        {
            case 'mousedown' : 
                this.onMouseDown(e);
                break;
            case 'mouseup' : 
                this.onMouseUp(e);
                break;
            case 'click' : 
                this.onClick(e);
                break;
        }
    }
    onMouseDown(e)
    {
        console.log("mouse down");
    }
    onMouseUp(e)
    {
        console.log("mouse up");
    }
    onClick(e)
    {
        console.log("mouse click");
    }
}

class BusinessServiceNew extends BusinessService
{

    onClick(e)
    {
        console.log("mouse click");
        console.log("mouse 2");
    }
}