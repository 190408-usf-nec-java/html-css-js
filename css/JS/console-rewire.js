let log = console.log;
console.log = function(...x) {
    const containerE = document.getElementById('container');
    log(containerE);
    for(let i of x) {
        const p = document.createElement('p');
        p.innerText = i;
        containerE.appendChild(p);
    }
}
