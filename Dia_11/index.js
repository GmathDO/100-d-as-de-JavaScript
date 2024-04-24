function decimalBinario(decimal){
    let cociente = parseInt(decimal/2)
    let resto = parseInt(decimal%2)
    let resultado = []
    resultado.push(resto)
    while(cociente > 2){
        resto = parseInt(cociente%2);
        resultado.unshift(resto)
        cociente = parseInt(cociente/2);
    }
    resultado.unshift(cociente)
    resultado = parseInt(resultado.join(""))
    console.log(resultado)
}

decimalBinario(450)