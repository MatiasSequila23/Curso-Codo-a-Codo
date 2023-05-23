// Cargar el encabezado
fetch('menu.html')
.then(response => response.text())
.then(data => {
  document.querySelector('header').innerHTML = data;
});
// Cargar el pie de página
fetch('pie.html')
.then(response => response.text())
.then(data => {
  document.querySelector('footer').innerHTML = data;
});