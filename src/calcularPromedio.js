// Cálculo del promedio de un arreglo de notas
function calcularPromedio(notas) {
    return (notas.reduce((acc, n) => acc + n, 0) / notas.length).toFixed(2);
}

module.exports = {
    calcularPromedio
};