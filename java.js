document.write("<h1> Centro de Atencion Virtual</h1>");
var usuarioregistrado="rosa";
var contraseñaregistrada="123"
let apel="varon";
console.log(apel);

alert("Bienvenido");
var edad = prompt("¿cual es tu edad?");
if(edad >=18) {
    alert ("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}
var usuarioingresado=prompt("INGRESE USUARIO");
var contraseñaingresada=prompt("INGRESE LA CONTRASEÑA");
if(usuarioingresado==usuarioregistrado && contraseñaingresada==contraseñaregistrada){
    alert ("Acceso Correcto");
} else{
    alert ("Acceso Denegado");
}