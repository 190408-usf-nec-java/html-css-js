const boxes = document.getElementsByClassName('box');

for(let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    element.addEventListener('click', (e) => {
        element.classList.add('bubbled');
        console.log('Bubbling');
        if (i === 10) {
            e.stopPropagation();
        }
    });
    element.addEventListener('click', (e) => {
        element.classList.add('captured');
        console.log('Capturing');
    }, true)
}