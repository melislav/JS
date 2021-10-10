let carrito = [];  
const listaProductos = [
    {
    id: '1',
    nombre:'Collar Praga',
    precio: 1000,
    imagen: 'Imagenes/producto1.jpg'
    },
    {
    id: '2',
    nombre:'Collar Oslo',
    precio: 800,
    imagen: 'Imagenes/curso1.jpg'
    },
    {
    id: '3',
    nombre:'Collar Paris',
    precio: 1500,
    imagen: 'Imagenes/producto3.jpg'
    },
    {
    id: '4',
    nombre:'Collar Viena',
    precio: 1700,
    imagen: 'Imagenes/producto4.jpg'
    },
    {
    id: '5',
    nombre:'Collar Budapest',
    precio: 1700,
    imagen: 'Imagenes/producto5.PNG'
    }
    

];

const renderArticulos = (arrayArt, elemento) => {
    const productDiv = document.querySelector(elemento);
    
        productDiv.innerHTML = '';

        let html = '';

        arrayArt.forEach(articulo => { html +=`
        <div class="col-sm-12 col-md-2 my-3 mx-2" style="min-width: 18rem; max-width: 25rem;">
            <div class="card text-center h-100">
                <h3 class="card-title text-center">${articulo.nombre}</h3>
                <div class="text-center">
                <img src="${articulo.imagen}" alt="collar" class="imagen-ppales">
                </div>
                <div id="prod" class="card-body">
                <p>Precio ${articulo.precio}</p>
              
                <button class="btn-comprar" value=${articulo.id}>Comprar</button>
                </div>
            </div>
        </div>
        `;
        })
        productDiv.innerHTML = html;
    }


const deleteItem = (idDelProd) => {
    
    const nuevoCarrito = carrito.filter(articulo => articulo.id !== idDelProd);
    carrito = nuevoCarrito;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito(nuevoCarrito, '.cart');
}


const renderCarrito = (arrayArt, elemento) => {
        const cartDiv = document.querySelector(elemento);
        
            cartDiv.innerHTML = '';
    
            let html = '';
    
            arrayArt.forEach(articulo => { html +=`
            <article class="prodCarrito">
                <p>Producto ${articulo.nombre}</p>
                <p>Precio ${articulo.precio}</p>
                <img src="${articulo.imagen}" alt="collar" class="imagen-carrito">
                <br>
                <button class="btn-borrar" onclick="deleteItem('${articulo.id}')" >Borrar</button>
            </article>
            `;
            })
            cartDiv.innerHTML = html;

            calcularTotal()
        }

const addToCart = (evento) =>{
    const idDelProd = evento.target.value;
    const prodEnBase = listaProductos.find(producto => producto.id == idDelProd);
    carrito.push(prodEnBase);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    /*console.log(carrito);*/
    renderCarrito(carrito, '.cart');     
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((item) => {
        const miItem = listaProductos.filter(articulo => articulo.id === item);
    });
    total = total + miItem[0].precio;
    document.querySelector('.total').innerHTML = `<h3>Total a Pagar: ${total}</h3>`   
}

window.onload = () => {
    renderArticulos(listaProductos, '.products')
    const btns = document.querySelectorAll('.btn-comprar');
    /*console.log(btns);*/
    btns.forEach(button => button.addEventListener('click', addToCart))

    if(carrito.length === 0) {
        document.querySelector('.cart').innerHTML = '<h4>No hay productos</h>'
    }
};


