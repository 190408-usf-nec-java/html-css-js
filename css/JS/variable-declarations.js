/**
 * 1. var
 * 2. let
 * 3. const
 * 4. 
 */

// Declaring with no keyword will result in a global
// declaration, probably don't do it
x = 20;
console.log(x);

/**
 * var - has two possible scopes - global
 * and function scoped. When used outside of
 * a function, it will be global, and when used
 * in a function, it will be scoped to that function
 * 
 * var declared variables are 'hoisted'. Hoisting is 
 * the process of variable declarations being hoisted
 * to the top of their scope.
 * 
 * 
 * let - Block scoped to whatever it is defined
 * within.
 * 
 * const - same scoping as let, but cannot be 
 * reassigned.
 */

console.log(y);
var y = 15;
let z = 19;
console.log(z);


let f = function() {
    if(false) {
        var d = 20;
        let k = 10;
    }
    console.log(d);
    console.log(k);
}

// f();

const c = 20;
c = 21;