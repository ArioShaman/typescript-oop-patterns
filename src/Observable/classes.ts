import { Subject, Observer, DisplayElement } from "./interfaces";

class WeatherData implements Subject{    

    public tempreature:number = 0;//nемпература
    public humidity:number = 0;//влажность
    public pressure:number = 0;//давление
    public observers:Array<Observer>;

    constructor() {
        this.observers = new Array<Observer>();
    }

    public getTempreature(){
        return this.tempreature;
    }
    public getHumidity(){
        return this.humidity;
    }
    public getPressure(){
        return this.pressure;
    }
    public measurementsChanged(){
        this.nodifyObserver();
    }


    public registerObserver(o:Observer){
        this.observers.push(o);
    }

    public removeObserver(o:Observer){
        let index = this.observers.indexOf(o);
        if(index >= 0){
            this.observers.splice(index, 1);
        }
    }
    public nodifyObserver(){
        for(let o of this.observers){
            o.update(this.tempreature, this.humidity, this.pressure);
        }
    }
    public setMessurements(temp:number, humidity:number, pressure:number){
        this.tempreature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

//дисплей выводит текущие значения переменных обьекта WeatherData
class CurrentConditionsDisplay implements Observer, DisplayElement{
    private tempreature:number = 0;//nемпература
    private humidity:number = 0;//влажность
    private pressure:number = 0;//давление
    private weatherData:Subject;
    private name:string;

    constructor(name:string, weatherData:Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
        this.name = name;
    }

    public update(temp:number, humidity:number, pressure:number){
        this.tempreature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();        
    }

    public display(){
        console.log(this.name + "\n\n");
        console.log("Current temperature:   " + this.tempreature +" degrees");
        console.log("Current humidity:   " + this.humidity + " %");
        console.log("Current pressure:   " + this.pressure + "bar\n");
    }
}

//дисплей выводит минимальное, среднее и максимальное значение
class StatisticDisplay implements Observer{
    
    constructor() {
    }

    public update(temp:number, humidity:number, pressure:number){

    }
    public display(){
        //вывод параметров
    }
}

export { CurrentConditionsDisplay, WeatherData }