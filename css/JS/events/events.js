const switchClasses = function(e) {
    switch(this.classList[0]) {
        case 'a':
            this.classList.remove('a');
            this.classList.add('b');
            return;
        case 'b':
            this.classList.remove('b');
            this.classList.add('c');
            return;
        case 'c':
            this.classList.remove('c');
            this.classList.add('a');    
        }
}


const a = document.querySelectorAll('.a, .b, .c');
for(let i = 0; i < a.length; i++) {
    let element = a[i];
    element.addEventListener('mouseleave', switchClasses);
    element.addEventListener('mouseenter', switchClasses);
    element.addEventListener('click', () => {
        console.log('Hi!');
    });
}
// a.onclick = switchClasses; <-- bad :(

// How to attach events to elements in HTML
// Several methods to accomplish this
// First we will demonstrate how not to do it
// 1. HTML directly as an attribute >:(
// 2. Same way, but using JS
// 3. addEventListener method

// Using addEventListener we can attach multiple
// functions to the same element for the same event
