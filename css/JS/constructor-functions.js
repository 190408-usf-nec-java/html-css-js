const Person = function(x, n) {
    this.x = x
    this.n = n
    this.sayHello = function() {
        // Template Literal
        console.log(`Hello, my name is ${this.n}`)
    }
}

/**
 * JavaScript features semi-colon injection, in which it will automatically
 * inject semicolons when it detects terminating statements.
 */

let abby = new Person(10, 'Abby')
abby.sayHello()

let billy = new Person(12, 'Billy');
billy.sayHello();