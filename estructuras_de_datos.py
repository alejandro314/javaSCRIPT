'''
listas
diccionarios
sets
metodos
'''

mi_lista=[1,"b",3,"f"]

print(type(mi_lista)) #list
print(mi_lista.append("w"))#none
print(mi_lista)
mi_lista.pop()
print(mi_lista)
mi_lista.reverse()
print(mi_lista)

mi_dic={
    "nombre":"alejandro",
    "edad":24
}

print(type(mi_dic))
print(mi_dic.keys())
print(mi_dic["nombre"])#acceder
mi_dic["ciudad"]="palmira"#agregar
print(mi_dic)