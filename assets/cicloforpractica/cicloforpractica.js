const familia = ["Jany", "Edgar", "Garny", "Virginia", "Roman", "Gabriela", "Andrea"];
let text="";

for (var i = 0; i<familia.length; i++){
   text += familia[i] + "<br>";
}

document.getElementById("familia").innerHTML = text;

const numero = [10, 20, 30, 40, 50, 60];
let textnumero="";

for (var i = 0; i<numero.length; i++){
   textnumero += numero[i] + "<br>";
}

document.getElementById("numeros").innerHTML = textnumero;