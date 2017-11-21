"use strict";

function create(){
    var list = [];
    
    for (var i=0; i<capacity(); i++){
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

    while(!isNaN(list[i]) && i<capacity()){
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
    order(list);
    
    return aux+1;
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
    var mid;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    mid = Math.trunc( (size(list)/2)-1 );
    
    if ( elem > list[mid] ){
        i = mid;
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
    
    while ( !isNaN(list[i]) && i < size(list) ){
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

function order(list){
    var aux;
    
    for(var i=0; i<(list.length-1); i++){
            for(var j=i+1; j < list.length; j++){
                if( list[i] > list[j] ){
                    aux = list[i];
                    list[i] = list[j];
                    list[j] = aux;
                }
            }
      }
    
    return list;
}

function testConsole(){
    console.log("Capacidad: "+capacity(list));
    console.log("Numero de elementos: "+size(list));
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("¿Lista llena? "+isFull(list));
    console.log("Añadimos un 3. Tamaño: "+add(list, 3));
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("Añadimos un 1. Tamaño: "+add(list, 1));
    console.log("Lista: "+toString(list));
    console.log("Valor de la pos 0: "+get(list, 0));
    console.log("Index del elem 3: "+indexOf(list, 3));
    console.log("Limpiamos lista.");
    clear(list);
    console.log("¿Lista vacia? "+isEmpty(list));
    console.log("Añadimos un 8. Tamaño: "+add(list, 8));
    console.log("Añadimos un 1. Tamaño: "+add(list, 1));
    console.log("Añadimos un 4. Tamaño: "+add(list, 4));
    console.log("Añadimos un 2. Tamaño: "+add(list, 2));
    console.log("Lista: "+toString(list));
    console.log("Primer elemento: "+firstElement(list));
    console.log("Ultimo elemento: "+lastElement(list));
    console.log("Borramos el index 1. Elemento: "+remove(list, 1));
    console.log("Lista: "+toString(list));
    console.log("Borramos el elem 6. ¿Borrado?: "+removeElement(list, 6));
    console.log("Lista: "+toString(list));
}

var list = create();

testConsole();
