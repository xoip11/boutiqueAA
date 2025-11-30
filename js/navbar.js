let rutaBase = "";
if (window.location.pathname.includes("/login/") ||
    window.location.pathname.includes("/registrarUsuario/") ||
    window.location.pathname.includes("/carrito/")) { 
    rutaBase = "../";
}
fetch(rutaBase + "navbar/navbar.html")
  .then(res => {
      if (!res.ok) throw new Error("No se encontró el navbar");
      return res.text();
  })
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(err => {
      console.error("Error al cargar el navbar:", err);
      document.getElementById("navbar-container").innerHTML = ""; 
  });