function sumame(n1,n2){
    var suma = n1+n2;
    console.log(suma); 
}

function multi(n1,n2){
    var multiplicacion = n1*n2;
    console.log(multiplicacion); 
}

function calculadora(n1,n2){
    console.log("La suma de dos numeros es ",n1+n2);
    console.log("La resta de dos numeros es ",n1-n2);
    console.log("La multiplicacion de dos numeros es ",n1*n2);
    console.log("La division de dos numeros es ",(n1/n2));
}

function calculadorahtmlconsole(n1,n2, mostrar=false){

    if(mostrar==false){
        porConsola(n1,n2);
    }else{
        porHtml(n1,n2);
    };

}

function porConsola(){
    console.log("La suma es: ",n1+n2);
    console.log("La resta es: ",n1-n2);
    console.log("La multiplicacion es: ",n1*n2);
    console.log("La multiplicacion es: ",n1/n2);
};

function porHtml(){
    document.write("La suma es: ",(n1+n2)+"</br>");
    document.write("La resta es: ",(n1+n2)+"</br>");
    document.write("La multiplicacion es: ",(n1*n2)+"</br>");
    document.write("La division es: ",(n1/n2)+"</br>");
}

sumame(15,5);
multi(10,15);
calculadora(15,15);
calculadorahtmlconsole(10,15,false);