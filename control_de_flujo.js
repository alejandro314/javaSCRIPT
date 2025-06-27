/*
if
else if
else
*/
var x=2
if(x==2){
    console.log("cumple")
}
if(x===3){
    console.log("primera salida")
}else if(x==="2"){
    console.log("segunda salida")
}else if(x===2){
    console.log("tercera salida")
}else{
    console.log("no encontrado")
}

//OPERADORES LOGICOS
//&&
//  ||
if (100>10 && 10==10){
    console.log("doble condicion ok")
}

if (100>10000 || 10==10){
    console.log("doble condicion ok")
}
if(true){
    console.log("siempre es verdadero")
}

// USO DE SWITCH CASE

let opcion=2;

switch(opcion){
    case 1:
        console.log("seleccion 1")
        break
      case 2:
        console.log("seleccion 2")
        break
      case 3:
        console.log("seleccion 3")
    default:
        console.log("caso por defecto")
}