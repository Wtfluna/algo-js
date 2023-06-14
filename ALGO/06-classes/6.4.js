class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    /* Getter: concatenation (action de combiner/joindre 2 ou plusieurs chaines de caractères) of firstname and lastname properties with a space between*/
    get name() {
        return `${this.firstname} ${this.lastname}`;
    }
    /* Setter: takes a "fullName" string and uses "split" to divide it into an array of two elements based on the space delimiter*/
    set name(fullName) {
        const [first, last] = fullName.split(" ");
        this.firstname = first;
        this.lastname = last;
    }
}
/* Instance */
let person = new Person("Adeline", "Merle");
console.log(person.name);

person.name = "Renaud Vandegar";
console.log(person.name);

