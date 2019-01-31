import * as _ from "lodash";
import { FlyBehavior, QuackBehavior } from './SimUDuck/interfaces';
import { MallardDuck, Duck, ModelDuck, FlyRocketPowered } from "./SimUDuck/classes";
import { WeatherData, CurrentConditionsDisplay } from './Observable/classes';

document.body.innerHTML = "Hellow from ts";


// ### SIMUDUCK
// var mDuck1 = new MallardDuck("John");
// mDuck1.sayName();
// mDuck1.performFly();

// var duck1 = new Duck("Donald");
// duck1.sayName();
// duck1.setFlyBehavior(new FlyRocketPowered());
// duck1.performFly();
// duck1.performFly();


//Observable
var weatherData = new WeatherData();

var currentDisplay1 = new CurrentConditionsDisplay("Display1", weatherData);
var currentDisplay2 = new CurrentConditionsDisplay("Display2", weatherData); 

weatherData.setMessurements(40, 55, 33.4);
weatherData.setMessurements(16, 65, 33.4);
weatherData.setMessurements(-10, 30, 45.4);
//стр. 102
