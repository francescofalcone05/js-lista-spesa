



// Creo un array con una serie di elementi.
const lista = [
    'Latte',
    'Uova',
    'Farina',
    'Pane',
    'Cereali',
    'Pasta',
    'Frutta',
    'Verdura'
];



let contenitoreElementi = document.getElementById('container-element')
let li = document.createElement('li')
let elemento = ""

// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.
for (let i = 0; i < lista.length; i++){
    //console.log(i)
     elemento = lista[i]
    console.log(i, elemento)

    //stampo in pagina
    contenitoreElementi.innerHTML=(`<li>${elemento}</li>`)



}

//Converto il ciclo FOR in un WHILE. Dovrete gestire il contatore manualmente.

let i = 0

while (i < lista.length){

    //console.log(i)

     elemento = lista[i]
    //console.log(elemento)
    
    //Inserisco ogni elemento in pagina
    // contenitoreElementi.innerHTML=(`<li>${elemento}</li>`)
    // console.log(contenitoreElementi)


    // metto dentro <li> elemento e poi li stampo n pagina dentro l'inner del contenitore
    // li.innerText = (elemento)
    // contenitoreElementi.innerHTML += (li)



    i++

}

i=0