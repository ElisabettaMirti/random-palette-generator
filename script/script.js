const btnEl = document.querySelector('button#generate');




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