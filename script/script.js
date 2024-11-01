const btnEl = document.querySelector('button#generate');

btnEl.addEventListener('click', createPalette);


//funzione per generare tutta la palette
function createPalette(){
    const containerEl = document.querySelector('main#container');
    containerEl.innerHTML = ""; //svuoto il container

    for (let i = 0; i < 6; i++){        
        const artEl = document.createElement('article'); //varibile per l'articolo
        containerEl.appendChild(artEl);

        const divEl = document.createElement('div'); //variabile per il div del colore
        divEl.className = 'singleColor'
        let colorCode = getColor();
        divEl.style.backgroundColor = colorCode;

        const codeEl = document.createElement('p'); //variabile per il codice colore da copiare
        codeEl.className = 'color-code';
        codeEl.innerHTML = colorCode;

        artEl.appendChild(divEl);
        artEl.appendChild(codeEl);
    }
}


//funzione per generare tre numeri per l'RGB
function getColor(){
    const colorArray = [];
    while (colorArray.length < 3) {
        let newColorNum = getNumbers(0, 255);
        colorArray.push(newColorNum);
    }
    let rgbString = 'rgb(' + colorArray.join(',') + ')'; // Creazione della stringa RGB;
    return rgbString;
}


//funzione per genrare un numero casuale tra un numero minimo e un numero massimo
function getNumbers(min, max){
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}