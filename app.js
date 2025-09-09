let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación de campo vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    // Guardar nombre en la lista
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Mostrar la lista en pantalla
    mostrarAmigos();
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de volver a pintarla

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
