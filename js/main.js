// Objeto Usuario
function Usuario(nombre, apellido, direccion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
}

// Objeto Viaje
function Viaje(costodelviaje) {
  this.costo = costodelviaje;

  this.pagar = function(precioIngresado) {
    if (precioIngresado === this.costo) {
      mostrarMensaje("Su viaje se abonó correctamente, su auto llegará en 10 minutos.");
    } else if (precioIngresado > this.costo) {
      let vuelto = precioIngresado - this.costo;
      mostrarMensaje("Su vuelto es de $" + vuelto + ". Su auto llegará en 10 min!");
    } else {
      mostrarMensaje("El precio ingresado es incorrecto. Por favor, inténtelo de nuevo.");
    }
  }
}



function cargarUsuariosDesdeStorage() {
  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
  if (usuariosGuardados) {
    usuarios = usuariosGuardados;
  }
}

function guardarUsuariosEnStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function agregarUsuario(nombre, apellido, direccion) {
  const nuevoUsuario = new Usuario(nombre, apellido, direccion);
  usuarios.push(nuevoUsuario);
  guardarUsuariosEnStorage();
}

function mostrarMensaje(mensaje) {
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = mensaje;
  console.log(mensaje); 
}

function mostrarUsuariosEnDOM() {
  const usuariosContainer = document.getElementById("usuarios-container");
  usuariosContainer.innerHTML = ""; 
  usuarios.forEach((usuario, index) => {
    const usuarioDiv = document.createElement("div");
    usuarioDiv.classList.add("usuario-card"); 
    usuarioDiv.innerHTML = `
      <strong>Nombre:</strong> ${usuario.nombre} ${usuario.apellido}, <strong>Dirección:</strong> ${usuario.direccion}
      <button onclick="eliminarUsuario(${index})">Eliminar</button>
    `;
    usuariosContainer.appendChild(usuarioDiv);
  });
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  guardarUsuariosEnStorage();
  mostrarUsuariosEnDOM();
  mostrarMensaje("Usuario eliminado correctamente");
}

const agregarBtn = document.getElementById("agregar");
agregarBtn.addEventListener("click", () => {
  const nombreIngresado = document.getElementById("nombre-input").value;
  const apellidoIngresado = document.getElementById("apellido-input").value;
  const direccionIngresada = document.getElementById("direccion-input").value;
  agregarUsuario(nombreIngresado, apellidoIngresado, direccionIngresada);
  mostrarUsuariosEnDOM();
});

window.addEventListener("load", () => {
  cargarUsuariosDesdeStorage();
  mostrarUsuariosEnDOM();
});