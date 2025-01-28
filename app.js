const inputUser = document.querySelector("#numero");
const ubicacion = document.querySelector("#tabla");

ubicacion.style.display = "none"; // para que no se muestre nada antes de empezar el usuario a introducir cosas

function validarUsuario(valor) {
  const valorNumerico = Number(valor);
  if (!isNaN(valorNumerico) && Number.isInteger(valorNumerico)) {
    return valorNumerico;
  } else {
    alert("Introduce un número entero por favor.");
  }
}

function aplicacion() {
  // Validacion con funcion previa
  let numeroApp = validarUsuario(inputUser.value);
  // mostramos el div
  ubicacion.style.display = "flex";
  // Creamos nodos
  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const tbody = document.createElement("tbody");
  // asignamos el titulo de la tabla y le metemos unos estilos.
  th.style.borderRadius = "5px";
  th.style.padding = "5px";
  th.textContent = `Tabla del: ${numeroApp}`;
  // introducimos el titulo en la fila y posteriormente metemos todo el thead en la tabla
  tr.appendChild(th);
  thead.appendChild(tr);
  tabla.appendChild(thead);
  // bucle para crear 10 filas y con el data de que multiplicacion es y el resultado.Cada iteracion se va introduciendo
  for (let i = 0; i <= 10; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = `${i} * ${numeroApp} = ${i * numeroApp}`;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  // estilos de la tabla
  tabla.style.backgroundColor = "#444444";
  tabla.style.borderRadius = "8px";
  tabla.style.padding = "5px";
  // introducimos el cuerpo de la tabla en la tabla
  tabla.appendChild(tbody);
  // finalmente esa tabla va para el div
  ubicacion.appendChild(tabla);
  inputUser.value = "";
}

function resetearCampos() {
  ubicacion.innerHTML = "";
  ubicacion.style.display = "none";
  inputUser.value = "";
}
