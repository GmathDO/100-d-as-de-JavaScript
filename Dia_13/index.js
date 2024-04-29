function equilibrada(expresion){
    let apertura = {"llave": [], "corchete": [], "parentesis": []}
    let cierre = {"llave": [], "corchete": [], "parentesis": []}
    const lista = expresion.split("")
    let orden = 0;
    for(simbolo in {"{": null,"[": null,"(":null}){
        let idx = lista.indexOf(simbolo);
        while (idx != -1) {
            apertura[Object.keys(apertura)[orden]].push(idx);
            idx = lista.indexOf(simbolo, idx + 1);
        }
        orden++
    }
    orden = 0;
    for(simbolo in {"}": null,"]": null,")":null}){
        let idx = lista.indexOf(simbolo);
        while (idx != -1) {
            cierre[Object.keys(cierre)[orden]].push(idx);
            idx = lista.indexOf(simbolo, idx + 1);
        }
        orden++
    }
    for(key in apertura){
        let index = 0;
        if(apertura[key].length != cierre[key].length){
            console.log("La expresion no esta equilibrada")
            break
        }
    }
}

equilibrada("{ [ a * ( c + d ) ] - 5 }")












