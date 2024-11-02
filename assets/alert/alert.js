alert("Hola mundo");

var n1=prompt("Introduce un numero 1",0);
var n2=prompt("Introduce un numero 2",0);

console.log(n1,n2);

if(parseInt(n1)>parseInt(n2)){
    console.log("el primer valor "+n1+" es mayor que segundo "+n2);
    //console.log("parsa por aqui");
}else if(parseInt(n1)==parseInt(n2)){
    console.log("los dos valores son iguales "+n1+" y el segundo valor "+n2);
    //console.log("parsa por aqui");
}else{
    console.log("el segundo valor "+n2+" es mayor que el primero "+n1);
    //console.log("parsa por aqui");
};