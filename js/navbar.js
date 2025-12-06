
fetch("/navbar/navbar.html")
  .then(res => {
      if (!res.ok) throw new Error("No se encontró el navbar");
      return res.text();
  })
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            console.log("¡CLICK CAPTURADO!");
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        }

        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

  })
  .catch(err => {
      console.error("Error al cargar el navbar:", err);
      document.getElementById("navbar-container").innerHTML = ""; 
  });