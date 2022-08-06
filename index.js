class Cookie {
    constructor(name, price, ingridients, type){
        this.name = name;
        this.price = price;
        this.ingridients = ingridients;
        this.type = type;
    }
}

class Chocolate extends Cookie {
    constructor(name, price, ingridients, type, isSweet){
        super(name, price, ingridients, type);
        this.isSweet = isSweet;
    }
}
class Sweet extends Cookie {
    constructor(name, price, ingridients, type, isSweet){
        super(name, price, ingridients, type);
        this.isSweet = isSweet;
    }
}
class Strawberry extends Cookie {
    constructor(name, price, ingridients, type, isSweet){
        super(name, price, ingridients, type);
        this.isSweet = isSweet;
    }
}

class Kitchen {
    constructor(container){
        this.container = container || [];
    }
    bake(cookie){
        this.container.push(cookie); 
    }
    eat(cookie){
        this.container.pop(cookie);
    }
    addSugar(){
        this.isSweet === "true";
    }
    showCookies(){
        console.log(this.container);
    }
}

let chocoCookie = new Chocolate("Cadbury", 20000, "Swiss Chocolate", "Cookie", false);
let sweetCookie = new Sweet("Yuppy", 15000, "Sugar", "Cookie", true);
let strawberryCookie = new Strawberry("Morin", 17000, "Strawberry", "Cookie", false);
let chocoCookie2 = new Chocolate("Tobleron", 22000, "Belgian Chocolate", "Cookie", false); 

const kitchen = new Kitchen();

kitchen.bake(chocoCookie);
kitchen.bake(chocoCookie2);
kitchen.bake(sweetCookie);
kitchen.bake(strawberryCookie);

kitchen.showCookies(); 




