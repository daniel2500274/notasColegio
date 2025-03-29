require("colors");

function mostrarReporte(pantallaInicio, estudiantes, notas, promedios) {
    pantallaInicio();
    console.log("\n📋 Reporte de Calificaciones por estudiante:".white);

    let aprobados = 0, reprobados = 0;

    estudiantes.forEach((nombre, i) => {
        let estado = promedios[i] >= 7 ? "✅ Aprobado".green : "❌ Reprobado".red;
        if (promedios[i] >= 7) aprobados++;
        else reprobados++;

        console.log(`${nombre}: [${notas[i].join(", ")}] - Promedio: ${promedios[i]} ${estado}`.green);
    });

    console.log(`\n📊 Resumen general:`.white);
    console.log(`${aprobados} estudiante(s) aprobado(s)`.green);
    console.log(`${reprobados} estudiante(s) reprobado(s)`.red);
    console.log("\n\n**************************************************************".green);
    console.log("*    Gracias por utilizar el servicio de ingreso de notas    *".green);
    console.log("**************************************************************".green);
}

module.exports = {
    mostrarReporte
};