const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
const options = {
	method: 'GET',
};

const cards = document.querySelector('.cards')
const btn = document.querySelector('.cta-button')
const gat = document.querySelector('.cat')


fetch(url)
    .then(response => response.json()) // o response.text() si la respuesta no es JSON
    .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
        // console.log(data);
        
        const resultados = data.results 
        // console.log(resultados)
        resultados.forEach(element => {
            const url = element.url
            const name = element.name
            // console.log(url)
            // console.log(name)
            crearDiv(url,name)
        });
    })
    .catch(error => {
    // Manejo de errores
        console.error('Error:', error);
    });


function crearDiv(name,url) {
    const cardaData = {
        title: `${name}`,
        content: `${url}`
    }

    const card = document.createElement("div")

    const cardContainer = `
    <h2>${cardaData.content}</h2>
    <p>${cardaData.title}</p>
    `
    card.innerHTML = cardContainer;
    cards.appendChild(card)
}

btn.addEventListener('click', () => {
    cards.classList.toggle('disable')
})


//


// Ruta para buscar información de un Pokémon por su nombre o número de Pokédex
fetch('https://pokeapi.co/api/v2/type/3', async (req, res) => {
    const { pokemonNameOrId } = req.params;

    try {
        const response = await get(`https://pokeapi.co/api/v2/type/3`);
        const pokemonData = response.data;
        res.json(pokemonData);
    } catch (error) {
        res.status(404).json({ error: 'Pokémon no encontrado' });
    }
    });


const cat = "https://api.thecatapi.com/v1/images/search?limit=2";



async function loadRandomMichis(){
    const res = await fetch(cat);
    const data = await res.json();

        const img = document.querySelector('img');
        img.src = data[0].url;
}
loadRandomMichis()
async function favoritiesMichis(){
    const res = await fetch(cat);
    const data = await res.json();

        const img = document.querySelector('img');
        img.src = data[0].url;
}
favoritiesMichis()

