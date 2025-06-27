// Declarar
function miFuncion(){
    return "x"
}

//llamar o invocar
console.log(miFuncion())

//funciones con parametros
function sumar (a,b){
    return a+b
};
console.log(sumar(8,10))

function validar(edad){
    if (edad>18){
        return "puede ingresar"
    }
}

console.log(validar(24))


//BUCLES

var estudiantes=["andres","luisa","diana"]

for(let i=0; i< estudiantes.length; i++ ){
    console.log(estudiantes[i])

}