var usuarios = []

//capturar el div de usuario
var div_usuarios = document.querySelector('#usuarios')
fetch('https://reqres.in/api/users')
    .then(data => data.json())// se convierte en un objeto Javascript
    // Esta conversion devuelve una promesa que se maneja en el siguiente
    //.then

    .then(personas => {
        usuarios = personas.data;
        console.log(usuarios);

        usuarios.map((personas,i) => {
            let nombre = document.createElement('h3');
            console.log(nombre)
            nombre.innerHTML = i + " - " + personas.first_name + " " + personas.last_name;

            div_usuarios.append(nombre);
        });

    })
    .catch(error => console.error('Error al obtener datos:', error));