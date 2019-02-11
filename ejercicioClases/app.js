class Libro {
    constructor (titulo, autor, ano, genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero
    }
    info(){
        return `Hola soy ${this.autor} mi libro ${this.titulo}, lo escribi en el año ${this.ano}, cuyo genero es ${this.genero}`
    }

}

    // let nombre1 = prompt('Introduce el nombre del libro');
    // let autor1 = prompt('Autor del libro');
    // let ano1 = prompt('Año del libro');
    // let genero1 = prompt('Genero del libro');
    // const luna = new Libro(nombre1 , autor1, ano1, genero1);

    // let nombre2 = prompt('Introduce el nombre del libro');
    // let autor2 = prompt('Autor del libro');
    // let ano2 = prompt('Año del libro');
    // let genero2 = prompt('Genero del libro');
    // const sol = new Libro(nombre2, autor2, ano2, genero2); 

    // let nombre3 = prompt('Introduce el nombre del libro');
    // let autor3 = prompt('Autor del libro');
    // let ano3 = prompt('Año del libro');
    // let genero3 = prompt('Genero del libro');
    // const eclipse = new Libro(nombre3, autor3, ano3, genero3); 

    
       
        const luna = new Libro('Luna' , 'Juanma', 2100, 'Indefinido');
        console.log(luna.info());

        const sol = new Libro('Sol' , 'Oktay', 2100, 'Misterio'); 
        console.log(sol.info());
        
        const eclipse = new Libro('Eclipse' , 'Manu', 2100, 'Null'); 
        console.log(eclipse.info());
    
    

let libros = [luna, sol, eclipse];

const showLibros = () =>{
    for(key in libros){
        console.log(libros[key]);
    }
}

const showAutores = () =>{
    libros.sort((obj1, obj2) => (obj1.autor > obj2.autor) ? 1 : -1);   
}

const infoByGenre = () =>{
    let genre = prompt('Introduzco un genero');
    for(idx in libros){
        if(genre === libros[idx].genero){
            return libros[idx].info();
        }else{
            return 0;
        }
    }
}