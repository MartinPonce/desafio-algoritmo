// comentarios en lina 
/* comentarios en bloque
 alt+shft+a */

/* VARIALBES Y VALORES
SON ESPACIOS EN DONDE GUARDAMOS INFORMACION
EN LA MEMORIA DE LA COMPUTADORA */

/* forma de declarar variables pero no es la recomendada
var edad;*/


/* DEFINIMOS NUESTRA PRIMER VARIABLE (declaracion de variable)

let nombre = "andres"
let apellido;


// CONSTANTE QUE NO VA A CAMBIAR JAMAS EN TODO EL CODIGO EJ:

const EDAD = 15;


//ASIGNACION  EJ.

nombre = "andres";

-----------------

// EJ CAMEL CASE
let numeroUnoBonito = 2;
let numeroDos = 10;
const numeroTres = 20;

let suma = numeroUnoBonito + numeroDos ;

//COMANDO FUNDAMENTAL PARA LA VIDA DEL PROGRAMADOR
 console.log( "aca vemos el valor de la suma", suma * numeroTres);

------------------------

 // CONCATENACION DE VARIABLES DE TEXTOS '+' (STRINGS)
 let saludo = "Hola";
 let nombre = "Camilo";
 let mensaje = saludo + " " + nombre;
 console.log(mensaje);

 --------------------------

let saludo = "Hola ";
let nombre = prompt("Ingrese su nombre");
let mensaje = saludo + nombre;
alert(mensaje)

let entrada = prompt("Ingrese una palabra");
let salida = entrada + " " + "ingresada";
alert(salida);
console.log();*/


//variables
let nota
let entrada

//bucle mientras no se escriba salir
while (entrada !="salir") {
    entrada=prompt("Ingrese su Nombre");
    entrada=entrada .toLowerCase();//paso a minusculas

    if (entrada == "leonardo"){
        alert("bienvenido "+ entrada);
    }else if (entrada=== "mariano"){
        alert("bienvenido "+ entrada);
    }else if (entrada=== "cecilia"){
        alert("bienvenido "+ entrada);
    }else if (entrada=== "hector"){
        alert("bienvenido "+ entrada);
    }else if (entrada=== "maria"){
        alert("bienvenido "+ entrada);
    }else{
        alert("usted no se encuentra registrado");
    break;
    }
    //ingreso de la nota y condicion para saber si esta aprobado
    nota=prompt("ingrese la nota");
    nota=parseInt(nota); //numero entero
    if (nota>6){
        alert(entrada + " aprobado");
    }else{
        alert(entrada + " desaprobado");
    }
}


