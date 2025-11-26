const form = document.getElementById('login-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const pass = form.querySelector('input[type="password"]').value;

    if (!email || !pass) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    alert(`Bienvenido ${email}!`);
  });
}