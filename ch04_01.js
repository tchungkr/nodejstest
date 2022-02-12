var person1 = {name:'소녀시대',age:20};
var person2 = {name:'걸스',age:21};

function Person(name,age) {
    this.name = name;
    this.age = age;
    console.log('start');
}

Person.prototype.walk = function(speed) {
    console.log(this.name + ' spee = ' + speed);
};

var person3 = new Person('티아라',23);

console.log(person1.name, person1.age);
person3.walk(10);
