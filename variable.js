var x=2;
console.log(x)
// comentario de una linea
/*
comentario de multiples lineas
*/
//3 maneras de definir variables
//var-> mas antigua ECMA script 5
//let-> ECMA script 6
//const-> proteger la informacion
var b=2; //definicion
b=4 // modificando la variable
var b=8 //redefiniendo
console.log(b)

const C=8 // definicion
//c=10//asignacion
//console.log(c)

let d=6 //definicion
d=12 //modificando la variable
console.log(d)

// OPERADORES MATEMATICOS
console.log(2+4) //6
console.log("2"+4)//24
console.log("b"+4)//b4
console.log("2"*8)//16 JAVASCRIPT INTENTA CONVENTIRLO EN NUMERO
console.log(typeof(8+8))//NUMBER
console.log(typeof(8+8.3))// NUMBER --> NO DIFERENCIA ENTRE ENTEROS Y DECIMALES SOLO ENGLOBA

//POTENCIA
console.log(2**3)   
console.log(Math.pow(2,3))   
console.log(`texto con variable ${d}`)

console.log(2==2)//True
console.log(2=="2")//True
console.log(2==="2")//False, el triple igual nos confirma si son del mismo tipo o no
var usuario="alejandro"
var usuario='alejandro'
console.log(usuario.length)

//boolean
var login=true
console.log(typeof(login))
console.log(2!==2) //false