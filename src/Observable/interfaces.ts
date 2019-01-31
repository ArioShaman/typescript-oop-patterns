interface  Subject{
    registerObserver(o:Observer):void;
    removeObserver(o:Observer):void;
    nodifyObserver():void;
}

interface Observer{
    update(temp:number, humidity:number, pressure:number):void;
}

interface DisplayElement{
    display():void;
}

export { Subject, Observer, DisplayElement };