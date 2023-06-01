function valorEntrada()
{

// busco del combo descuento que seleccioné y de la cantidad de entradas//

let selDes = document.getElementById("selDescuento");
let selOptionDesc = selDes.options[selDes.selectedIndex].value;

let selCant = document.getElementById("selCantidad");
let selOptionCant = selCant.options[selCant.selectedIndex].value;

// calculo el descuento//

let descuento = 200 * selOptionDesc/100
let calculo = (200-descuento)*selOptionCant;

document.getElementById("resultado").innerHTML = 'Total a Pagar : $' + calculo;

}

function borrar(){

    let selDesB = document.getElementById("selDescuento");
    selDesB.value = ""

    let selCantB = document.getElementById("selCantidad");
    selCantB.value = ""
    
    document.getElementById("resultado").innerHTML = 'Total a Pagar : $' ;

}
