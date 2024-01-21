//1
let listaGeneral = [0,1,2,3,4];
//2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
//Salida (5) ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
//3
lenguajesDeProgramacion.push('Java','Ruby', 'GoLang')
//Salida (8) ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']0: "JavaScript"1: "C"2: "C++"3: "Kotlin"4: "Python"5: "Java"6: "Ruby"7: "GoLang"length: 8[[Prototype]]: Array(0)
//Funcion para mostrar la lista;
//4
function muetraLista() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
    return;
} 

//Mi respuesta 5
function muetraListaAlReves() {
    for (let i = 0; lenguajesDeProgramacion.length > i; lenguajesDeProgramacion.length--) {
        console.log(lenguajesDeProgramacion[lenguajesDeProgramacion.length-1]);
    }
    return;
} 
//Respuesta del instructor
/*function muetraListaAlReves() {
    for (let i = lenguajesDeProgramacion.length - 1;  i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
    return;
} 
*/
//6
function promedio() {
    let suma =0;
    for (let i = 0; i < listaGeneral.length; i++) {
        suma += listaGeneral[i];        
    }
    resultado = suma/listaGeneral.length;
    console.log(resultado);
}
//7
function numeroMasGrande() {
    let mayor= listaGeneral[0];
    let menor= listaGeneral[0];
    for (let i = 0; i < listaGeneral.length; i++){
        if(listaGeneral[i]> mayor ){
            mayor = listaGeneral[i];
        }if(listaGeneral[i] < menor){
            menor = listaGeneral[i];
        }
    }
    console.log(`Mayor: ${mayor}`);
    console.log(`Menor: ${menor}`);
}
//8
function suma() {
    let suma =0;
    for (let i = 0; i < listaGeneral.length; i++) {
        suma += listaGeneral[i];        
    }
    console.log(suma);
}
//9
let elemento = 1;
function encontrarIndiceElemento(listaGeneral, elemento) {
    for (let i = 0; i < listaGeneral.length; i++) {
      if (listaGeneral[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
let lista1=[1,3,5];
let lista2=[2,4];
let lista3=[];

function sumaDeListas(){
    lista3 = lista1.concat(lista2);
    console.log(lista3);
}

function listaAlCuadrado(){
    for(let i=0; i < lista1.length;  i++){
        //(lista1[i]*2);
        lista3.push(lista1[i]*2);
    }
    console.log(lista3);
}