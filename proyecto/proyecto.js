let dia = prompt("Primera fecha, digite el día de nacimiento (en números)")
let mes = prompt("Digite el mes de nacimiento (en palabras ej: septiembre)")
let signoa = ""

if (dia <= 20 && mes== "enero" || dia >= 22 && mes == "diciembre" ){
    alert("Su signo es Capricornio")
    signoa = "capricornio"
}
else if (dia >= 21 && mes == "enero" || dia <= 19 && mes == "febrero") {
    alert("Su signo es Acuario")
    signoa = "acuario"
}
else if(dia >= 20 && mes == "febrero" || dia <= 20 && mes == "marzo"){
    alert("Su signo es Piscis")
    signoa = "piscis"
}
else if(dia >= 21 && mes == "marzo" || dia <= 20 && mes == "abril"){
    alert("Su signo es Aries")
    signoa = "aries"
}
else if(dia >= 21 && mes == "abril" || dia <= 21 && mes == "mayo"){
    alert("Su signo es Tauro")
    signoa = "tauro"
}
else if(dia >= 22 && mes == "mayo" || dia <= 21 && mes == "junio"){
    alert("Su signo es Géminis")
    signoa = "geminis"
}
else if(dia >= 22 && mes == " junio" || dia <= 22 && mes == "julio"){
    alert("Su signo es Cáncer")
    signoa = "cancer"
}
else if(dia >= 23 && mes == "julio" || dia <= 22 && mes == "agosto"){
    alert("Su signo es Leo")
    signoa = "leo"
}
else if(dia >= 23 && mes == "agosto" || dia <= 22 && mes == "septiembre"){
    alert("Su signo es Virgo")
    signoa = "virgo"
}
else if(dia >= 23 && mes == "septiembre" || dia <= 22 && mes == "octubre"){
    alert("Su signo es Libra")
    signoa = "libra"
}
else if(dia >= 23 && mes == "octubre" || dia <= 22 && mes == "noviembre"){
    alert("Su signo es Escorpio")
    signoa = "escorpio"
}
else if(dia >= 23 && mes == "noviembre" || dia <= 21 && mes == "diciembre"){
    alert("Su signo es Sagitario")
    signoa = "sagitario"
} 
else {
    alert("No se ingresaron los valores correctos")
}


let segundodia = prompt("Segunda fecha, digite el día de nacimiento (en números)")
let segundomes = prompt("Digite el mes de nacimiento (en palabras ej: septiembre)")
let signob = ""

if (segundodia <= 20 && segundomes== "enero" || segundodia >= 22 && segundomes == "diciembre" ){
    alert("Su signo es Capricornio")
    signob = "capricornio"
}
else if (segundodia >= 21 && segundomes == "enero" || segundodia <= 19 && segundomes == "febrero") {
    alert("Su signo es Acuario")
    signob = "acuario"
}
else if(segundodia >= 20 && segundomes == "febrero" || segundodia <= 20 && segundomes == "marzo"){
    alert("Su signo es Piscis")
    signob = "piscis"
}
else if(segundodia >= 21 && segundomes == "marzo" || segundodia <= 20 && segundomes == "abril"){
    alert("Su signo es Aries")
    signob = "aries"
}
else if(segundodia >= 21 && segundomes == "abril" || segundodia <= 21 && segundomes == "mayo"){
    alert("Su signo es Tauro")
    signob = "tauro"
}
else if(segundodia >= 22 && segundomes == "mayo" || segundodia <= 21 && segundomes == "junio"){
    alert("Su signo es Géminis")
    signob = "geminis"
}
else if(segundodia >= 22 && segundomes == " junio" || segundodia <= 22 && segundomes == "julio"){
    alert("Su signo es Cáncer")
    signob = "cancer"
}
else if(segundodia >= 23 && segundomes == "julio" || segundodia <= 22 && segundomes == "agosto"){
    alert("Su signo es Leo")
    signob = "leo"
}
else if(segundodia >= 23 && segundomes == "agosto" || segundodia <= 22 && segundomes == "septiembre"){
    alert("Su signo es Virgo")
    signob = "virgo"
}
else if(segundodia >= 23 && segundomes == "septiembre" || segundodia <= 22 && segundomes == "octubre"){
    alert("Su signo es Libra")
    signob = "libra"
}
else if(segundodia >= 23 && segundomes == "octubre" || segundodia <= 22 && segundomes == "noviembre"){
    alert("Su signo es Escorpio")
    signob = "escorpio"
}
else if(segundodia >= 23 && segundomes == "noviembre" || segundodia <= 21 && segundomes == "diciembre"){
    alert("Su signo es Sagitario")
    signob = "sagitario"
} 
else {
    alert("No se ingresaron los valores correctos")
}


if(signoa == "geminis" && signob == "geminis" || signoa == "geminis" && signob == "libra" || signoa == "geminis" && signob == "leo" || signoa == "geminis" && signob == "acuario" || signoa == "geminis" && signob == "aries"){
    alert("Compatibles")
}
else if(signoa == "geminis" && signob == "piscis" || signoa == "geminis" && signob == "escorpio" || signoa == "geminis" && signob == "tauro" || signoa == "geminis" && signob == "cancer"){
    alert("No Compatibles")
} 
else if(signoa == "geminis" && signob == "sagitario" || signoa == "geminis" && signob == "virgo" || signoa == "geminis" && signob == "capricornio"){
  alert("Compatibilidad media")
}
else if (signoa == "piscis" && signob == "piscis" || signoa == "piscis" && signob == "escorpio" || signoa == "piscis" && signob == "tauro" || signoa == "piscis" && signob == "cancer" || signoa == "piscis" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "piscis" && signob == "geminis" || signoa == "piscis" && signob == "libra" || signoa == "piscis" && signob == "acuario"){
  alert("No compatibles")
}
else if(signoa == "piscis" && signob == "sagitario" || signoa == "piscis" && signob == "leo" || signoa == "piscis" && signob == "aries" || signoa == "piscis" && signob == "virgo"){
  alert("Compatibilidad media")
}
else if(signoa == "escorpio" && signob == "piscis" || signoa == "escorpio" && signob == "escorpio" || signoa == "escorpio" && signob == "tauro" || signoa == "escorpio" && signob == "cancer" || signoa == "escorpio" && signob == "virgo" || signoa == "escorpio" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "escorpio" && signob == "geminis" || signoa == "escorpio" && signob == "libra" || signoa == "escorpio" && signob == "sagitario" || signoa == "escorpio" && signob == "acuario"){
  alert("No compatibles")
}
else if(signoa == "escorpio" && signob == "leo" || signoa == "escorpio" && signob == "aries"){
  alert("Compatibilidad media")
}
else if(signoa == "tauro" && signob == "piscis" || signoa == "tauro" && signob == "escorpio" || signoa == "tauro" && signob == "tauro" || signoa == "tauro" && signob == "cancer" || signoa == "tauro" && signob == "virgo" || signoa == "tauro" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "tauro" && signob == "geminis" || signoa == "tauro" && signob == "sagitario" || signoa == "tauro" && signob == "acuario" || signoa == "tauro" && signob == "aries"){
  alert("No compatibles")
}
else if(signoa == "tauro" && signob == "libra" || signoa == "tauro" && signob == "leo"){
  alert("Compatibilidad media")
}
else if(signoa == "libra" && signob == "geminis" || signoa == "libra" && signob == "libra" || signoa == "libra" && signob == "sagitario" || signoa == "libra" && signob == "leo" || signoa == "libra" && signob == "acuario"){
  alert("Compatibles")
}
else if(signoa == "libra" && signob == "escorpio" || signoa == "libra" && signob == "cancer" || signoa == "libra" && signob == "virgo" || signoa == "libra" && signob == "capricornio"){
  alert("No compatibles")
}
else if(signoa == "libra" && signob == "piscis" || signoa == "libra" && signob == "tauro" || signoa == "libra" && signob == "aries"){
  alert("Compatibilidad media")
}
else if(signoa == "cancer" && signob == "piscis" || signoa == "cancer" && signob == "escorpio" || signoa == "cancer" && signob == "tauro" || signoa == "cancer" && signob == "cancer" || signoa == "cancer" && signob == "virgo" || signoa == "cancer" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "cancer" && signob == "geminis" || signoa == "cancer" && signob == "libra" || signoa == "cancer" && signob == "acuario" || signoa == "cancer" && signob == "aries"){
  alert("No compatibles")
}
else if(signoa == "cancer" && signob == "sagitario" || signoa == "cancer" && signob == "leo"){
  alert("Compatibilidad media")
}
else if(signoa == "sagitario" && signob == "geminis" || signoa == "sagitario" && signob == "libra" || signoa == "sagitario" && signob == "sagitario" || signoa == "sagitario" && signob == "leo" || signoa == "sagitario" && signob == "acuario" || signoa == "sagitario" && signob == "aries"){
  alert("Compatibles")
}
else if(signoa == "sagitario" && signob == "tauro" || signoa == "sagitario" && signob == "virgo" || signoa == "sagitario" && signob == "capricornio"){
  alert("No compatibles")
}
else if(signoa == "sagitario" && signob == "piscis" || signoa == "sagitario" && signob == "escorpio" || signoa == "sagitario" && signob == "cancer"){
  alert("Compatibilidad media")
}
else if(signoa == "leo" && signob == "geminis" || signoa == "leo" && signob == "libra" || signoa == "leo" && signob == "sagitario" || signoa == "leo" && signob == "leo" || signoa == "leo" && signob == "aries"){
  alert("Compatibles")
}
else if(signoa == "leo" && signob == "virgo" || signoa == "leo" && signob == "capricornio"){
  alert("No compatibles")
}
else if(signoa == "leo" && signob == "piscis" || signoa == "leo" && signob == "escorpio" || signoa == "leo" && signob == "tauro" || signoa == "leo" && signob == "cancer" || signoa == "leo" && signob == "acuario"){
  alert("Compatibilidad media")
}
else if(signoa == "acuario" && signob == "geminis" || signoa == "acuario" && signob == "libra" || signoa == "acuario" && signob == "sagitario" || signoa == "acuario" && signob == "leo" || signoa == "acuario" && signob == "acuario" || signoa == "acuario" && signob == "aries"){
  alert("Compatibles")
}
else if(signoa == "acuario" && signob == "tauro" || signoa == "acuario" && signob == "cancer" || signoa == "acuario" && signob == "virgo" || signoa == "acuario" && signob == "capricornio"){
  alert("No compatibles")
}
else if(signoa == "acuario" && signob == "piscis" || signoa == "acuario" && signob == "escorpio"){
  alert("Compatibilidad media")
}
else if(signoa == "aries" && signob == "geminis" || signoa == "aries" && signob == "libra" || signoa == "aries" && signob == "sagitario" || signoa == "aries" && signob == "leo" || signoa == "aries" && signob == "acuario" || signoa == "aries" && signob == "aries"){
  alert("Compatibles")
}
else if(signoa == "aries" && signob == "escorpio" || signoa == "aries" && signob == "tauro" || signoa == "aries" && signob == "cancer" || signoa == "aries" && signob == "capricornio"){
  alert("No compatibles")
}
else if(signoa == "aries" && signob == "piscis" || signoa == "aries" && signob == "virgo"){
  alert("Compatibilidad media")
}
else if(signoa == "virgo" && signob == "piscis" || signoa == "virgo" && signob == "escorpio" || signoa == "virgo" && signob == "tauro" || signoa == "virgo" && signob == "cancer" || signoa == "virgo" && signob == "virgo" || signoa == "virgo" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "virgo" && signob == "geminis" || signoa == "virgo" && signob == "libra" || signoa == "virgo" && signob == "sagitario" || signoa == "virgo" && signob == "aries"){
  alert("No compatibles")
}
else if(signoa == "virgo" && signob == "leo" || signoa == "virgo" && signob == "acuario"){
  alert("Compatibilidad media")
}
else if(signoa == "capricornio" && signob == "piscis" || signoa == "capricornio" && signob == "escorpio" || signoa == "capricornio" && signob == "tauro" || signoa == "capricornio" && signob == "cancer" || signoa == "capricornio" && signob == "virgo" || signoa == "capricornio" && signob == "capricornio"){
  alert("Compatibles")
}
else if(signoa == "capricornio" && signob == "geminis" || signoa == "capricornio" && signob == "sagitario" || signoa == "capricornio" && signob == "acuario" || signoa == "capricornio" && signob == "aries"){
  alert("No compatibles")
}
else if(signoa == "capricornio" && signob == "libra" || signoa == "capricornio" && signob == "leo"){
  alert("Compatibilidad media")
}

