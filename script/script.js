const btnEl = document.querySelector('button#generate');
btnEl.addEventListener('click', createPalette);




//funzione per copiare il codice colore
function copyRGB(event){
    const textRGB = event.target.innerText;
    navigator.clipboard.writeText(textRGB)
    .then(() => {
        alert("Copied!");
    })
    .catch((error) => {
        console.log("Ops! Something went wrong :(", error);
    });
}


//funzione per generare tutta la palette
function createPalette(){
    const containerEl = document.querySelector('main#container');
    containerEl.innerHTML = ""; //svuoto il container

    for (let i = 0; i < 6; i++){        
        const artEl = document.createElement('article'); //varibile per l'articolo
        containerEl.appendChild(artEl);

        const divEl = document.createElement('div'); //variabile per il div del colore
        divEl.className = 'singleColor';
        let colorCode = getColor();
        divEl.style.backgroundColor = colorCode;

        const codeEl = document.createElement('p'); //variabile per il codice colore da copiare
        codeEl.className = 'color-code';
        codeEl.classList.add('copyable'); //classe per renderlo copiabile negli appunti
        codeEl.innerHTML = colorCode;
        codeEl.addEventListener('click', copyRGB); //evento per copiare il codice RGB

        const hexEl = document.createElement('p');
        hexEl.className = 'color-code';
        hexEl.classList.add('copyable');
        hexEl.innerHTML = rgbToHex(colorCode);
        hexEl.addEventListener('click', copyRGB);

        artEl.appendChild(divEl);
        artEl.appendChild(codeEl);
        artEl.appendChild(hexEl);
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


//funzione per generare un numero casuale tra un numero minimo e un numero massimo
function getNumbers(min, max){
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}


//funzione per convertire un numero decimale in esadecimale
function getHex (element) {
    let hex = element.toString(16);

    return hex.lenght == 1 ? "0" + hex : hex;  // condizione per aggiungere uno 0 davanti in caso esca una cifra singola
}


//funzione per convertire il colore d RGB a HEX
function rgbToHex (rgbString) {

    const result = rgbString.match(/\d+/g);
    const r = parseInt(result[0], 10);
    const g = parseInt(result[1], 10);
    const b = parseInt(result[2], 10);

    const elementToHex = (c) => c.toString(16).padStart(2, "0");

    return `#${elementToHex(r)}${elementToHex(g)}${elementToHex(b)}`;
}