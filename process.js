'use strict';


var acum = 0;
var sum = 0;
var prom = 0;

var result = document.querySelector("#resultados");
result.style.display = "none";



function prosesar() {


    let service = document.getElementById("sevice").value;
    let cant = parseInt(document.getElementById("cant").value);
    let value = parseInt(document.getElementById("value").value);
    var p_cant_ser = document.querySelector("#p_cant_ser span");
    var p_suma_ser = document.querySelector("#p_suma_ser span");
    var p_prom_ser = document.querySelector("#p_prom_ser span");

    result.style.display = "block";

    acum++;
    sum = sum + value;
    prom = sum / acum;

    p_cant_ser.innerHTML = acum;
    p_suma_ser.innerHTML = sum;
    p_prom_ser.innerHTML = prom;




}