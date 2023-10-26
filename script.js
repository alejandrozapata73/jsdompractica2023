
var numero1 = 15
var numero2 = 30

var totalSuma1 = numero1 + numero2

var numero3 = 40
var numero4 = 50

var totalSuma2 = numero3 + numero4


//funciones declarativas
function mostarCarteles(){

   console.log("hola soy un funcion declarativa")
   alert("hola soy una funcion declarativa por alert")

}


// mostarCarteles()

// var numeroA = 0

// function sumarNumeros(){

//    numeroA = 10
//    var numeroB = 10
//    console.log(numeroA + numeroB)

// }

// sumarNumeros()
// console.log(numeroA)
// console.log(numeroB)


function sumarNumeros(x, y){


   
   console.log("Suma total: " + (x + y) )

}

sumarNumeros(numero1, numero2)//pasa valor 15
sumarNumeros(numero3, numero4)//


mostrarNombreApellido("marcos", "zapata")


function mostrarNombreApellido(nombre, apellido, registro=true){

   alert("Nombre: " + nombre + " Apellido: " + apellido)
   console.log(registro)

}

var nombre = "juan"
var apellido = "sanchez"
var registro = false
console.log("alejandro")
mostrarNombreApellido(nombre, apellido, registro)



// alert("hola")

//algoritmo para la superficie de un cuadrado (funciones)


function supCuadrado(lado){

   console.log(lado*lado)

}

function promedioNumeros(){



}

var valorLado = Number(prompt("ingrese el lado de un cuadrado"))

supCuadrado(valorLado)

// valorLado = Number(prompt("ingrese el lado de un cuadrado"))

// supCuadrado(valorLado)

// valorLado = Number(prompt("ingrese el lado de un cuadrado"))

// supCuadrado(valorLado)


var contador = 0

function contadorClick(){

   contador++
   console.log("contando: " + contador)
   alert("quiere tener las cookies...!!!")


}



























