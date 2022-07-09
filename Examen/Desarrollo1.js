let primeranota = Number(prompt ("Ingrese primer nota del 0 al 100"))
let segundanota = Number(prompt ("Ingrese segunda nota del 0 al 100"))
let terceranota = Number(prompt ("Ingrese tercera nota del 0 al 100"))

let promedio = (primeranota + segundanota + terceranota)/3

if (promedio <= 64){
    alert("Esta quedado " + promedio.toFixed(3))
}
else if (promedio >=65 && promedio <= 70){
    alert("Pasó raspando " + promedio.toFixed(3))
}
else if (promedio >= 71 && promedio <= 84){
    alert("No esta mal " + promedio.toFixed(3))
}
else if (promedio >= 85 && promedio <= 99){
    alert("Muy bien " + promedio.toFixed(3))
}
else if (promedio == 100){
    alert("Excelente te ganaste un abrazo " + promedio.toFixed(3))
}
else {
    alert("Ingrese los valores correctos")
}