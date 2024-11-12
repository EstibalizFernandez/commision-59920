/*

// valores
const proyecto ="marketing nómanda";
const creacion = "2024";
const presupuesto = "1582.23";
// console.log
console.log(proyecto);
// siempre devuelven strings
 /*const miPropt=prompt("nombre del proyecto");
console.log(miPropt);
// alert
alert(miPropt);
console.log(alert);
// pasar a entero
const creacionNumer = parseInt(creacion);
console.log(creacionNumer)
// pasar a decimal
const decimales = parseFloat(presupuesto);
console.log(decimales);

*/

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las filas de tarjetas
  const rows = document.querySelectorAll(".cards-row");

  // Agrega el evento click a cada opción del dropdown
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Previene el comportamiento por defecto del enlace

      // Obtiene el valor de la opción seleccionada
      const selectedValue = this.getAttribute("data-value");

      // Oculta todas las filas de tarjetas
      rows.forEach((row) => {
        row.style.display = "none";
      });

      // Muestra la fila de tarjetas correspondiente a la selección
      const selectedRow = document.getElementById(selectedValue);
      if (selectedRow) {
        selectedRow.style.display = "flex";
      }
    });
  });
});
