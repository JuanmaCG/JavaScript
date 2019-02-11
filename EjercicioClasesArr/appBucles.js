
// ejercicio 1

function eje1 (){
    let password = "";
    while(password != 'hola'){
        password = prompt('Introduce una contraseña');
    }
}

//ejercicio 2
function eje2 (){
    let password = "";
    do {
        password = prompt("Introduce una contrasena");
    }while(password != 'hola');
}

//ejercicio 3

function eje3(){
    for(let i = 10; i > 0; i --){
        console.log(i);
    }
}

// ejercicio 4
function eje4(){
    let numeros = [0,1,2,3,4,5];
    for(let i = 0; i < numeros.length; i++){
        console.log(`i vale ${i} y el valor de la posicion en el array es ${numeros[i]}`);
    }
}

//ejercicio 5
function eje5(){
    let names = ['Marta','Inma','Joaquín','Javier'];
    for(let name in names){
        console.log(names[name]);
    }
}

//ejercicio 6
function eje6(){
    let names = ['Marta','Inma','Joaquín','Javier'];
    for(let i = 0; i < names.length; i++){
        if(i == 1){
            console.log('continue');
        }else if(i == 2){
            console.log('break');
            break;
        }
        console.log('Iteracion ' + i);
    }
}