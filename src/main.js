// Importar módulos
const { rl, ingresarNombre, ingresarNotas } = require("./ingresarAlumnos.js");
const { calcularPromedio } = require("./calcularPromedio.js");
const { mostrarReporte } = require("./reporte_calificaciones");
const pantallaInicio = require("./pantallaInicio");

let estudiantes = [];
let notas = [];
let promedios = [];

// Función para registrar estudiantes
function registrarEstudiantes(cantidad, contador = 0) {
    if (contador < cantidad) {
        console.log(`\nEstudiante ${contador + 1}:`.blue);
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
        mostrarReporte(pantallaInicio, estudiantes, notas, promedios);
        rl.close();
    }
}

// Función principal
function ingresoEstudiantes() {
    pantallaInicio();
    rl.question("\n¿Cuántos estudiantes desea registrar? ".green, (cantidad) => {
        let num = parseInt(cantidad);
        if (!isNaN(num) && num > 0) {
            registrarEstudiantes(num);
        } else {
            console.log("⚠️ Ingrese un número válido.".yellow);
            rl.question("¿Desea intentar nuevamente o salir? (si/salir): ".cyan, (respuesta) => {
                if (respuesta.toLowerCase().trim() === "si") {
                    console.clear();
                    ingresoEstudiantes();
                } else {
                    console.clear();
                    console.log("**************************************************************".green);
                    console.log("*    Gracias por utilizar el servicio de ingreso de notas    *".green);
                    console.log("**************************************************************".green);
                    rl.close();
                }
            });
        }
    });
}

// Iniciar la aplicación
ingresoEstudiantes();