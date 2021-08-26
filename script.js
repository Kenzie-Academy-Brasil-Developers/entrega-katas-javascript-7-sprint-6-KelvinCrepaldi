let test = [1, 2, 3, 4, 5]

function newForEach(array, callback) {
    for(let index = 0; index < array.length; index++){
        const currentValue = array[index]
        callback(currentValue, index, array)
    }
}

function newFill(array, valor, inicio=0, fim=array.length) {
    for(let i = inicio; i<fim; i++){
        array[i] = valor
    }
    return array
}

function newMap(array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function newSome(array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            return true
        }
    }
    return false
}

function newFind(array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            return array[i]
        }
    }
    return undefined
}

function newFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            return i
        }
    }
    return -1
}

function newEvery(array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === false){
            return false
        }
    }
    return true
}

function newFilter(array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            newArray.push(array[i])
        }
    }
    return newArray
}

function newConcat(arrayX, arrayY) {
    for(const i in arrayY){
        arrayX.push(arrayY[i])
    }
    return arrayX 
}

function newIncludes(array, element, fromIndex = 0) {
    for(let i = fromIndex; i < array.length; i++){
        if(array[i] === element){
            return true
        }
    }
    return false
}

function newIndexOf(array, element, fromIndex = 0) {
    for(let i = fromIndex; i < array.length; i++){
        if(array[i] === element){
            return i
        }
    }
    return -1
}

function newJoin(array, separator) {
    let newString = ''
    for(let i = 0; i < array.length-1; i++){
        newString += `${array[i]}${separator}`
    }
    newString += `${array[array.length-1]}`
    return newString
}

function newReduce(array, callback) {
    let result = array[0]
    for(let i = 1; i < array.length; i++){
        result = callback(result, array[i])
    }
    return result
}

