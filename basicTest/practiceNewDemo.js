function Person (name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}

var person = new Person();
person.__proto__ === Person.prototype;


function newNew() {
    var constr = Array.prototype.shift.call(arguments);
    var obj = Object.create(constr.prototype);
    var result = constr.apply(obj, arguments);
    return result instanceof Object ? result : obj;
}

function _new(fn, ...arg){
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj,arg);
    return Object.prototype.toString.call(obj) === '[object Object]' ? obj : {};
}

var per1 = newNew(Person,'zhangshan');
per1.sayName();

var per2 = _new(Person, 'lisi');
per2.sayName();



