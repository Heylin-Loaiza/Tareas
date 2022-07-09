cantidadVoltios = 0;
maquinaPrendida = true;

while (cantidadVoltios <= 100) {
    maquinaPrendida = prompt("Ingrese cantidad de voltios")
    if(maquinaPrendida <=100){
        console.log("Encendida")
    }
    else if(maquinaPrendida > 100){
        console.log("Apagada")
    }
    break;
}

cantidadVoltios = cantidadVoltios + 1;
   


