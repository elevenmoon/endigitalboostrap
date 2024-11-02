var nombre="JENNY";
var profesores=["Juan","Pedro","Maria","Pedro","Rosita"];
var materias=["matematicas", "lenguaje", "ingles"];

console.log(profesores[2]);
console.log(profesores.length); // cuenta cuentas posiciones tiene su arreglo metodo length

console.log(nombre.toUpperCase()); // es para que el texto se visualice en mayusculas
console.log(nombre.toLowerCase()); // es para que el texto se visualice en minusculas

document.write("<h1> Ejercicios de Arrays materias </h1>");
document.write("<ul>");

materias.forEach((element, indice, arr) => {
    //document.write(arr);
    document.write("<li>"+indice+" "+element+"</li>");
});

document.write("</ul>");

document.write("<h1> Ejercicios de Arrays profesores </h1>");
document.write("<ul>");

profesores.forEach((element, indice, arr) => {
    //document.write(arr);
    document.write("<li>"+indice+" "+element+"</li>");
});

document.write("</ul>");