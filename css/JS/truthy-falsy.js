
console.log('Test!');

/**
 * Truthy-Falsy
 * 
 * 1. All values in JavaScript can be evaluated
 * as a boolean. Almost all values are truthy except
 * a small set of falsy values.
 *      Falsy values include: undefined, null,
 *          empty string, 0, NaN
 * 
 * 2. The value returned from the logical operation
 * is equal to that of the last value that must
 * be evaluated to discern the logical value.
 */

console.log(true || false);
console.log(true && false);

if(true || false) {
    console.log('true || false is true');
}

if('true' || false) {
    console.log('"true" || false is true');
}

if('true' && 'false') {
    console.log('"true" && "false" is true');
}

if(1 && 0) {
    console.log('1 && 0 is true');
} else {
    console.log('1 && 0 is false');
}

if(1) {
    console.log('1 is truthy');
}

if (0) {
    console.log('0 is truthy');
} else {
    console.log('0 is falsy');
}

const x = 0 || 'dog';
console.log(x);

console.log('cat' && 0);