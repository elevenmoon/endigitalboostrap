if(typeof(Storage) !== 'undefined'){
    console.log('local storage esta disponible')
}else{
    console.log('local storage no esta disponible')

}

//guardar datos
localStorage.setItem('titulo','Curso de Php');

//Obtener un elemento de local Storage
localStorage.getItem('titulo')

//imprimi en la consola de lo que obtuve el local storage
console.log(localStorage.getItem('titulo'))

//para imprimir en html lo que almacena del local storage
document.querySelector('#curso').innerHTML = localStorage.getItem("titulo")

var usuario={
    nombre:"Roman Lugo",
    email: "roman.edgardogarcia@gmail.com",
    web: "ninguna"
}

localStorage.setItem("usuario",JSON.stringify(usuario))

//La forma correcta de almacenar datos en el localstorage es 
//convirtiendo los objetos de jsonstring porque no procesa el objeto con javascript puro
//la forma correcta de enviar informacion a un API se debe hacer igual con json string

//recuperar objetos de localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"))
console.log(userjs)

//ahora para imprimir en html
document.querySelector("#alumno").append("  "+userjs.nombre)

//vaciar el localstorage
localStorage.removeItem("usuario");

localStorage.clearItem("usuaria");