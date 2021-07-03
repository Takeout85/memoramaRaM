 
function calcularNumRan(min, max, loops) {
    const lista = [];
    for(let i = 0; i < loops; i++){
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        if(lista.includes(random)) {
            i--; 
        } else {
            lista.push(random);
        }
    }
    return lista;
    
}

const API = 'https://rickandmortyapi.com/api/character/';

const  anotherFunction = async (url__api) => {
    const linksImg = [];
    try {
        const fetechData = await fetch(url__api);
        const json = await fetechData.json();
        const lista = calcularNumRan(0, 19, 8);
        lista.forEach(e => {
            linksImg.push(json.results[e].image)
        }); 
        
    }catch(err) {
        console.log(err);
    }
    return linksImg;
}


async function asignarImage () {
    const lista = await calcularNumRan(0, 15, 16);
    const cajas = await document.getElementsByClassName("card");
    const links = await anotherFunction(API);
    links.forEach(e => {
        links.push(e)
    });
    for(let i = 0; i < cajas.length; i++) {
        cajas[i].setAttribute("id", `${lista[i]}`);
    }
    const listaId = calcularNumRan(0, 15, 16);

    for(let i = 0; i < listaId.length; i++){
        let imgId = document.getElementById(`${listaId[i]}`)
        imgId.setAttribute("src", `${links[i]}`);
    } 
}
