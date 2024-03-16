let digito1 = 0
let digito2 = 0
let digito3 = 0
let resultado = 0
let mostrarResultado = 0

function actualizarDatos(){
    digito1 = Number(document.getElementById('primerDigito').value)
    digito2 = Number(document.getElementById('segundoDigito').value)
    mostrarResultado = document.getElementById('resultado')
    result = 0
}


function calculosMultiples(){
    actualizarDatos()
    //Suma
    result = digito1 + digito2
    document.getElementById('ta+b').innerHTML = result.toFixed(2)
    document.getElementById('tb+a').innerHTML = result.toFixed(2)
    //Resta
    result = digito1 - digito2
    document.getElementById('ta-b').innerHTML = result.toFixed(2)
    result = digito2 - digito1
    document.getElementById('tb-a').innerHTML = result.toFixed(2)
    //Multiplicacion
    result = digito1 * digito2
    document.getElementById('ta*b').innerHTML = result.toFixed(2)
    document.getElementById('tb*a').innerHTML = result.toFixed(2)
    //Division
    if (digito2 > 0){
        result = digito1 / digito2
        document.getElementById('ta/b').innerHTML = result.toFixed(2)
    } else{
        document.getElementById('ta/b').innerHTML = " X "
    }
    if (digito1 > 0){
        result = digito2 / digito1
        document.getElementById('tb/a').innerHTML = result.toFixed(2)
    } else{
        document.getElementById('tb/a').innerHTML = " X "
    }
    //Potencia
    if (digito2 < 0){
        digito3 = 1 / digito2
        result = Math.pow(digito1, digito3)
        document.getElementById('ta^b').innerHTML = result
    } else{
        result = Math.pow(digito1, digito2)
        document.getElementById('ta^b').innerHTML = result
    }
    if (digito1 < 0){
        digito3 = 1 / digito1
        result = Math.pow(digito2, digito3)
        document.getElementById('tb^a').innerHTML = result
    } else{
        result = Math.pow(digito1, digito2)
        document.getElementById('tb^a').innerHTML = result
    }
    //Raiz cuadrada
    if (digito1 > 0){
        result = Math.sqrt(digito1).toFixed(2)
        document.getElementById('traiza').innerHTML = result
    } else{
        document.getElementById('traiza').innerHTML = "  X  "
    }
    if (digito2 > 0){
        result = Math.sqrt(digito2).toFixed(2)
        document.getElementById('traizb').innerHTML = result
    } else{
        document.getElementById('traizb').innerHTML = "  X  "
    }
    //Raiz B de A
    if (digito1 > 0){
        result = Math.pow(digito1, digito2)
        document.getElementById('traizab').innerHTML = result
    } else{
        document.getElementById('traizab').innerHTML = "  X  "
    }
    if (digito2 > 0){
        result = Math.pow(digito2, digito1)
        document.getElementById('traizba').innerHTML = result
    } else{
        document.getElementById('traizba').innerHTML = "  X  "
    }

}


function suma(){
    actualizarDatos()
    result = digito1 + digito2
    mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
}


function resta(){
    actualizarDatos()
    result = digito1 - digito2
    mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
}


function multiplicacion(){
    actualizarDatos()
    result = digito1 * digito2
    mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
}


function division(){
    actualizarDatos()
    if (digito2 > 0){
        result = digito1 / digito2
        mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
    } else{
        mostrarResultado.innerHTML = "No es posible dividir entre 0, digite otro número"
    }
    
}


function potencia(){
    actualizarDatos()
    result = Math.pow(digito1, digito2)
    mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
}

function raiz2(){
    actualizarDatos()
    if (digito1 > 0){
        result = Math.sqrt(digito1)
        mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
    } else{
        mostrarResultado.innerHTML = "No existe raiz cuadrada de números negativos, intente con números positivos"
    }
}


function raizAdeB(){
    actualizarDatos()
    if (digito1 > 0){
        result = Math.pow(digito1, (1/digito2))
        mostrarResultado.innerHTML = "El resultado es " + result.toFixed(2)
    } else{
        mostrarResultado.innerHTML = "Esta calculadora siente alergia por los radicandos menores a 0 😉"
    }
    
    
}


function main(){
//Declarar variable para cada boton
    let botonSuma = document.getElementById('botonSuma')
    let botonResta = document.getElementById('botonResta')
    let botonMultiplicacion = document.getElementById('botonMultiplicacion')
    let botonDivision = document.getElementById('botonDivision')
    let botonPotencia = document.getElementById('botonPotencia')
    let botonRaiz = document.getElementById('botonRaiz')
    let botonRaizAB = document.getElementById('botonRaiz2')
    let botonCalculos = document.getElementById('calculosMultiples')
//Ejecutar operacion segun boton pulsado
    mostrarResultado.innerHTML = ""
    botonSuma.addEventListener('click', suma)
    botonResta.addEventListener('click', resta)
    botonMultiplicacion.addEventListener('click', multiplicacion)
    botonDivision.addEventListener('click', division)
    botonPotencia.addEventListener('click', potencia)
    botonRaiz.addEventListener('click', raiz2)
    botonRaizAB.addEventListener('click', raizAdeB)
    botonCalculos.addEventListener('click', calculosMultiples)
}

window.addEventListener('load', main)