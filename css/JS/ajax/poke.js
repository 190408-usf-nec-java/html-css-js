const inputE = document.getElementById('number-input');
const submitE = document.getElementById('submit-button'); 

const updateContent = function(payload) {
    const data = JSON.parse(payload.srcElement.response);
    console.log(data);

    const img = document.getElementById('poke-img');
    const nameTag = document.getElementById('poke-name');

    img.src = data.sprites.front_default;
    nameTag.innerText = data.name;

}

const getPokeData = function(num) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;

   
    //XHR - XML HTTP Request
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        console.log(xhr.readyState);
    });
    xhr.open('get', url);

    xhr.addEventListener('load', updateContent);

    xhr.send();
}

const findPokemon = function() {
    const num = inputE.value;

    getPokeData(num);
}

submitE.addEventListener('click', findPokemon);

