function areaPoligono(poligono,base,altura){
    if (poligono.toLowerCase() === "triangulo" || poligono.toLowerCase() === "triángulo"){
        return (base*altura)/2
    } else if(poligono.toLowerCase() === "cuadrado"){
        return base*altura;
    } else if(poligono.toLowerCase() === "rectangulo" || poligono.toLowerCase() === "rectángulo"){
        return base*altura;
    }
}