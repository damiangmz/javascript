let dolar = 138.60;
let euro =138.91;



/*function conversion() {

    valor = parseInt(prompt("ingrese un numero"));

    resultado = valor / dolar;
    alert(" el cambio de pesos a dolares es : $" + resultado)
}*/


/*let ingresarMoneda = prompt("Ingrese la moneda a la que desea convertir ");
if (ingresarMoneda = "dolar") {
    function conversion() {
        valor = parseInt(prompt("ingrese un numero"));
        resultado = valor / dolar;
        alert(" el cambio de pesos a dolares es : $" + resultado);   
    }
}
else if (ingresarMoneda = "euro") {
    function conversion2() {
        valor = parseInt(prompt("ingrese un numero"));
        resultado = valor / euro;
        alert(" el cambio de pesos a euro es : $" + resultado);   
    }
}
conversion()
conversion2()
*/
let ingresarMoneda = prompt("Ingrese la moneda a la que desea convertir ");
function conversionDolar() {
    if (ingresarMoneda = "dolar"){
        let valor = parseInt(prompt("ingrese un numero"));
        let resultado = valor / dolar ;
        alert(" el cambio de pesos a dolar es: $" + resultado);
    }
    
}
conversionDolar()
function conversionEuro() {
    if (ingresarMoneda = "euro"){
        let valor = parseInt(prompt("ingrese un numero"));
        let resultado = valor / euro ;
        alert(" el cambio de pesos a euro es: $" + resultado);
    }
    
}
conversionEuro()


