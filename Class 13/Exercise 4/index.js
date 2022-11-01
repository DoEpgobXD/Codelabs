var human = /** @class */ (function () {
    function human() {
        this.birthYear = 0;
    }
    human.prototype.ageDifference = function () {
        console.log("The age difference between my animal and I is 15 years");
    };
    return human;
}());
var animal = /** @class */ (function () {
    function animal() {
        this.birthYear = 0;
    }
    return animal;
}());
animal.birthYear = 2005;
human.birhtYear = 2000;
