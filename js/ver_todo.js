document.addEventListener("DOMContentLoaded", () => {
    let rutaBase = "";
    if (
        window.location.pathname.includes("/login/") ||
        window.location.pathname.includes("/registrarUsuario/") ||
        window.location.pathname.includes("/carrito/") ||
        window.location.pathname.includes("/ver todo/")
    ) {
        rutaBase = "../";
    }

    fetch(rutaBase + "/navbar/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(err => console.error("Error al cargar el navbar:", err));

    const botonesAgregar = document.querySelectorAll(".btn-add-cart");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });

    console.log("ver_todo.js cargado correctamente");
});

function agregarAlCarrito(event) {
    const boton = event.target;


    const card = boton.closest(".verTodo-card, .Novedades-card");

    const titulo = card.querySelector(".product-title").textContent;
    const precio = card.querySelector(".Precio").textContent;
    const imagen = card.querySelector("img").src;
    const descripcion = card.querySelector(".Descripcio").textContent;

    const nuevoProducto = {
        title: titulo,
        price: precio,
        img: imagen,
        description: descripcion,
        cantidad: 1
    };

    guardarEnLocalStorage(nuevoProducto);
}

function guardarEnLocalStorage(producto) {
    let carrito = JSON.parse(localStorage.getItem("carritoCompras")) || [];

    const encontrado = carrito.findIndex(p => p.title === producto.title);

    if (encontrado !== -1) {
        carrito[encontrado].cantidad++;
    } else {
        carrito.push(producto);
    }

    localStorage.setItem("carritoCompras", JSON.stringify(carrito));

    alert(`¡${producto.title} agregado al carrito!`);
}
