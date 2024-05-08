function rayaVertical(listaDeListas,indice){
    let prueba = []
    console.log(listaDeListas)
    for(lista in listaDeListas){
        console.log(`listaDeListas[${lista}][${indice}]`)
        prueba.push(listaDeListas[lista][indice])
        console.log(prueba)
    }
    return prueba
}

function tresEnRaya(lineas){
    for(linea in lineas){
        lineas[linea] = lineas[linea].join("")
    }
    console.log(lineas)
    let prueba = []
    for(index in lineas){
        prueba.push(rayaVertical(lineas,index))
    }
    for(linea in prueba){
        if(prueba[linea].every(valor => valor === "x")){
            console.log("Ganó X")
        } else if (prueba[linea].every(valor => valor === "o")){
            console.log("Ganó O")
        }
    }
    console.log(prueba)
}

tresEnRaya([[ 'x', 'o', 'x' ],[ 'o', 'o', 'x' ],[ 'o', 'x', 'x' ]])