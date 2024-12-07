console.log(1)

document.addEventListener('DOMContentLoaded', () => {
    console.log(2)
})

console.log(3)

const nav = document.querySelector('.navegacion')

nav.addEventListener('mouseover', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'blue';
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo a navegacion')

    nav.style.backgroundColor = 'blue';
})

nav.addEventListener('click', () => {
    console.log('haciendo click')

    nav.style.backgroundColor = 'red';
})

nav.addEventListener('mousedown', () => {
    console.log('dando al scroll')

    nav.style.backgroundColor = 'aqua';
})

nav.addEventListener('dblclick', () => {
    console.log('doble click')

    nav.style.backgroundColor = 'green';
})

const calculadora = {
    sumar: function(n1,n2){
        suma=n1+n2
        document.querySelector("#result").innerHTML = `la suma de a: ${n1} mas b: ${n2}=${suma}`
    },
    restar: function(n1,n2){
        resta=n1-n2
        document.querySelector("#result").innerHTML = `la resta de a: ${n1} menos b: ${n2}=${resta}`
    },
    multiplicar: function(n1,n2){
        multiplicacion=n1*n2
        document.querySelector("#result").innerHTML = `la multiplicacion de a: ${n1} por b: ${n2}=${multiplicacion}`
    },
    dividir: function(n1,n2){
        division=n1/n2
        document.getElementById("result").innerHTML = `la division de a: ${n1} entre b: ${n2}=${division}`
    },
}

const cambiarNombre = {
    cambia: function(){
        //suma=n1+n2
        var nombres = ["Daniel", "Virginia", "Ricardo", "Eblis", "Roman"];
        var apellidos = ["Serjal", "Gomez", "Blanco", "Navarro", "Lugo"];

        //for (var n = 0; n < nombres.length; n++) {
            //document.write("My " + (n+1) + " choice is " + colours[Math.floor(Math.random() * colours.length)] + " in " + countrys[Math.floor(Math.random() * countrys.length)] + " on " + days[Math.floor(Math.random() * days.length)] + "<br>");

        document.querySelector(".cambioNombre").innerHTML = `${nombres[Math.floor(Math.random()*nombres.length)]}`
        document.querySelector(".cambioApellido").innerHTML = `${apellidos[Math.floor(Math.random()*apellidos.length)]}`
        //}
        /*document.querySelector(".cambioNombre").innerHTML = `jose`*/
        /*document.querySelector(".cambioApellido").innerHTML = `daniel`*/
    },
}