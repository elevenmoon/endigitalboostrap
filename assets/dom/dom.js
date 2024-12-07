document.getElementById("demo").innerHTML = "Llego Navidad";

const header = document.getElementsByClassName('header');

console.log(header);

const formulario = document.getElementsByClassName("form");
console.log(formulario);

//elemento = document;
//elemento = document.head;
elemento = document.body;

console.log(elemento);

const course = document.querySelector('.curso');
console.log(course);


const nuevoTexto = 'JavaScript Variables'
document.querySelector('.curso').textContent= 'Diseno grafico'
document.querySelector('.curso').textContent= nuevoTexto

const nuevoTexto2 = 'cambio de variable'
document.querySelector('.prueba').textContent= nuevoTexto2

//console.log(course.innerText);
//console.log(course.textContent);
//console.log(course.innerHTML);

const descrip = document.querySelector('#descripcion');
console.log(descrip)

//const masdeuno = document.querySelectorAll('.curso');
//console.log(masdeuno)

document.getElementById("cambioimg").src="img/perros.webp"

/*como cambiar estilos con mi html */
var cursos = document.querySelector('.curso');
cursos.style.color = 'blue';
cursos.style.backgroundColor = 'black';
cursos.style.fontSize = '15px';

const desc = document.querySelector('.descripcion');
console.log(desc.classList);

//desc.classList.add('bgblue');
desc.classList.add('bgblue','title');
//desc.classList.remove('bgblue');

const desc2 = document.querySelectorAll('.descripcion')
console.log(desc2.classList);

function displaydate(){
    document.getElementById('demo').innerHTML = Date();
}

function displaySum(n1,n2){
    document.getElementById('demo3').innerHTML = n1+n2;
}

function afuera(obj){
    obj.innerHTML =  "Ya manana es ...";
}

function sinMouse(obj){
    obj.innerHTML =  "navidad";
}