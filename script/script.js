const btnEl = document.querySelector('button#generate');




//funzione per generare tre numeri per l'RGB
function getColor(colorsNumber){
    const colorArray = [];
    while (colorArray.lenght < colorsNumber) {
        newColorNum = getNumbers(0, 255);
        colorArray.push(newColorNum);
        return colorArray;
    }
}


//funzione per genrare un numero casuale tra un numero minimo e un numero massimo
function getNumbers(min, max){
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}