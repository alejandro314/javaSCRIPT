'''
if
elif
elif
else
'''
#python es identado
x=2
if x==2:
    print("cumple")

if x==3:
    print("primera salida")
elif x=="2":
    print("segunda salida")
elif x==8:
    print("tercera salida")
else:
    print("no encontrado")

#OPERADORES LOGICOS
#or and
if (100>10 and 10==10):
    print("docle condicion ok")
    
if (100>10000 or 10==10):
    print("docle condicion ok")

if True:
    print("siempre es verdadero")

#USO DE MATCH CASE

opcion=8

match opcion:
    case 1:
        print("seleccion 1")
    case 2:
        print("seleccion 2")
    case 3:
        print("seleccion 3")
    case _:
        print("caso por defecto")