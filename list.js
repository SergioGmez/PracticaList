"use strict";

function create(){
    var list = [];
    
    for (var i=0; i < capacity(); i++){
        list[i] = Number.NaN;
    }
    
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
    var numElement = 0;
    var i = 0;

    while(!isNaN(list[i]) && i < capacity()){
        i++;
        numElement++;
    }
    
    return numElement;
}

function add (list, elem){
    var aux;
    
    if (isFull(list)){
        return "Error. The list is full."
    }
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    aux = size(list);
    
    list[aux] = elem;
    
    return aux+1;
}

function addAt (list, elem, index){
    var i;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isFull(list)){
        return "Error. The list is full."; 
    }
    
    if ( index < 0 || index > capacity()){
        return "The index is out of the limits of the list";
    }
    
    for (i=0; i<index; i++){
        if ( isNaN(list[i]) ){
            return "Error. The list has empty indexes before.";
        }
    }
            
    i = size(list);
    
    do{
        list[i] = list[i-1]
        i--;
            
    }while( i > index )  
    
    list[index] = elem;
    
    return size(list);                   
}

function get (list, index){
    
    if ( index < 0 || index > capacity()){
        return "The index is out of the limits of the list";
    }
    
    return list[index];
}

function toString (list){
    var cadena = "";
    
    for (var i=0; i<size(list); i++){
        cadena = cadena + list[i]+"-";
    }
    cadena = cadena.substring(0,cadena.length-1);
    
    return cadena;
}

function indexOf(list, elem){
    var encontrado = false;
    var i = 0;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    while (!encontrado && i<size(list)){
        if ( list[i] == elem){
            encontrado = true;
            return i;
        }
        i++;
    }
    return -1;
}

function lastIndexOf(list, elem){
    var encontrado = false;
    var i = size(list);
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    while (!encontrado && i>=0 ){
        if ( list[i] == elem){
            encontrado = true;
            return i;
        }
        i--;
    }
    return -1;
}

function capacity (){
    return 4;
}

function clear (list){
    
    for (var i=0; i<capacity(); i++){
        list[i] = Number.NaN;
    }
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
    var aux;
    var i = index;
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    if (isNaN(list[index])){
        return "Error. The index is empty.";
    }
    
    aux = list[index];
    
    while ( i < size(list) ){
         list[i] = list[i+1];
         i++;
        
    }
    list[i-1] = Number.NaN;
    
    return aux;
}

function removeElement(list, elem){
    var tam = size (list);
    var index;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isEmpty(list)){
        return "Error. The list is empty."
    }
    
    index = indexOf(list, elem);

    if (index > -1 && index < tam){
        
        while ( !isNaN(list[index]) && index < tam ){
             list[index] = list[index+1]; 
             index++;
        }
        
        list[index-1] = Number.NaN;
        
        return true;    
    }else{
        return false;
    }
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
    var list = create();
    
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


testConsole();



