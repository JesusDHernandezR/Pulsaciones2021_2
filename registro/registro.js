function operacion() {
    var op = document.getElementById("sexoSeleccionado").value;
    var edad = document.getElementById("edad").value;
    var pulsacion;
    if (op === "f") {
        pulsacion = CalcularPulsacionFemenina(edad);
    } else if (op === "m") {
        pulsacion = CalcularPulsacionMasculina(edad);
    } else {
        alert("Operacion no valida, seleccione el sexo");
    }
    document.getElementById("pulsacion").value = pulsacion;
}
function CalcularPulsacionFemenina(edad) {
    var pulsacion = parseInt(220) - parseInt(edad) / parseInt(10);
    return pulsacion;
}
function CalcularPulsacionMasculina(edad) {
    var pulsacion = parseInt(210) - parseInt(edad) / parseInt(10);
    return pulsacion;
}