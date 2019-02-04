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