document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.cta-button');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = '/novedades/novedades.html';
    });
  }
  const botonesAgregar = document.querySelectorAll('.btn-add-cart');

  botonesAgregar.forEach(boton => {
      boton.addEventListener('click', agregarAlCarrito);
  });
});
function agregarAlCarrito(event) {
  const boton = event.target;
  const item = boton.closest('.Novedades-card'); 
  const titulo = item.querySelector('h3').textContent;
  const precio = item.querySelector('.Precio').textContent;
  const imagen = item.querySelector('img').src;
  const nuevoProducto = {
      title: titulo,
      price: precio,
      img: imagen,
      cantidad: 1
  };

  guardarEnLocalStorage(nuevoProducto);
}

function guardarEnLocalStorage(producto) {
  let carrito = JSON.parse(localStorage.getItem('carritoCompras')) || [];
  const indice = carrito.findIndex(prod => prod.title === producto.title);
  if (indice !== -1) {
      carrito[indice].cantidad++;
  } else {

      carrito.push(producto);
  }

  localStorage.setItem('carritoCompras', JSON.stringify(carrito));
  alert(`¡${producto.title} se agregó al carrito!`);
}