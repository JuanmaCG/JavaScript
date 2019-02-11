const saludar = () => console.log('Hola desde una funcion');

for (let i = 0; i < 5; i++){
    saludar();
}

const saludarUsuario = (nombre) => console.log(`Hola ${nombre} desde una funcion`);

const suma = (num1, num2) => {
    if(num1 === 3){
        return (num1 + num2);
    }else {
        return num1;
    }
}