var formulario = document.querySelector('#formulario')
var ul = document.querySelector('#listarJuegos')

function construirLista(){
    ul.innerHTML = ''
    for(var i in localStorage){
        if(typeof localStorage[i] === 'string'){
            var li = document.createElement('li')
            li.textContent = localStorage[i]
            ul.appendChild(li)
        }
    }
}

//contruir la lis de carga de pagina

construirLista();

formulario.addEventListener('submit', function(event){
    event.preventDefault(); //Evita el envio del formulario por defecto

    var juego = document.querySelector('#addJuego').value
    if(juego.length >= 1) {
        localStorage.setItem(juego, juego) 
    }
    construirLista();
})