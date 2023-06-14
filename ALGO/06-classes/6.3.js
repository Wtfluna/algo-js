class Animal {
    constructor(greeting, name) {
        this.greeting = greeting;
        this.name = name;
    }

    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

/* 2 new classes*/
class Cat extends Animal {
    constructor(name) {
        /* super = classe enfant permet d'appeler la classe parente. Permet d'éxécuter le code du constructeur de la classe parente avant d'éxécuter le code de la classe enfant. */
        super("Miaou", name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Wouf", name);
    }
}

/*Instances*/

let cat = new Cat("Aroune");
let dog = new Dog("Cookie");

console.log(cat.sayHello());
console.log(dog.sayHello());