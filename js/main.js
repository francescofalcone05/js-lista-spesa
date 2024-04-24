



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


// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.
for (let i = 0; i < lista.length; i++){
    //console.log(i)
    let elemento = lista[i]
    console.log(i, elemento)

    //stampo in pagina
    contenitoreElementi.innerHTML=(`<li>${elemento}</li>`)



}

//Converto il ciclo FOR in un WHILE. Dovrete gestire il contatore manualmente.

