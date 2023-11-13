// Objeto Usuario
let usuarios = [];

function Usuario(nombre, apellido, direccion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
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

function mostrarMensaje(mensaje, icono = 'success') {
  Swal.fire({
    text: mensaje,
    icon: icono,
    timer: 2000,
    showConfirmButton: false
  });
  console.log(mensaje);
}

function mostrarUsuariosEnDOM(usuariosMostrar = usuarios) {
  const usuariosContainer = $("#usuarios-container");
  usuariosContainer.html("");
  usuariosMostrar.forEach((usuario, index) => {
    const usuarioDiv = $("<div>").addClass("usuario-card");
    usuarioDiv.html(`
      <strong>Nombre:</strong> ${usuario.nombre} ${usuario.apellido}, <strong>Dirección:</strong> ${usuario.direccion}
      <button class="eliminar-btn">Eliminar</button>
    `);
    usuarioDiv.find(".eliminar-btn").on("click", () => {
      eliminarUsuario(index);
    });
    usuariosContainer.append(usuarioDiv);
  });
}

function agregarUsuario() {
  const nombreIngresado = $("#nombre-input").val();
  const apellidoIngresado = $("#apellido-input").val();
  const direccionIngresada = $("#direccion-input").val();

  if (nombreIngresado && apellidoIngresado && direccionIngresada) {
    const nuevoUsuario = new Usuario(nombreIngresado, apellidoIngresado, direccionIngresada);
    usuarios.push(nuevoUsuario);
    guardarUsuariosEnStorage();
    mostrarUsuariosEnDOM();
    mostrarMensaje("Usuario agregado correctamente");
  } else {
    mostrarMensaje("Por favor, completa todos los campos", 'error');
  }
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  guardarUsuariosEnStorage();
  mostrarUsuariosEnDOM();
  mostrarMensaje("Usuario eliminado correctamente");
}


$("#buscar-input").on("input", function () {
  const textoBusqueda = $(this).val().toLowerCase();
  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(textoBusqueda) ||
    usuario.apellido.toLowerCase().includes(textoBusqueda) ||
    usuario.direccion.toLowerCase().includes(textoBusqueda)
  );
  mostrarUsuariosEnDOM(usuariosFiltrados);
});


$(document).ready(() => {
  cargarUsuariosDesdeStorage();
  mostrarUsuariosEnDOM();
});

