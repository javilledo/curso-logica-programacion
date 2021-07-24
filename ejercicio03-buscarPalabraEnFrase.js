/*
ENUNCIADO EJERCICIO 3:
Dada una palabra y una frase, buscarla en la palabra en la frase y devolver cuantas veces aparece en ella.
*/

function buscarPalabraEnFrase(palabra, frase){
    
    //Limpiar de signos de puntuación
    frase = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/gi,"")

    //Pasar todo a minúsculas
    frase = frase.toLowerCase();

    //Split de las palabras
    let array = frase.split(' ');

    //Transformo el array en un diccionario
    let dictionary = {};
    for (var i in array){
        if (dictionary[array[i]] == null){
            dictionary[array[i]] = 1;
        } else {
            dictionary[array[i]] += 1;
        }
    }

    if (dictionary[palabra] != null){
        return dictionary[palabra];
    } else {
        return "No se encuentra la palabra en la frase";
    };
}

console.log(buscarPalabraEnFrase("prueba", "test Test testificando tess.,."));

//También puede usarse la función includes(palabra) directamente sobre la frase, pero te devuelve true o false, no el número de veces

