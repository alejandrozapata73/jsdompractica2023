


// function promedios(nota1, nota2, nota3){

//    valorPromedio = (nota1+nota2+nota3)/3

//    // console.log(valorPromedio)

//    return valorPromedio

// }




// console.log(promedios(4,4,4))

// var respuestaPromedio = promedios(4,4,4)

// console.log(respuestaPromedio)

// //objetivo principal validar edad
// function mayorEdad(edad){


//    if(edad>=18){

      
//       return true

//    }else{

//       return false

//    }

// }

// var validarEdadJuan = mayorEdad(15)


// //mostrar si es mayor o menor
// if(validarEdadJuan==true){
//    alert("es mayor!!!")
// }else{
//    alert("no es mayor")
// }




// //valor 4

// //
// //DOM...


const capturaH1 = document.getElementById("titulo")

console.log(document.getElementById("titulo"))

console.log(document.getElementById("titulo").textContent)


var valorH1 = document.getElementById("titulo").textContent

// alert(valorH1)


function cambiarH1() {

   console.log(capturaH1.textContent)
   capturaH1.textContent = "Dom en accion"

}

function volverCero(){

   capturaH1.textContent = "Eventos!!!"

}



const capturaInputA = document.getElementById("inputA")
const capturaInputB = document.getElementById("inputB")
const capturaLabel = document.getElementById("valorInput")

console.log(capturaLabel)

console.log(capturaInputA)

console.log(capturaInputA.value)


function sumarInput(){

   console.log("funciona el boton")
   console.log(capturaInputA.value)
   console.log(capturaInputB.value)

   capturaLabel.textContent = Number(capturaInputA.value) + Number(capturaInputB.value)
}

console.log(capturaLabel)















