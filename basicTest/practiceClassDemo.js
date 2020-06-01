class Parent{
    constructor(){
        this.name = 'parent';
        this.age = '40';
    }
    eat(){
        console.log('eat');
    }
    static b(){
        return 2;
    }
}

new Parent();

class Child extends Parent{
    constructor(){
        super();
        this.name = 'child';
    }
    smoking(){
        console.log('smoking');
    }
    static a(){
        return 1;
    }
}

let child = new Child();
console.log(child.name,child.age,child.eat(),child.smoking,Child.b())

function _classCallCheck(instance, constructor){
    if(!(instance instanceof constructor)){
        throw new Error(`Class constructor child cannot be invoked without new`);
    }
}

function defineProperty(target,arr){
    for(let i = 0 ; i < arr.length; i++){
        Object.defineProperty(target, arr[i].key,{
           ...arr[i] ,
            configurable:true,
            enumerable: true,
            writable:true,
        });
    }
}

function _createClass(constructor,protoPropertys,staticPropertys){
    if(protoPropertys.length){
        defineProperty(constructor,protoPropertys);
    }
    if(staticPropertys.length){
        defineProperty(constructor,staticPropertys);
    }
}

let Parent = function(){
    function P(){
        _classCallCheck(this,P);
        this.name = 'parent';
    }

    _createClass(P, [
        {
            key: 'eat',
            value: function(){
                console.log('吃');
            }
        }
    ],[
        {
            key: 'b',
            value: function(){
                return 2;
            }
        }
    ]);

}();

function _inherits(subClass,superClass){
    subClass.prototype = Object.create(superClass.prototype, {
        constructor:{value: subClass}
    });
    Object.setPrototypeOf(subClass, superClass);
}


let Child = (function (Parent){
    _inherits(C,Parent);

    function C(){

    }

})(Parent);



