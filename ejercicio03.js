/*
ENUNCIADO EJERCICIO 3:
Dada una palabra y una frase, buscarla en la palabra en la frase y devolver cuantas veces aparece en ella.
*/

function buscarPalabraEnFrase(palabra, frase){
    
    //Limpiar de signos de puntuación
    frase = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g,"")

    //Pasar todo a minúsculas
    frase = frase.toLowerCase();

    //Split de las palabras
    var array = frase.split(' ');

    //Transformo el array en un diccionario
    var dictionary = {};
    for (var i in array){
        if (dictionary[array[i]] == null){
            dictionary[array[i]] = 1;
        } else {
            dictionary[array[i]] += 1;
        }
    }

    return dictionary[palabra];
}

console.log(buscarPalabraEnFrase("test", "test Test testificando tess.,."));

