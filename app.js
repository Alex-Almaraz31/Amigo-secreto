// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() { 
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
    alert ("Por favor, ingrese un nombre.");
    return;
}
amigos.push(nombre);
input.value = "";
 
mostrarLista();
} 
function mostrarLista() {
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() { 
if (amigos.length === 0){
    alert ("No hay amigos en la lista");
    return;
}
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSeleccionado = amigos[indiceAleatorio];
let resultado = document.getElementById("resultado");

resultado.innerHTML = `<li>El amigo secreto es ${amigoSeleccionado}</li>`
}