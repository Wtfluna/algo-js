/*Classe*/

class Person {
    constructor(firstname, lastname) {
        /* Class instance*/
        this.firstname = firstname;
        this.lastname = lastname;
    }
    /*Method*/
    sayHello() {
        return `Hello, ${this.firstname} ${this.lastname}!`
    }
}
/* Instance*/
let person = new Person("Adeline", "Merle");
console.log(person.sayHello());