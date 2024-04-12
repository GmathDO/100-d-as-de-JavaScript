console.log("4 + 9 = "+(4+9));
console.log("4 - 9 = "+(4-9));
console.log("4 * 9 = "+(4*9));
console.log("4 / 9 = "+(4/9));
console.log("4 % 2 ="+(4%2))
console.log("4 > 9: "+(4>9));
console.log("4 < 9: "+(4<9));
console.log("4 == 9: "+(4 == 9));

//Estructuras de control
/*try{
    let numero = parseInt(prompt("Ingrese un número: "))
    if(numero > 9){
        console.log(`${numero} es mayor que 9`)
    }
} catch(error){
    console.log("Hubo un error");
}*/

let contador = 0
while(contador < 11){
    console.log(contador);
    contador++;
}

for(let i = 0; i < 11; i++){
    console.log(i);
}

let cuenta = 10

while(cuenta < 55+1){
    if(cuenta != 16 && (cuenta % 2) == 0 && (cuenta % 3 == 0)){
        console.log(cuenta);
    }
    cuenta++;
}