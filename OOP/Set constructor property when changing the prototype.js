//Define the constructor property on the Dog prototype.

Dog.prototype = {
    constructor: Dog,

    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log(`My name is ${this.name}`);
    }
};