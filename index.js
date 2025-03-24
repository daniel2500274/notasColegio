const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let estudiantes = [];
let notas = [];
let promedios = [];

function ingresarNombre(callback) {
    rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
        if (nombre.trim() === "") {
            console.log("⚠️ El nombre no puede estar vacío. Intente nuevamente.");
            ingresarNombre(callback);
        } else {
            callback(nombre.trim());
        }
    });
}

function ingresarNotas(callback) {
    let notasEstudiante = [];
    let contador = 0;

    function pedirNota() {
        if (contador < 4) {
            rl.question(`Ingrese la nota ${contador + 1} (0-10): `, (nota) => {
                let notaNum = parseFloat(nota);
                if (!isNaN(notaNum) && notaNum >= 0 && notaNum <= 10) {
                    notasEstudiante.push(notaNum);
                    contador++;
                    pedirNota();
                } else {
                    console.log("⚠️ Nota inválida. Debe estar entre 0 y 10.");
                    pedirNota();
                }
            });
        } else {
            callback(notasEstudiante);
        }
    }

    pedirNota();
}

function calcularPromedio(notas) {
    return (notas.reduce((acc, n) => acc + n, 0) / notas.length).toFixed(2);
}

function registrarEstudiantes(cantidad, contador = 0) {
    if (contador < cantidad) {
        console.log(`\nEstudiante ${contador + 1}:`);
        ingresarNombre((nombre) => {
            ingresarNotas((notasEstudiante) => {
                estudiantes.push(nombre);
                notas.push(notasEstudiante);
                let promedio = calcularPromedio(notasEstudiante);
                promedios.push(parseFloat(promedio));
                registrarEstudiantes(cantidad, contador + 1);
            });
        });
    } else {
        mostrarReporte();
        rl.close();
    }
}

function mostrarReporte() {
    console.log("\n📋 Reporte de Calificaciones:");
    let aprobados = 0, reprobados = 0;

    estudiantes.forEach((nombre, i) => {
        let estado = promedios[i] >= 7 ? "✅ Aprobado" : "❌ Reprobado";
        if (promedios[i] >= 7) aprobados++;
        else reprobados++;

        console.log(`${nombre}: [${notas[i].join(", ")}] - Promedio: ${promedios[i]} ${estado}`);
    });

    console.log(`\n📊 Resumen general:`);
    console.log(`${aprobados} estudiante(s) aprobado(s)`);
    console.log(`${reprobados} estudiante(s) reprobado(s)`);
}

rl.question("¿Cuántos estudiantes desea registrar? ", (cantidad) => {
    let num = parseInt(cantidad);
    if (!isNaN(num) && num > 0) {
        registrarEstudiantes(num);
    } else {
        console.log("⚠️ Ingrese un número válido.");
        rl.close();
    }
});
