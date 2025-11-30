const contenedorCarrito = document.getElementById('carrito-items');
const precioTotalElemento = document.getElementById('total-price');
const precioSubtotalElemento = document.getElementById('subtotal-price');

document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
});

function cargarCarrito() {

    let carrito = JSON.parse(localStorage.getItem('carritoCompras')) || [];

    contenedorCarrito.innerHTML = '';

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <p>Tu carrito está vacío.</p>
                <a href="../index.html" style="color:black; font-weight:bold;">Ir a comprar</a>
            </div>
        `;
        actualizarTotales(0);
        return;
    }

    carrito.forEach((producto, index) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('item-carrito');
        
        divProducto.innerHTML = `
            <img src="${producto.img}" alt="${producto.title}">
            <div class="item-info">
                <h3>${producto.title}</h3>
                <p>${producto.price}</p>
                
                <div class="cantidad-controls">
                    <button onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span>${producto.cantidad}</span>
                    <button onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
            </div>
            <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        
        contenedorCarrito.appendChild(divProducto);
    });

    actualizarTotales(carrito);
}

window.cambiarCantidad = function(index, delta) {
    let carrito = JSON.parse(localStorage.getItem('carritoCompras'));
    
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) {
        carrito[index].cantidad = 1; 
    }

    localStorage.setItem('carritoCompras', JSON.stringify(carrito));
    cargarCarrito(); 
};
window.eliminarProducto = function(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoCompras'));
    if(confirm("¿Seguro que quieres eliminar este producto?")) {
        carrito.splice(index, 1); 
        localStorage.setItem('carritoCompras', JSON.stringify(carrito));
        cargarCarrito();
    }
};

function actualizarTotales(carrito) {
    if (carrito === 0 || carrito.length === 0) {
        precioTotalElemento.innerText = '$0.00';
        precioSubtotalElemento.innerText = '$0.00';
        return;
    }

    const total = carrito.reduce((acc, prod) => {
        const precioLimpio = parseFloat(prod.price.replace('$', '').replace(',', ''));
        return acc + (precioLimpio * prod.cantidad);
    }, 0);
    const totalFormateado = `$${total.toFixed(2)}`;
    
    precioTotalElemento.innerText = totalFormateado;
    precioSubtotalElemento.innerText = totalFormateado;
}