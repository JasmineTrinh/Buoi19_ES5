/* ES6 */

class Student{
    constructor(_name){
        this.name = _name;
    }
}
let studentNew = new Student("Hoa");

console.log(studentNew.name);

/* Inheritance */

class Mother{
    constructor(_name){
        this.name = _name;
    }
    eyesColor(){
        console.log("red");
    }
}

class Me extends Mother{
    skinColor(){
        console.log("brown");
    }
}

let me = new Me("Hoa");
me.eyesColor();
me.skinColor();

/* Override */

class Person {
    constructor(_name){
        this.name = _name
    }

    // getName(){
    //     return this.name;
    // }
}
Person.prototype.getName = function(){ //tiện lợi hơn trong việc sửa chữa.
    return this.name;
}

class Monkey extends Person {
    
}
Monkey.prototype.getName = function(){
    return "Hello " + this.name;
}
let monkey = new Monkey("Khỉ");
console.log(monkey.getName());

class People {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    getInfo(){
        console.log(`Tên: ${this.name}
Tuổi: ${this.age}`);
    }
}

class Monkeys extends People{
    constructor(_name,_age,_eat){
        super(_name,_age); //đã kế thừa từ People nên ko cần viết lại.
        this.eat = _eat;
    }
    getInfo(){
        super.getInfo();
        console.log(`Ăn: ${this.eat}`);
    }
}

let monkeys = new Monkeys("Khỉ",5,"Chuối");
monkeys.getInfo();