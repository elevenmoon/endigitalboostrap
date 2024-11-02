function listadoFrutas(fruta1,fruta2,...todasFrutas){

    console.log("La fruta 1 es: " + fruta1);
    console.log("La fruta 2 es: " + fruta2);
    console.log(todasFrutas);

}

// javascript parametros rest y spread;

//listadoFrutas("Cambur","Lechoza","Patilla","Melon","Guayaba");
var frutas2=["Fresa","Limon","Parchita"];

listadoFrutas(...frutas2,"Cambur","Lechoza","Patilla");
