let rutaBase = "";
if (window.location.pathname.includes("/login/") ||
    window.location.pathname.includes("/registrarUsuario/")) {
    rutaBase = "../";
}

fetch(rutaBase + "navbar/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(err => console.error("Error al cargar el navbar:", err));