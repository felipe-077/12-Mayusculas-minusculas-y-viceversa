function cambiarMayusculasMinisculas() {
    
    var palabras = ["Hola", "Mundo"];
    var palabrasModificadas = palabras.map(function(palabra) {
        return palabra.split('').map(function(letra) {
            if (letra === letra.toUpperCase()) {
                return letra.toLowerCase();
            } else {
                return letra.toUpperCase();
            }
        }).join('');
    });
    document.getElementById("originalWords").textContent = "Lista de palabras original: " + palabras.join(", ");
    document.getElementById("modifiedWords").textContent = "Lista de palabras modificada: " + palabrasModificadas.join(", ");
}