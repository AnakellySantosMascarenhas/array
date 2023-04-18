const frutas = ["Manga", "Morango", "Jabuticaba", "jaca", "Uva", "Melão", "Cereja", "João Bolão", "Caqui"];
const vegetais = ["Abóbora", "Rabanete", "Cenoura", "Batata-doce", "Pepino", "Palmito", "Mandioca", "Cogumelo", "Nabo",];

const frutasElement = document.getElementById("mostrarFrutas");
function MostrarFrutas(){
    frutasOrdenadas = frutas.sort();
    frutasElement.innerHTML = frutasOrdenadas.join(" - ");
}

const vegetaisElement = document.getElementById("mostrarVegetais");
function MostrarVegetais(){
    vegetaisOrdenados = vegetais.sort();
    vegetaisElement.innerHTML = vegetaisOrdenados.join(" * ");
}