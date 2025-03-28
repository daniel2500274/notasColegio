const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para ingresar nombre
function ingresarNombre(callback) {
    rl.question("Ingrese el nombre del estudiante: ".green, (nombre) => {
        if (typeof nombre !== "string") {
            console.log("⚠️ Error: Entrada inválida.".yellow);
            ingresarNombre(callback);
            return;
        }

        nombre = nombre.trim();

        if (nombre === "") {
            console.log("⚠️ El nombre no puede estar vacío. Intente nuevamente.".yellow);
            ingresarNombre(callback);
        } else if (/\d/.test(nombre)) {
            console.log("⚠️ El nombre no debe contener números. Intente nuevamente.".yellow);
            ingresarNombre(callback);
        } else {
            callback(
                nombre
                    .split(" ")
                    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
                    .join(" ")
            );
        }
    });
}


// Función para ingresar notas
function ingresarNotas(callback) {
    let notasEstudiante = [];
    let contador = 0;

    function pedirNota() {
        if (contador < 4) {
            rl.question(`Ingrese la nota ${contador + 1} (0-10): `.green, (nota) => {
                let notaNum = parseFloat(nota);
                if (!isNaN(notaNum) && notaNum >= 0 && notaNum <= 10) {
                    notasEstudiante.push(notaNum);
                    contador++;
                    pedirNota();
                } else {
                    console.log("⚠️ Nota inválida. Debe estar entre 0 y 10.".yellow);
                    pedirNota();
                }
            });
        } else {
            callback(notasEstudiante);
        }
    }

    pedirNota();
}

// Exportar funciones
module.exports = {
    rl,
    ingresarNombre,
    ingresarNotas
};