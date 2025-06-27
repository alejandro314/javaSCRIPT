/*Resolver como funciones estos ejercicios:

1.Comprueba si un elemento existe dentro de un array. Devuelve true o false.
2. Suma todos los enteros de un array y devuelve el resultado.
3. Calcula y devuelve el promedio de los valores en un array.
4.Devuelve el número más grande de un array de enteros.
*/
var datos=[20,55,60,18]

function comprobar(array,elemento){
    for(let i=0;i<array.length;i++){
        if (array[i]===elemento){
            return true
        }
    }
    return false
}
console.log(comprobar(datos,20))

function sumar_elementos(array){

}
console.log(sumar_elementos(datos))
function promedio(array){

}
console.log(promedio(datos))
function maximo(array){

}
console.log(maximo(datos))