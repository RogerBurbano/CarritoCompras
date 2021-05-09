class Producto {
    constructor(nombre,precio,imagen){
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
        
    }
    sumarIva(){
        return this.precio*1.21;
    }
    restarStock(compra){
        this.stock -= compra
    }
}

let producto1 = new Producto('Perla',20000, 'len2.jpg');
let producto2 = new Producto('Ruby',10000, 'baby12.jpg');
let producto3 = new Producto('Red',80000, 'len16.jpg');
let producto4 = new Producto('Black',20000, 'len18.jpg');
let producto5 = new Producto('Diva',60000, 'len17.jpg');
let producto6 = new Producto('Jazmin',70000, 'gal.jpg');
let producto7 = new Producto('Jade',20000, 'baby19.jpg');

let productos = [ producto1, producto2, producto3, producto4, producto5, producto6, producto7]  // me invento variable "productos" para poder recorrer los productos de mi array "new"

var cardsTotales = ''; // creo variable para guardar el rrecorrido del forEach, no se coloca adentro porque se pisaria en el recorrido 

productos.forEach(lenceria =>{    // creo parametro "lenceria" que seria cada uno de los productos de mi array y lo recorre uno por uno
    cardsTotales += 
   
    `<div class="cajita" >
    <span class="tittle">${lenceria.nombre}</span>
    <img src="imagenes/${lenceria.imagen}" alt="">
    <span>Precio$ : ${lenceria.precio}</span> 
    <button class="btn"  onclick='agregarCarrito(${JSON.stringify(lenceria)})'>Comprar</button></div>
`} )

document.getElementById('containerProductos').innerHTML = cardsTotales;


// Aca voy a sumar y a mostrar cada producto cuando aprieten el botoon
 //creo array por que se que voy a ingresar varios productos, cada ves que compren algo//el parametro producto me lo invento para que me guarde el objeto (lenceria)
 let arrayCarrito= [];

let agregarCarrito = (producto) =>{  
    let conseguido = ''
    arrayCarrito.forEach(element =>{
        if(element.nombre == producto.nombre){
            element.cantidad++
            conseguido = 'conseguido'
        } 
    })
    if(conseguido != 'conseguido'){
        arrayCarrito.push(producto);
    }

    mostarCarrito(arrayCarrito);
}

function mostarCarrito(arrayDeProductos){

    let precioTotal =0
    let productosAMostrar= '';

    arrayCarrito.map(element =>{
        if(element.cantidad == undefined)
        {element.cantidad = 1}
    })
    console.log(arrayCarrito)

    // arrayCarrito = arrayCarrito.reduce(acc)

    arrayDeProductos.forEach(element =>{
        productosAMostrar +=
        `<div class="d-flex">
        <img class="imgCarrito" src="imagenes/${element.imagen} " alt="">
        <div>
          <p>${element.nombre}</p>
          <p> $ ${element.precio * element.cantidad}</p>
          <p>Cantidad: ${element.cantidad}</p>
          <button onClick='borrarElemento(${JSON.stringify(element)})'>X</button> 
        </div>
      </div>`;

        precioTotal += (element.precio * element.cantidad);
    })

    $('#modalProductos').html(productosAMostrar);
    $('#totalCarrito').html('$'+precioTotal);
    $('#numeroCarrito').html(arrayDeProductos.length);
    
}

        
function borrarElemento(producto) {
    arrayCarrito = arrayCarrito.filter(item => item.nombre != producto.nombre)
    mostarCarrito(arrayCarrito)
}

function vaciarCarrito(){
    arrayCarrito= [];
    document.getElementById('modalProductos').innerHTML = '';
    document.getElementById('totalCarrito').innerHTML = '$ 0';
    document.getElementById('numeroCarrito').innerHTML = 0;
}


