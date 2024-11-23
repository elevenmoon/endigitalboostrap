const curso = {
    nombre: 'programacion',
    precio: 40,
    disponible: true,
    informacion:{
        fechaInicio : '5 de noviembre',
        fechaFinalizacion : '20 de diciembre'
    }
}

console.log(curso);

curso.modalidad = ('presencial');
console.log(curso);

delete curso.modalidad;
console.log(curso)

const carro = {
    modelo : 'corolla',
    marca : 'toyota',
    ano : '2012',
    velocidad : {
        minima : 0,
        maxima : 240,
        velocidadmedia : {
            media : 120
        }
    }
}

console.log(carro);

//destructuracion de objetos
const nombreCurso= curso.nombre;
console.log(nombreCurso);

//cambios en EcmaScrip 6

const {nombre, precio, disponible, informacion:{fechaFinalizacion}} = curso;
//lo convierte en variables
console.log(nombre);

const {modelo, marca, ano, velocidad:{velocidadmedia:{media}}} = carro;
console.log(modelo, marca, ano, media)

//metodos de objetos
//Object.freeze(curso);
//curso.nombre='marketing';
//delete curso.nombre;
console.log(curso);

console.log(Object.isFrozen(curso));


//seal

//Object.seal(curso);
curso.nombre = 'Matematicas';

console.log(curso);

//como unir dos objetos
//Object.preventExtensions(carro);
const planificacion = Object.assign(curso,carro);
console.log(planificacion);

//spread operator

const planificacionspread = {...curso,...carro};
console.log(planificacionspread); 