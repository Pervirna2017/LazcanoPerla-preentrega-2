//Declaracion de la funcion//
function saludar() {
    let nommbre= prompt("ingresar nombre");
     alert("Hola" + "nombre")
    }
    
 //Llamado a la funcion//
    saludar("Hola")
    saludar()
    saludar()

    // Condicion para entrar a la aplicacion//

    while (ejecucioWhile == true)
    let contador= 0
    let numero= parseInt(prompt("ingrese un numero par"))

    if (numero%2==0)
    alert("Muchas gracias!")
    ejecucioWhile=false
     
    else
    alert ("Por favor ingresar nuevamente")


    // Funcion sumar//
    function sumar(num1, num2){
     alert(num1 + num2)
     console.log
    }

    let numero1= parseFloat(prompt("Ingrese su Primer numero"))
    let numero2= parseFloat(prompt("Ingrese su Segundo numero"))

    sumar(numero1,numero2)

    //Funcion calcular impuestos//

    function calcularImpuestos  (valorBase, impuPais, impuGanancias, impuBP){
    console.log(valorBase*impuPais)// 100*1.30= 130
    console.log(valorBase*impuGanancias)// 100*1.45=45
    console.log(valorBase*impuBP)// 100*1.25=25
   
    let sumarImpuestos= valorBase*impuPais+valorBase*impuPais+valorBase*impuGanancias+valorBase*impuBP
    console.log(Impuestos)
    return valorBase + impuestos
}   
 let valorvideoJuego= parseFloat(prompt("ingrese el valor de su video valorvideoJuego"))

 let costoTolal= calcularImpuestos(ValorVideoJuego100,0.30,0.45,0.25)
 alert("El costo total es" + costoTotal)

 let confirmation = true

 do{
    
    let let ValorVideoJuego= parseFloat(prompt("ingrese el valor de su video valorvideoJuego"))

    let costoTolal= calcularImpuestos(valorvideoJuego100,0.30,0.45,0.25)
    alert("El costo total es" + costoTotal)
    
    let respuesta = prompt("desea ingresas otro precio para calculcar")

    if (respuesta == "no"){
        confirmation = false
        
 } while (confirmation == true)
 }


    
           
 
 

  



