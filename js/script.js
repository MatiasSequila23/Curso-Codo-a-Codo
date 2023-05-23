const descuento_Estudiantes = 80;
const descuento_Trainee = 50;
const descuento_Junior = 15;
const valor_Venta = 200;

function calcular() {
    var total = 0;
    var select = parseInt(document.querySelector("#select_Categoria").value);
    var cantidad = document.querySelector("#input_Cantidad").value;
    switch (select) {
        case 1:
            total= calcular_Monto(valor_Venta,descuento_Estudiantes,cantidad);
            break;
        case 2:
            total= calcular_Monto(valor_Venta,descuento_Trainee,cantidad);
            break;
        case 3:
            total= calcular_Monto(valor_Venta,descuento_Junior,cantidad);
            break;
        default:
            total=0;
            break;
    }
    document.getElementById("total_Pagar").innerHTML= "Total a pagar $"+total;
    document.getElementById("div_Alert").style.display="block";
}
function Clear() {
    document.getElementById("div_Alert").style.display="none";
    document.getElementById("input_Cantidad").value="";
    document.getElementById("select_Categoria").innerHTML="";
    cerate_Select();
}
function calcular_Monto(valor_Venta, descuento, cantidad) {
    if (cantidad!="") {
        var valor = ((valor_Venta * parseInt(cantidad)) * descuento) / 100;
    return (valor_Venta * cantidad) - valor;
    }
    else{
        return 0;
    } 
}
function cerate_Select() {
 
    let select = document.getElementById("select_Categoria");
 
    let option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    let option1Texto = document.createTextNode("Estudiante");
    option1.appendChild(option1Texto);
 
    let option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    let option2Texto = document.createTextNode("Trainee");
    option2.appendChild(option2Texto);
 
    let option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    let option3Texto = document.createTextNode("Junior");
    option3.appendChild(option3Texto);
 
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3); 
}
window.onload = function () {
    document.getElementById("h5_Desc_Estudiante").innerText = descuento_Estudiantes + "%";
    document.getElementById("h5_Desc_Trainee").innerText = descuento_Trainee + "%";
    document.getElementById("h5_Desc_Junior").innerText = descuento_Junior + "%";
    document.getElementById("div_Alert").style.display="none";
    cerate_Select();
};