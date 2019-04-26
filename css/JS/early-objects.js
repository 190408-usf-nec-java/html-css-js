/**
 * JavaScript doesn't really have classes. JavaScript does not support
 * 'classical' inheritance. Instead JavaScript uses Prototypal inheritance.  
 * 
 * Every object in JavaScript has a parent object, with a terminating relationship
 * at the 'class' Object. However, when can extend other objects, and this 
 * relationship is described literally as a reference on the __proto__ field.
 */

 const a = {
     name: 'Abby',
     favoriteColor: 'blue',
     sayHello: function() {
         console.log('Hello, my name is ' + this.name + 
            ', and my favorite color is ' + this.favoriteColor);
     }
 }

 console.log(a);

const b = Object.create(a);

console.log(b);
