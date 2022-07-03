let entrada = prompt('Ingrese su texto ("salir" para finalizar)')

while (entrada != "salir") {
    switch (entrada) {
        case ("hola"):
            console.log("Hola como estas")
            break;
        case ("chau"):
            console.log("Chau,hasta luego")
            break;
        default:
            console.log("No entiendo")
            break;
    }
    entrada = prompt('Ingrese su texto ("salir" para finalizar)')
    
}
console.log ("Gracias,vuelvas prontos")