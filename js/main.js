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

// let producto1 = new Producto('Ruby',10000,'Conjunto simple! exclusivo de My Rocielo , Para ocasiones especiales','baby12.jpg');
let producto1 = new Producto('Perla',20000, 'len2.jpg');
let producto2 = new Producto('Ruby',10000, 'baby12.jpg');
let producto3 = new Producto('Red',80000, 'len16.jpg');
let producto4 = new Producto('Perla',20000, 'len18.jpg');
let producto5 = new Producto('Ruby',60000, 'len17.jpg');
let producto6 = new Producto('Perla',70000, 'gal.jpg');
let producto7 = new Producto('Perla',20000, 'baby19.jpg');

// let producto1 = {
//     precio: 10000,
//     nombre: 'Ruby',
//     descripcion: "Conjunto simple! exclusivo de My Rocielo , Para ocasiones especiales",
// }

// let producto2 = {
//     precio: 20000,
//     nombre: 'Perla',
//     descripcion: "Conjunto triple! exclusivo de My Rocielo , Para ocasiones especiales",    
// }

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
let precioTotal = 0; // variable para acumular el valor de cada producto comprado 
let arrayCarrito= []; // creo array por que se que voy a ingresar varios productos, cada ves que compren algo

let agregarCarrito = (producto) =>{     //el parametro producto me lo invento para que me guarde el objeto (lenceria)
    
    arrayCarrito.push(producto)   // guardo el objeto en una lista "array" para mostralo en la pagina
    precioTotal += producto.precio;  // precioTotal lo cree para sumar cada  "producto.precio" por eso tengo el "let precioTotal para que acumule"
    
    let productosSeleccionados = '';

    arrayCarrito.forEach(element => {   // a la variable arrayCarrito le digo que me traiga cada elemento "producto = lenceria"
        productosSeleccionados += 

        `<img src="imagenes/${element.imagen} " alt="">
        <span>${element.nombre}</span>
        <span> $${element.precio}</span>
        <button onClick='borrarElemento(${element})'>X</button>
        </>` });
            
            document.getElementById('totalCarrito').innerHTML = precioTotal;
            document.getElementById('carritoDeCompras').innerHTML = productosSeleccionados;
            document.getElementById('modalProductos').innerHTML = productosSeleccionados;
        }
        







        //cosas jquery, puedo elegir como en css

// const h1 = $('#h1')
// h1.click(()=> {
//     event.preventDefault()
//     const valorInput = = $
// }

// )

        














    // FORMA DOM
    // let divPrincipal = document.createElement('div')
    // let node = document.createElement('span');
    // let nodePrecio = document.createElement('span');
    // let borrar = document.createElement('span')

    // nodePrecio.textContent = producto.precio;
    // node.textContent = producto.nombre;
    // borrar.innerHTML = `<button onClick='borrarElemento()'>X</button>`

    // divPrincipal.appendChild(node);
    // divPrincipal.appendChild(nodePrecio);
    // divPrincipal.appendChild(borrar)
    
    // document.getElementById('carritoDeCompras').appendChild(divPrincipal);


    // FORMA HTML
    // productosSeleccionados += 
    // `<div>
    //     <span>${producto.nombre}</span>
    //     <span>$.${producto.precio}</span>
    //     <button onClick='borrarElemento()'>X</button>
    // </div>`
    // document.getElementById('carritoDeCompras').innerHTML = productosSeleccionados


