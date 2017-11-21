"use strict";

function create(){
    var list = [];
      
    return list;
}

function isEmpty(list){

    if (isNaN(list[0])){
        return true;
    }else{
        return false;
    }
}

function isFull(list){   
    
    if (!isNaN(list[capacity()-1])){
        return true;
    }else{
        return false;
    }
}

function size (list){
    
    return list.length;
}

function add (list, elem){

    if (isFull(list)){
        return "Error. The list is full."
    }
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    return list.push(elem);
}

function addAt (list, elem, index){

    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isFull(list)){
        return "Error. The list is full."; 
    }
    
    if ( index < 0 || index > capacity()){
        return "The index is out of the limits of the list";
    }
    
    for (var i=0; i<index; i++){
        if ( isNaN(list[i]) ){
            return "Error. The list has empty indexes before.";
        }
    }
    
    list.splice(index, 0, elem);
    
    return list.length;                   
}

function get (list, index){
    
    if ( index < 0 || index > capacity()){
        return "The index is out of the limits of the list";
    }
    
    return list[index];
}

function toString (list){
    
    return list.toString();
}

function indexOf(list, elem){
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    return list.indexOf(elem);
}

function lastIndexOf(list, elem){
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    return list.lastIndexOf(elem);
}

function capacity (){
    return 4;
}

function clear (list){
    
    list.length = 0;
}

function firstElement(list){
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    return list[0];
}

function lastElement(list){
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    return list[size(list)-1];
}

function remove (list, index){
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    if (isNaN(list[index])){
        return "Error. The index is empty.";
    }
    
    return list.splice(index, 1);
}

function removeElement(list, elem){

    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    return list.splice(list.indexOf(elem), 1);   
}

function set(list, elem, index){
    var aux;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if ( index < 0 || index > capacity()){
        return "The index is out of the limits of the list";
    }
    
    aux = list[index];
    list[index] = elem
    
    return aux;
}

function testConsole(){
    console.log("Capacidad: "+capacity(list));
    console.log("Numero de elementos: "+size(list));
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("¿Lista llena? "+isFull(list));
    console.log("Añadimos un 5. Tamaño: "+add(list, 5));
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("Añadimos un 8. Tamaño: "+add(list, 8));
    console.log("Lista: "+toString(list));
    console.log("Añadimos un 2 en el index 1. Tamaño: "+addAt(list, 2, 1));
    console.log("Lista: "+toString(list));
    console.log("Valor de la pos 0: "+get(list, 0));
    console.log("Index del elem 5: "+indexOf(list, 5));
    console.log("Index del elem 5 empezando por final: "+lastIndexOf(list, 5));
    console.log("Capacidad: "+capacity());
    console.log("Limpiamos lista.");
    clear(list);
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("Añadimos un 2. Tamaño: "+add(list, 2));
    console.log("Añadimos un 4. Tamaño: "+add(list, 4));
    console.log("Lista: "+toString(list));
    console.log("Añadimos un 6 en el index 1. Tamaño: "+addAt(list, 6, 1));
    console.log("Lista: "+toString(list));
    console.log("Añadimos un 9 en el index 0. Tamaño: "+addAt(list, 9, 0));
    console.log("Lista: "+toString(list));
    console.log("Primer elemento: "+firstElement(list));
    console.log("Ultimo elemento: "+lastElement(list));
    console.log("Borramos el index 1. Elemento: "+remove(list, 1));
    console.log("Lista: "+toString(list));
    console.log("Borramos el elem 6. ¿Borrado?: "+removeElement(list, 6));
    console.log("Lista: "+toString(list));
    console.log("Cambiamos el valor del indice 1 por 9: "+set(list, 9, 1));
    console.log("Lista: "+toString(list));
}

var list = create();

testConsole();
