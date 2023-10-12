//TAXI CORDOBA 
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
      alert("Su viaje se abonó correctamente, su auto llegará en 10 minutos.");
      console.log("el usuario abona correctamente");
    } else if (precioIngresado > this.costo) {
      let vuelto = precioIngresado - this.costo;
      alert("Su vuelto es de $" + vuelto + ". Su auto llegará en 10 min!");
      console.log("El usuario pagó de más, se le indica el vuelto");
    } else {
      alert("El precio ingresado es incorrecto. Por favor, inténtelo de nuevo.");
      console.log("Precio ingresado incorrecto");
    }
  }
}

const usuarios = []; 

// Función para agregar un usuario al array
function agregarUsuario(nombre, apellido, direccion) {
  const nuevoUsuario = new Usuario(nombre, apellido, direccion);
  usuarios.push(nuevoUsuario);
}

const nombreIngresado = prompt("Bienvenido a Taxi Cordoba por favor ingrese su nombre");
alert("El nombre ingresado es " + nombreIngresado);

const apellidoIngresado = prompt("Por favor ingrese su apellido");
alert("El apellido ingresado es " + apellidoIngresado);

const direccionIngresada = prompt("Por favor ingrese su dirección");
alert("Ingreso la siguiente direccion: " + direccionIngresada);

agregarUsuario(nombreIngresado, apellidoIngresado, direccionIngresada);

const viaje = new Viaje(2500);

let precioIngresado;

while (true) {
  precioIngresado = parseInt(prompt("Su viaje tiene un valor de $2500, por favor ingrese su pago"));

  if (!isNaN(precioIngresado)) {
    if (precioIngresado === 2500) { 
      alert("Su viaje se abonó correctamente, su auto llegará en 10 minutos.");
      break;
    } else if (precioIngresado > 2500) { 
      let vuelto = precioIngresado - 2500; 
      alert("Su vuelto es de $" + vuelto + ".");
      break;
    } else {
      alert("El precio ingresado es incorrecto. Por favor, inténtelo de nuevo.");
    }
  } else {
    alert("Por favor, ingrese un valor numérico.");
  }
}

// Busqueda y filtrado 
const apellidoBuscado = prompt("Ingrese el apellido a buscar").trim();

if (apellidoBuscado !== '') {
  const usuariosConApellidoBuscado = usuarios.filter(usuario => usuario.apellido === apellidoBuscado);
  console.log("Usuarios con el apellido buscado:", usuariosConApellidoBuscado);
} else {
  console.log("El apellido ingresado es inválido.");
}





