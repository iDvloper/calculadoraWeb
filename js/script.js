var num1;
var num2;
var operacion;

function init(){
    //Obtener valores de botones
    var resultado = document.getElementById("resultado");

    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");

    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplicacion = document.getElementById("multiplicacion");

    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");

    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");


    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent = "8";
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent = "9";
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent = "0";
        
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "-"
        limpiar();
    }

    multiplicacion.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        num2 = resultado.textContent;
        resolver();
    }

    function limpiar(e){
        resultado.textContent = "";
    }

    function resetear(e){
        resultado.textContent = "";
        num1 = 0;
        num2 = 0;
        operacion = "";
    }

    function resolver(e){
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(num1) + parseFloat(num2);
                break;

            case "-":
                res = parseFloat(num1) - parseFloat(num2);
                break;
                
            case "*":
                res = parseFloat(num1) * parseFloat(num2);
                break;
                
            case "/":
                res = parseFloat(num1) / parseFloat(num2);
                break;    
        
        }

        resetear();
        resultado.textContent = res;
    
    } 
    
}