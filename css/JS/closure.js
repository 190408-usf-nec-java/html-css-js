/**
 * Closure - is a way of keeping a variable in scope
 * by referencing in the return statement of an inner
 * function.
 */

const myFunction = function(x) {
    let y = x;
    let z = x;
    console.log(y);
    return function() {
        return y;
    }
}

const innerFun = myFunction(50);

const Cat = function(n) {
    let name = n;

    return {
        setName: function(n) {
            name = n;
        },
        getName: function() {
            return name;
        }
    }
}

const cat = Cat('Sparkles');
console.log(cat.name);

// In order for the console.log to work correctly,
// message needs to stay in scope even after myTimeout
// completes. Otherwise the variable would be inaccessible
// We can see that it does, in fact, stay in scope,
// because 'My Message' is printed correctly
let myTimeout = function(message) {
    setTimeout(() => console.log(message), 5000);
}

myTimeout('My Message');
console.log('this code will run before the message is printed')

setInterval(() => console.log('Hi!'), 1000);