let obj1 = {};
let obj2 = { prop1: 'value1', prop2: 'value2' };
let obj3 = { method: function() { console.log('Hello'); } };

let obj4 = new Object();
let obj5 = new Object({ prop1: 'value1', prop2: 'value2' });
let obj6 = new Object({ method: function() { console.log('Hello'); } });

// 3
let baseObject = { prop1: 'baseValue' };
// Через Object.create()
let obj7 = Object.create(baseObject);
// Через __prototype__
function CustomObject() {}
CustomObject.prototype = baseObject;
let obj8 = new CustomObject();


// 4 Базовий об'єкт engineer
let engineer = {
    name: 'Andrii',
    role: 'Engineer',
    sayHello: function() {
        console.log('Hello, I am an engineer.');
    }
};

// Унаслідування QA_engineer від engineer
let QA_engineer = Object.create(engineer);
QA_engineer.role = 'QA Engineer';
QA_engineer.testSoftware = function() {
    console.log('Testing software...');
};

// Деталі по всім полям
console.log(engineer.name); // Andrii
console.log(QA_engineer.name); // Andrii
console.log(QA_engineer.role); // QA Engineer
engineer.sayHello(); // Hello, I am an engineer.
QA_engineer.sayHello(); // Hello, I am an engineer.
QA_engineer.testSoftware(); // Testing software...


// 5
let person = {
    firstName: 'Andii',
    lastName: 'Dytynenko',
    greet: function() {
        console.log('Hello, I am a person.');
    }
};

let newEngineer = Object.create(person);
newEngineer.role = 'Software Engineer';

console.log(newEngineer.firstName); // Andrii
console.log(newEngineer.lastName); // Dytynenko
console.log(newEngineer.role); // Software Engineer
newEngineer.greet(); // Hello, I am a person.
