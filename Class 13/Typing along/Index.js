console.log("Test");
//demo for classes
//npx tsc --init (direction)
//npx tsc file-name.ts (Transpile)
//let user = {
//name:"john",
//age: 10,
//occupation:"doctor"
//}
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
        this.Occupation = '';
    }
    User.prototype.eat = function () {
        console.log("I am eating");
    };
    return User;
}());
var user = new User();
user.name = "john";
user.age = 20;
user.Occupation = "doctor";
user.eat();
console.log(user);
