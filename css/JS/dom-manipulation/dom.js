/**
 * DOM - Document Object Model
 * POM - Project Object Model
 * 
 * 
 */


// Browser provides these objects for us to interact with:
// Window
// document

// Creating a new element in memory as a div
const circle = document.createElement('div');
// we attach the class circle
circle.classList.add('circle');
// However, this element is not a part of the dom yet

// Get a reference to an existing element in the dom
const myDiv = document.getElementById('my-div');
document.get
// Append the circle to that element as a child
myDiv.appendChild(circle);

/* Getting a reference to an existing element in the DOM
// 1. getElementById('id-name'); Gets a single element with the specified ID.
        Note: Behavior can be unpredictable if you reuse IDs, which you shouldn't.
   2. getElementsByClassname('class-name'); An array-like structure of elements.
   3. getElementsByTagName('tag-name'); Like above, but for tagname
   4. getElementsByName('name'); input elements often have names, we can retrieve 
            using names with this function
   5. querySelector('query'); Uses a CSS-like syntax to select elements.
        document.querySelector('#my-id > .children');
*/

const subcontainer = document.createElement('div');
subcontainer.classList.add('sub-container');

for(let x = 0; x < 10; x++) {
    const e = document.createElement('div');
    e.classList.add('square');
    subcontainer.appendChild(e);
    const p = document.createElement('p');
    e.appendChild(p);
    
    if (x % 2 === 0) {
        // Removing a class
        e.classList.remove('square');
        e.classList.add('circle');
    }


    // innerText vs innerHTML
    // innerText - Will only render as text
    // innerHTML - will process input as HTML and render appropriately
    p.innerText = 'Hello, this is text!';
}

// data attributes access - used to store metadata on elements
console.log(myDiv.dataset.id);

myDiv.appendChild(subcontainer);