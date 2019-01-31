import { FlyBehavior, QuackBehavior } from 'interfaces';

class FlyWithWings implements FlyBehavior {
    constructor() {
    }

    public fly(){
        console.log("I can fly");
    }
}

class FlyNoWay implements FlyBehavior {
    constructor() {
    }
    public fly(){
        //empty realization
    }
}

class FlyRocketPowered implements FlyBehavior{
    constructor(){

    }
    public fly(){
        console.log("I'm flying with a rocket");
    }
}

class Quack implements QuackBehavior {
    constructor(){

    }

    public quack(){
        console.log("Quack");
    }
}


class Squeak implements QuackBehavior {
    constructor(){

    }
    
    public quack(){
        console.log("Wiiiiiiiiiiiii");
    }
}

class MuteQuack implements QuackBehavior{
    constructor(){

    }
    public quack(){
        //empty realization
    }
}


class Duck {
    public quackBehavior:QuackBehavior;
    public flyBehavior:FlyBehavior;

    public name:string;
    
    constructor(name:string) {
        this.name = name;
    }

    public sayName(){
        console.log("hey I'm " + this.name + ". I'm just a duck");
    }

    //делегирует поведение обьекту, на который ссылается quackBehavior 
    public performQuack():void{
        this.quackBehavior.quack();
    }

    //делегирует поведение обьекту, на который ссылается flyBehavior 
    public performFly():void{
        this.flyBehavior.fly();
    }    

    //динамическое наделение обьекта поведением
    public setFlyBehavior(fb:FlyBehavior){
        this.flyBehavior = fb;
    }
    public setQuackBehavior(qb:QuackBehavior){
        this.quackBehavior = qb;
    }
}

class MallardDuck extends Duck {   
    constructor(name:string) {
        super(name);
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings(); 
    }
    public sayName(){
        console.log("hey I'm " + this.name + ". I'm a real MallardDuck");
    }

}

class ModelDuck extends Duck {   
    constructor(name:string) {
        super(name);
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay(); 
    }
    public sayName(){
        console.log("hey I'm " + this.name + ". I'm a real ModelDuck");
    }

}



export { MallardDuck, Duck, MuteQuack, ModelDuck, FlyRocketPowered }