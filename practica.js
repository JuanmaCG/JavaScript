/* //Ejercicio 1

var funcion = function(v1, v2, v3, v4, v5){
    var media = (v1 + v2 + v3 + v4 + v5) / 5;
    return media;
}

//Ejercicio 2

var funcion2 = function(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;
    if(media < 5 ){
        alert("Estas suspenso");
    }else {
        alert("Estas aprobado");
    }
}



//Ejercicio 3

var arrayNum = [];
for(i = 0; i < 15; i++){
    var meter = prompt("Introduce un numero");
    var numero = parseInt(meter);
    arrayNum[i] = numero;
}
arrayNum.sort();
arrayNum.reverse();
alert(arrayNum[0]);

//EJERCICIO 4

var arrayFrase = [];
var funcion3 = function(numero){
    for(i = 0; i < numero; i++){
        var frase = prompt("Escribe una frase");
        arrayFrase[i] = frase;
    }
    alert("La primera frase ingresa es: " + arrayFrase[0]);
    alert("La ultima frase ingresada es: " + arrayFrase[numero -1]);
}

// EJERCICIO 5

var coche = {
    marca: "ford",
    modelo: "focus",
    anyo: 2000
}

var coche2 = {
    marca: "seat",
    modelo: "ibiza",
    anyo: 2001
}

var coche3 = {
    marca: "ferrari",
    modelo: "el ferrari",
    anyo: 2003
}

document.write('<table border= "1px solid black">' + '<tr>' + '<td>' + coche.marca + '<td>' + coche.modelo + '<td>' + coche.anyo);
document.write('<tr>' + '<td>' + coche2.marca + '<td>' + coche2.modelo + '<td>' + coche2.anyo);
document.write('<tr>' + '<td>' + coche3.marca + '<td>' + coche3.modelo + '<td>' + coche3.anyo);

// EJERCICIO 6

var producto_alimento = {
    codigo: 1,
    nombre: 'malocoton',
    precio: 100,
    imprimeDatos (){
        document.writeln('<h1>' + producto_alimento.codigo + '<h1>' + producto_alimento.nombre + '<h1>' + producto_alimento.precio);
    }
}

var producto_alimento2 = {
    codigo: 2,
    nombre: 'pera',
    precio: 300,
    imprimeDatos (){
        document.writeln('<h1>' + producto_alimento2.codigo + '<h1>' + producto_alimento2.nombre + '<h1>' + producto_alimento2.precio);
    }
}

var producto_alimento3 = {
    codigo: 3,
    nombre: 'sandia',
    precio: 400,
    imprimeDatos (){
        document.writeln('<h1>' + producto_alimento3.codigo + '<h1>' + producto_alimento3.nombre + '<h1>' + producto_alimento3.precio);
    }
}

var array_productos = [producto_alimento, producto_alimento2, producto_alimento3];

function imprimeDatos(){
    document.writeln('<h1>' + producto_alimento.codigo + '<h1>' + producto_alimento.nombre + '<h1>' + producto_alimento.precio);
    document.writeln('<h1>' + producto_alimento2.codigo + '<h1>' + producto_alimento2.nombre + '<h1>' + producto_alimento3.precio);
    document.writeln('<h1>' + producto_alimento3.codigo + '<h1>' + producto_alimento3.nombre + '<h1>' + producto_alimento3.precio);
}
 */
// EJERCICIO 7


var f = document.getElementById('formu');
var datos = new FormData(f);

function obj_articulo(){
    this.descripcion = datos.get('descripcion'),
    this.codigo = datos.get('codigo'),
    this.precio = parseInt(datos.get('precio')),
    this.iva = datos.get('iva'),

    this.precioiva = function() {
        this.precio = ((this.precio * this.iva) / 100) + this.precio
        return this.precio
    },

    this.preciototal = function(reb) {
        this.precio = this.precio - reb
        return this.precio;
    };
};

var init = new obj_articulo();
