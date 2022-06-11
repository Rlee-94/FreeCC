//Use Object.create to make two instances of Animal named duck and beagle.

function Animal(name, type) {
    this.name = name
    this.type = type
}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log(`${this.name} the ${this.type} is eating`);
    },
    walking: function () {
        console.log(`${this.name} the ${this.type} is walking`)
    }
};

// Only change code below this line
Animal.prototype = Object.create(Animal.prototype); // Change this line
Animal.prototype = Object.create(Animal.prototype); // Change this line

let duck = new Animal('Donald', 'duck')
let beagle = new Animal('Billy', 'beagle')

duck.eat()
duck.walking()
beagle.eat()
beagle.walking()