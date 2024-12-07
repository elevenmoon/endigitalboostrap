const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio:500},
    {nombre: 'Television 50 Pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifono', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500}
]

const nuevoArray = carrito.map(function(producto){
    return `Articulo ${producto.nombre} Precio: ${producto.precio}`
} )

const nuevoArray2 = carrito.forEach(function(producto){
    //funcion con un console log la funcion afuera
    console.log(`Articulo ${producto.nombre} Precio: ${producto.precio}`)
})

console.log(nuevoArray);
console.log(nuevoArray2);

for(let i = 0; i < carrito.length; i++){
    console.log(`Articulo ${carrito[i].nombre} Precio: ${carrito[i].precio}`)
}

