/*
    Dado un número, devolver su tabla de multiplicar completa.

    Ejemplo del resultado de TablaMultiplicar(5):

    # TABLA DEL 5 #
    1 x 5 = 5
    2 x 5 = 10
    3 x 5 = 15
    4 x 5 = 20
    5 x 5 = 25
    6 x 5 = 30
    7 x 5 = 35
    8 x 5 = 40
    9 x 5 = 45
    10 x 5 = 50

*/

function tablaMultiplicar(numero){

    var mensaje = `# TABLA DEL ${numero} #`;

    for(var i = 1;i<=10;i++){
        mensaje += `\n${i} x ${numero} = ${i*numero}`;
    }

    return mensaje;

}

console.log(tablaMultiplicar(5))