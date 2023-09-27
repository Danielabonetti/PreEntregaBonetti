//Empresa de Taxis

function sumar(nombre, apellido) {
  return nombre + apellido
}

let nombreIngresado = prompt("Bienvenido a Taxi Cordoba por favor ingrese su nombre");
alert("El nombre ingresado es " + nombreIngresado);

let apellidoIngresado = prompt("Por favor ingrese su apellido");
alert("El apellido ingresado es " + apellidoIngresado);

let NombreCompleto = sumar(nombreIngresado, apellidoIngresado);
alert("Ingreso el siguiente nombre " + NombreCompleto);

function Direccion(Direccion) {
 }

  let direccion = prompt("Por favor ingrese su dirección");
 alert("Ingreso la siguiente direccion")
 console.log("Ingreso direccion");

function Costo (Costodelviaje) {
}

let precioCorrecto = 2500;
let precioIngresado;

while (true) {
  precioIngresado = parseInt(prompt("Su viaje tiene un valor de $2500, por favor ingrese su pago"));

  if (!isNaN(precioIngresado)) {
    if (precioIngresado === precioCorrecto) {
      alert("Su viaje se abonó correctamente, su auto llegará en 10 minutos.");
      console.log("el usuario abona correctamente");
      break;
    } else if (precioIngresado > precioCorrecto) {
      let vuelto = precioIngresado - precioCorrecto;
      alert("Su vuelto es de $"  + vuelto +  "su auto llegará en 10 min!");
      console.log("El usuario pago de mas, le indica el vuelto");
      break;
    } else {
      alert("El precio ingresado es incorrecto. Por favor, inténtelo de nuevo.");
      console.log("Precio ingresado incorrecto");
    }
  } else {
    alert("Por favor, ingrese un valor numérico.");
    console.log("Ingresa un caracter que no es un numero");
  }
}













