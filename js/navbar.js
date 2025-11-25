let rutaBase = '';

// se comprueba si esta en una subcarpeta como /login/ o /html/
if (window.location.pathname.includes('/login/') || window.location.pathname.includes('/html/')) {
  rutaBase = '../'; // Si es así, debemos subir un nivel
}

// En index.html, rutaBase será '' -> fetch('navbar/navbar.html')
// En login.html, rutaBase será '../' -> fetch('../navbar/navbar.html')
fetch(rutaBase + 'navbar/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  })
  .catch(err => console.error('Error al cargar el navbar:', err));