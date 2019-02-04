
function prueba(){
    let info = document.getElementById('art').value;
    let li = document.createElement("li");
    let contenido = document.createTextNode(info);
    let ordenada = document.getElementById('order'); 
    li.appendChild(contenido);   
    document.body.appendChild(li);
    ordenada.appendChild(li); 
};

let input = document.getElementById('add');
input.addEventListener('click', prueba);

function borrar() {
    let ol = document.getElementById('order'); 
    let li = document.getElementsByTagName('li')[0];
    ol.removeChild(li);
}

let borrado = document.getElementById('borrar');
borrado.addEventListener('click', borrar);



