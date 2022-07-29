/*
// Pagos en UF
let cantidadUF
 
let calculo
let UF = 32.255

do {
    nota = prompt("el valor de la UF de hoy es " + UF)
    cantidadUF = parseFloat(prompt("Ingrese su cantidad de UF")) //"5" "hola" NaN = not a number)
    
break
} while(isNaN(cantidadUF * UF == calculo))
    document.write(calculo) //UNICA condicion de verdad para que se termine es que ambas cond. sean falsas

// total de productos

let producto1 = 15900
let producto2 = 18900


let totalProductos = (producto1 + producto2)

console.log(totalProductos)




const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month;

*/


// Arrays  metodos y propiedades

// declaracion de  array vacio y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;

// empleo de do.. while para cargar nombres en el array por prompt()

do{
    let entrada = prompt("Ingresar Nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);

}while (listaNombres.length  != cantidad)
//Concatenamos un nuevo array de dos elementos

const nuevaLista = listaNombres.concat(["ANA","EMA"]);

//Salida con salto de linea usando join

alert(nuevaLista.join("\n"));




