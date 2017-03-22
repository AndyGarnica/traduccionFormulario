var correo = "";
var contrasenia = "";


function traducir(){
 var titulo = document.getElementById("form-signin-heading");
 var correo = document.getElementById("inputEmail");
 var contrasena = document.getElementById("inputPassword");
 var recuerdame = document.getElementsByTagName("span")[0];
 var boton = document.getElementsByClassName("btn")[0];

 titulo.innerHTML = "Por favor inicia una sesión";
 correo.innerHTML = "Correo Electrónico";
 contrasena.innerHTML = "Contraseña";
 recuerdame.innerHTML = "Recordar Datos";
 boton.innerHTML = "Iniciar Sesión";
}
console.log(traducir());


function almacenar(){
 correo = document.getElementById("inputEmail").value;
 console.log(correo);
 contrasenia = document.getElementById("inputPassword").value;
 console.log(contrasenia);
}
console.log(almacenar());


function imprimir (){
 document.getElementById("titulo").innerHTML = "Datos de formulario";
 document.getElementById("a").innerHTML = "<br> El correo electrónico ingresado es: </br>" + correo;
 document.getElementById("b").innerHTML = "<br>  La clave ingresada es: </br>" + contrasenia;
}
