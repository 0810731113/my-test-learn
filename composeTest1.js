function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function a(str){
    return str + ' first';
}

function b(str){
    return str.toUpperCase();
}

function c(str){
    return str + 'wo shi final';
}

const funArr = [a,b];

const result = compose(c,b,a)('libo');

console.log(typeof result);
console.log(result);