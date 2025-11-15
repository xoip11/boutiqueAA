document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.cta-button');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = '/novedades/novedades.html';
    });
  }
});