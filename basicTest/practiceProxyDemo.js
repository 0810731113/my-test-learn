/*var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey.toString()}!`);
        console.log(target);
        console.log(propKey.toString());
        console.log(receiver);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`);
        console.log(target);
        console.log(propKey);
        console.log(value);
        console.log(receiver);
        return Reflect.set(target, propKey, value, receiver);
    }
});

obj.count = 1*/
//  setting count!
// ++obj.count;

var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value;
    },
}

myObject.foo // 1

Reflect.set(myObject, 'foo', 2);
myObject.foo // 2

Reflect.set(myObject, 'bar', 3)
myObject.foo // 3