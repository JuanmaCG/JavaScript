const persona = {
    nombre: 'Juanma',
    edad: 23,
    hijos: ['Batman', 'Ironman', 'Yoda', 'Hulk']
}

for(let i = 0; i < persona.hijos.length; i++){
    console.log(persona.hijos[i]);
}

console.log(`Hola ${persona.nombre}. Tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos}`)