async function sumarConTiempo(numero1, numero2, segundos){
    const sumar = (numero1, numero2) => (console.log(numero1 + numero2))
    segundos = segundos*1000;
    return setTimeout(sumar, segundos, numero1, numero2)
}

sumarConTiempo(5, 5, 5)