"use strict";

var elementMax = 4;

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
    
    if (!isNaN(list[elementMax-1])){
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
    
    list.push(elem);
    
    return list.sort ();   
}

function get (list, index){
    
    if ( index < 0 || index > elementMax){
        return "The index is out of the limits of the list";
    }
    
    return list[index];
}

function toString (list){
    
    return list.toString();
}

function indexOf(list, elem){
    var mid;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    mid = Math.trunc( list.length/2 );
    
    if ( elem < list[mid] ){
         return list.indexOf(elem);               
    }else{
         return list.lastIndexOf(elem);
    }
}

function capacity (list){
    return elementMax;
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
    var index;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    index = list.indexOf(elem);
    
    if (index > -1){
       return list.splice(index, 1); 
    }
    
    return -1;
}


var list = create();
/*
console.log("¿Lista vacia? "+isEmpty(list));
console.log("¿Lista llena? "+isFull(list));
console.log("Numero de elementos: "+size(list));
console.log("Añadimos un 5. Tamaño: "+add(list, 5));
console.log("Añadimos un 8. Tamaño: "+add(list, 8));
console.log("Lista: "+toString(list));
console.log("Valor de la pos 0: "+get(list, 0));
console.log("Index del elem 5: "+indexOf(list, 5));
console.log("Capacidad: "+capacity());
console.log("Limpiamos lista.");
clear(list);
console.log("¿Lista vacia? "+isEmpty(list));
console.log("Añadimos un 2. Tamaño: "+add(list, 2));
console.log("Añadimos un 8. Tamaño: "+add(list, 8));
console.log("Añadimos un 3. Tamaño: "+add(list, 3));
console.log("Añadimos un 1. Tamaño: "+add(list, 1));
console.log("Primer elemento: "+firstElement(list));
console.log("Ultimo elemento: "+lastElement(list));
console.log("Borramos el index 0. Elemento: "+remove(list, 0));
console.log("Lista: "+toString(list));
console.log("Borramos el elem 6. Elemento: "+removeElement(list, 6));
console.log("Lista: "+toString(list));
*/