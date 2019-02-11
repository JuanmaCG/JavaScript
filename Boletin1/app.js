//Ejercicio 1

function nombre (nombre, edad){
    prompt(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad + 1} años`);
}

//Ejercicio 2

function geometrica () {
    let figura = prompt('Introduzca una figura');
    let area;
    switch (figura){
        case 'triangulo':
        area = prompt('Base') * (prompt('altura') / 2);
        break;
        case 'rectangulo':
        area = prompt('Base') * prompt('Altura');
        break;
        case 'circulo':
        area = Math.PI * (prompt('Radio') * 2);
        break;
        default:
        alert('Introduce una figura correcta');
    }
    alert('La figura tiene un area de ' + area + ' cm cuadrados.');
}

// Ejercicio 3

function par (){
    let numero = prompt('Introduce un numero');
    for (let i = 1; i <= numero; i++){
        if(i % 2 === 0){
            console.log('El numero ' + i + ' es par')
        }else{
            console.log('El numero ' + i + ' es impar');
        }
    }
}

// Ejercicio 4

function primo(){
    let numero = prompt('Introduzca un numero');
    let primo = true;
    for(let i = 2; i < numero; i ++){
        if(numero % i == 0){
            primo = false;
        }
    }
    if(primo){
        console.log('El numero ' + numero + ' es primo');
    }else if(!primo){
        console.log('El numero ' + numero + ' no es primo');
    }    
}

//Ejercicio 5

function factorial (){
    let numero = prompt('Introduce un numero');
    let total = 1;
    for (let i = numero; i > 0; i --){
        total *= i;
    }
    return total;
}

//Ejercicio 6

function indefinido(){
    let total = 0;
    let contador = 0;
    do {
        total += parseInt(prompt('Introduce un numero'));
        contador++;
    }while(total < 51);
    return [total, contador];
}

//Ejercicio 7

let arrayUno = [];
let arrayPar = [];
let arrayImpar = [];
function generaArray(){
    for(let i = 0; i < 5; i++){
        arrayUno[i] = Math.round((Math.random()*10));
    }
    return arrayUno;
}

function multiplica(){
    for(let i = 0; i < arrayUno.length; i++){
        let random = arrayUno[i] * Math.round((Math.random()*10));
        if(random % 2 == 0){
            arrayPar[i] = random;
        }else{
            arrayImpar[i] = random;
        }
    }
    console.log(arrayImpar);
    console.log(arrayPar);
}


// Ejercicio 8

const	letras	=	['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

function dniLetra(){
    let total = parseInt(prompt('Introduce tu numero de DNI'));

    let letra = letras[(total % 23)];
    return 'Tu DNI es ' + total + letra;
}

//Ejercicio 9

function palabra (){
    let consonantes = 0;
    let vocales = 0;
    let palabra = prompt('Introduce una palabra');
    for(let i = 0; i < palabra.length; i++){
        if(palabra.charAt(i) == 'a' || palabra.charAt(i) == 'e' || palabra.charAt(i) == 'i' || palabra.charAt(i) == 'o' || palabra.charAt(i) == 'u'){
            vocales++;
        }else {
            consonantes++;
        }
    }
    return `La palabra tiene ${consonantes} consonantes, ${vocales} vocales y una longitud de ${palabra.length} letras `;
}


// Ejercicio 10

let colores = ["azul",	 "amarillo",	 "rojo",	"verde",	"rosa"]	

function encuentraColor(){
    let color = prompt('Elije un color');
    let encontrado = false;
    for(let i = 0; i < colores.length; i++){
        if(color === colores[i]){
            encontrado = true;
        }
    }
    if(encontrado){
        return `El color existe`; 
    }else{
        return 'El color no existe';
    }
    
    
}