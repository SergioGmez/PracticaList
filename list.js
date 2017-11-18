"use strict";

var elementMax = 4;

function create(){
    var list = [];
    
    for (var i=0; i<elementMax; i++){
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
    
    if (!isNaN(list[elementMax-1])){
        return true;
    }else{
        return false;
    }
}

function size (list){
    var numElement = 0;
    var i = 0;

    while(!isNaN(list[i]) && i<elementMax){
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
    var aux;
    var i;
    
    if (isNaN(elem)){
        return "Error. The element is not a number."
    }
    
    if (isFull(list)){
        return "Error. The list is full."; 
    }
    
    if ( index < 0 || index > elementMax){
        return "The index is out of the limits of the list";
    }
    
    for (i=0; i<index; i++){
        if ( isNaN(list[i]) ){
            return "Error. The list has empty indexes before.";
        }
    }
    
    i = index;
            
    do{
        aux = list[i];
        list[i] = elem;
        list[i+1] = aux;
        i++;
            
    }while( i<elementMax && !isNaN(list[i+1]))   
    
    return size(list);                   
}

function get (list, index){
    
    if ( index < 0 || index > elementMax){
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

function capacity (list){
    return elementMax;
}

function clear (list){
    
    for (var i=0; i<elementMax; i++){
        list[i] = Number.NaN;
    }
}

function firstElement(list){
    
    if (isEmpty(list)){
        return "Error. The stack is empty."
    }
    
    return list[0];
}

function lastElement(list){
    
    if (isEmpty(list)){
        return "Error. The stack is empty."
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
        return "Error. The stack is empty."
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
    
    if ( index < 0 || index > elementMax){
        return "The index is out of the limits of the list";
    }
    
    aux = list[index];
    list[index] = elem
    
    return aux;
}
 


function mostrar(list){
    for (var i=0; i<list.length; i++){
        console.log("Posicion "+i+" "+list[i]);
    }
}

var list = create();

console.log("Capacidad: "+capacity(list));
console.log("¿Lista vacia? "+isEmpty(list));
console.log("¿Lista llena? "+isFull(list));
console.log("Numero de elementos: "+size(list));
console.log("Añadimos 1: "+add(list, 1));
//console.log("Añadimos 2: "+addAt(list, 2, 0));
console.log("Añadimos 2: "+add(list, 2));
console.log("Añadimos 3: "+add(list, 3));
console.log("Añadimos 4: "+add(list, 4));
console.log("Numero de elementos: "+size(list));
console.log("Añadimos 5: "+add(list, 5));
console.log("Cadena: "+toString(list));
mostrar(list);
//console.log(remove(list, 1));
console.log(removeElement(list, 2));
//console.log(remove(list, 0));
mostrar(list);
/*console.log("Buscar 6: "+indexOf(list, 3));
console.log("Buscar 6 por fnal: "+lastIndexOf(list, 2));
//clear(list);
//console.log("¿Lista vacia? "+isEmpty(list));
console.log("Primer elem: "+firstElement(list));
console.log("Ultimo elem: "+lastElement(list));
console.log("Borramos 6: "+remove(list, 1));
console.log("Cadena: "+toString(list));
//console.log("Borramos 3: "+removeElement(list, 2));
//console.log("Cadena: "+toString(list));
console.log("Cambiamos 3 por 6: "+set(list, 3, 0));
console.log("Cadena: "+toString(list));*/




//push(pila, 8);
//console.log(pop(pila));
//console.log("Ultimo elemento: "+peek(pila));
//console.log("Numero de elementos: "+size(pila));
//mostrar(list);
