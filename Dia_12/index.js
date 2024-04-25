function aCodigoMorse(texto){
    const diccionarioMorse = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "ñ": "--.--",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        '"': ".-..-.",
        "/": "-..-."
      };
    
    
    let index = 0
    let textoC = texto.replaceAll(" ", "|")
    let textoMorse = textoC
    for(let i = textoC.length; i != 0; i--){
        if(i == 1){
            textoMorse = textoMorse.replace(textoC[index], diccionarioMorse[textoC[index]])
        } else if(textoC[index] === "|"){
            textoMorse = textoMorse.replace(textoC[index], "  ")
        } else if(textoC[index+1] === "|"){
            textoMorse = textoMorse.replace(textoC[index], diccionarioMorse[textoC[index]])
        } else{
            textoMorse = textoMorse.replace(textoC[index], `${diccionarioMorse[textoC[index]]} `)
        }
        index++
    }
    console.log(textoMorse)
}

aCodigoMorse("hola que tal")