suma1(15,20);
function suma1(a,b){
    //cuerpo de la funcion
    console.log(a+b);
}

suma1(15,20);
//funciones de expresion

suma1(25,45);

const suma2 = function(a,b) {
    console.log(a+b);
}

suma2(25,45);

//arrow functions en metodos de propiedad

const reproductor = {
    cancion: '',
    reproducir: id=> console.log(`Reproduciendo cancion id ${id}`),
    pausar:() => console.log(`pausando`),
    borrar: id => console.log(`Borrando cancion con id: ${id}`),
    createPlaylist: nombre => console.log(`Creando la PlayList ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist: ${nombre}`),

    //Tambien existen los set y get 
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Anadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`Anadiendo ${this.cancion}`)
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.createPlaylist('la nueva playlist')

const carro = {
    modelo:'',
    encender: modelo => console.log(`se prende el carro ${modelo}`),
    apagar: modelo => console.log(`apagando el carro ${modelo}`),
    retroceder: modelo => console.log(`retroceso el carro ${modelo}`),
    set nuevoModelo(modelo){
        this.modelo = modelo ;
        console.log(`Agregando ${this.modelo}`);
    },
    get obtenerModelo(){
        console.log(`${this.modelo}`);
    }
}

/*carro.modelo('corrolla')*/
carro.encender('corrolla')
carro.apagar('yaris')
carro.retroceder('Autana')
