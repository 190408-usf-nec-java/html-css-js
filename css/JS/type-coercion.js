/**
 * In JavaScript, when values of different datatypes are used
 * together in an operation, JavaScript will attempt to coerce
 * the types to be compatible.
 * 
 * This means, that types can be changed at runtime by JavaScript
 * when operations include mixed types.
 */

let x = 12;
let y = '15';

// The + operator can be either numeric addition or string concatonation
// Due to the string being present in the operation, it assumes
// string concat, and converts numeric values to strings
let z = y + x + 5;

console.log(z);
console.log(typeof z);



x = 12;
y = '15';

// The - operator can only be used for numeric subtraction,
// as such any strings will be coerced to numbers prior to 
// calculation.
z = y - x - 5;

console.log(z);
console.log(typeof z);

let start = '0';
let end = '20'
let counter = 2;
for(let i = start; i < end; i += counter) {
    console.log(i);
}