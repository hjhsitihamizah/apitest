const inputName = document.getElementById.innerHTML

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '24',
}
const { url, type, id } = apiData

// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}` //this line same as below line
const apiUrl = `${url}${type}/${id}`
fetch(apiUrl)
    .then((pokeData) => pokeData.json())
    .then((pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img class="center" src=${data.sprites.front_default}>
        <div class="details">
            <span class="center">Height: ${data.height}</span>
            <span class="center">Weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}
