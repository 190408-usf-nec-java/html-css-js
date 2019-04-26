/**
 * ES6 classes are 'class' definition that features
 * a more familiar syntax to people with experience with object
 * oriented programming. This does not mean that JavaScript supports
 * classes with same meaning of a class in Java. 
 * 
 * 'Syntactical Sugar'
 */

class Animal {

    constructor(a, b, c) {
        this.name = a;
        this.canSwim = b;
        this.canFly = c;
    }

    swim() {
        if (!this.canSwim) {
            // Template Literal
            console.log(`${this.name} drowned. :(`);
        } else {
            console.log(`${this.name} swims`);
        }
    }
}

const fish = new Animal('fish', true, false);
fish.swim();

const result = 20 < 10 ? 'yes' : 'no';
/**
 *   var assignment = predicate ? true-case : false-case;
 */
console.log(result);

let [a, b, c, d] = [5, 10, 15, 20];
console.log([a, b, c, d].join(' '));

const bad = (a < b) ? (c > d ? c > a : a) : (b < c) ? c : d;
console.log(bad);

/**
 * Create a sum function for finding the sum of two values
 * that can be called and correctly answers if it is called in this
 * format:
 *      sum(1, 2) -> 3
 * and this format:
 *      sum(1)(8) -> 9
 * 
 * string.subString(1, 2)(0);
 */

 const sum = function(a, b) {
    if (b === null) {
        return function(b) {
            return a+b;
        }
    }
    return a + b;
 }
