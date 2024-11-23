function sumando(n1,n2, sumaMuestra, sumaPordos){
    var suma = n1+n2;
    sumaMuestra(suma);
    sumaPordos(suma);

    return suma;
}

sumando(25,50, function(dato){
    console.log("La Suma es:"+ dato);
},function(dato){
    console.log("La suma por dos es:"+(dato*2));
});