#declarar
def mi_funcion():
    return "x"

#llamar o invocar
print(mi_funcion())
def sumar(a,b):
    return a+b

print(sumar(8,10))

def validar(edad):
    if edad>18:
        return "puede ingresar"
    
print(validar(24))

#BUCLES

estudiantes=["andres","luisa","diana"]

for i in estudiantes:
    print(i)