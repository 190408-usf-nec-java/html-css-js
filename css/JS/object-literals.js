/**
 * Object Literals - A literal expression that evaluates to an object.
 * If you see {} with fields/functions being comma separated and definitions
 * and values separated by colons, then you're looking at an object literal.
 */

let obj = {
    x: 10,
    y: 20,
    sum: function() { return this.x + this.y }
};

console.log(obj.x);
console.log(obj.sum());