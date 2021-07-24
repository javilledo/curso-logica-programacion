/*
ENUNCIADO EJERCICIO 2:
Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palíndromos son palabras que se leen igual aún estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla
*/

function esPalindromo(texto){

    var longitud = texto.length;
    
    var textoAlRevés = "";

    for (var i = longitud - 1; i >= 0; i--){

        textoAlRevés += texto[i];

    }

    return texto == textoAlRevés;

}

console.log(esPalindromo("ana"));
