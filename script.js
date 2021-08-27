let test = [1, 2, 3, 4, 5]

function newForEach(array, callback) {
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index];
        callback(currentValue, index, array);
    }
}

function newFill(array, valor, inicio=0, fim=array.length) {
    for(let index = inicio; index < fim; index++){
        array[index] = valor;
    }
    return array;
}

function newMap(array, callback) {
    let newArray = [];
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index];
        newArray.push(callback(currentValue, index, array));
    }
    return newArray;
}

function newSome(array, callback) {
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index];
        if(callback(currentValue, index, array) === true){
            return true;
        }
    }
    return false;
}

function newFind(array, callback) {
    for(let index = 0; index < array.length; index++){
        if(callback(array[index], index, array) === true){
            return array[index];
        }
    }
    return undefined;
}

function newFindIndex(array, callback) {
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        if(callback(element, index, array) === true){
            return index;
        }
    }
    return -1;
}

function newEvery(array, callback) {
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index];
        if(callback(currentValue, index, array) === false){
            return false;
        }
    }
    return true;
}

function newFilter(array, callback) {
    let newArray = [];
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        if(callback(element, index, array) === true){
            newArray.push(element);
        }
    }
    return newArray;
}

function newConcat(arrayX, arrayY) {
    for(const index in arrayY){
        const element = arrayY[index];
        arrayX.push(element);
    }
    return arrayX ;
}

function newIncludes(array, element, fromIndex = 0) {
    for(let index = fromIndex; index < array.length; index++){
        const currentValue = array[index];
        if(currentValue === element){
            return true;
        }
    }
    return false;
}

function newIndexOf(array, element, fromIndex = 0) {
    if(fromIndex < 0){
        fromIndex = array.length - Math.abs(fromIndex);
    }
    for(let index = fromIndex; index < array.length; index++){
        const currentElement = array[index];
        if(currentElement === element){
            return index;
        }
    }
    return -1
}

function newJoin(array, separator) {
    let newString = ''
    for(let index = 0; index < array.length-1; index++){
        newString += `${array[index]}${separator}`
    }
    newString += `${array[array.length-1]}`
    return newString
}

function newReduce(array, callback, valorInicial) {
    let acumulador = array[0];
    let index = 1;
    if(valorInicial !== undefined){
        acumulador = valorInicial;
        index = 0;
    }
    for(index; index < array.length; index++){
        let valorAtual = array[index];
        acumulador = callback(acumulador, valorAtual, index, array);
    }
    return acumulador;
}

