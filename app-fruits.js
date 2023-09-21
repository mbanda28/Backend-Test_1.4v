
const url = 'https://api.escuelajs.co/api/v1/categories/';
const options = {
	method: 'GET',
};

async function res() {
    try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    
    result.forEach(element => {

        const idd = element.id;
        const names = element.name;
        const images = element.image

        crearDiv(idd,names,images)
    });

} catch (error) {
	console.error(error);
}
}
res()


const fruits = document.querySelector('.fruits')
const cardfruit = document.querySelector('.fruit-card')

function crearDiv(idd,names,images) {

    const frutasContainer = document.createElement("div")
    frutasContainer.classList.add("fruit-card")

    const cardaData = {
        title: `${idd}`,
        content: `${names}`,
        images: `${images}`
    }

    const cardContainer = `
    <img src="${cardaData.images}">
    <h1>${cardaData.title}</h1>
    <p>${cardaData.content}</p>
    `

    frutasContainer.innerHTML = cardContainer;
    fruits.appendChild(frutasContainer)
}