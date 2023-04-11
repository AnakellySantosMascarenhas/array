const frutas = ["Manga", "Morango", "Jabuticaba", "jaca", "Uva", "Melão", "Cereja", "joão Bolão", "Caqui"];

const vegetais = ["Rabanete", "Cenoura", "Batata-doce", "Pepino", "Palmito", "Mandioca", "Cogumelo", "Ábobora", "Nabo",];


function Frutas() {
  const frutasElement = document.getElementById("mostrarFrutas");
  const frutasOrdenados = frutas.sort();
  frutasElement.innerHTML = frutasOrdenados.join(", ");
}

function vegetais() {
  const vegetaisElement = document.getElementById("vegetais");
  const vegetaisOrdenados = vegetais.sort();
  vegetaisElement.innerHTML = vegetaisOrdenados.join(", ");
}