//primer entraga
/*
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
*/

//entregas varias




function mostrarProductos(mapaDeProductos) {
    document.getElementById("teclado").innerHTML = "Teclado $ " + mapaDeProductos.teclado.precio
    document.getElementById("mouse").innerHTML = "mouse $ " + mapaDeProductos.mouse.precio
    document.getElementById("monitor").innerHTML = "monitor $ " + mapaDeProductos.monitor.precio
    document.getElementById("combo").innerHTML = "combo $ " + mapaDeProductos.combo.precio
}

let mapaDeProductos = {
    teclado: {
        precio: 600,
        modelo: " Teclado red dragon"
    },
    mouse: {
        precio: 300,
        modelo: " Mouse logitech"
    },
    monitor: {
        precio: 1000,
        modelo: " Monitor samsung"

    },
    combo: {
        precio: 1900,
        modelo: " Teclado, Mouse, Monitor"
    }


}


let precioFinalDeLaCompra = 0;
let total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0;
let valorCuota = 0;
let cuotas = 0;
let carritoDeCompras = localStorage.getItem("carritoDeCompras") ? JSON.parse(localStorage.getItem("caritoDeCompras")) : [];

let productoingresado;

mostrarProductos(mapaDeProductos)
sumaDePreciosChango(carritoDeCompras);


function calcularCuotas(total, cuotas) {
    return total / cuotas

}

function sumaDePreciosChango(carritoDeCompras) {
    let sumasChango = 0;
    carritoDeCompras.forEach(({precio}) => {
        sumasChango += precio

    });
    return precioFinalDeLaCompra = sumasChango
}

function realizarPago() {

    let inputmedioDePago = document.getElementById("medioDePago")

    let medioDePagoElegido = inputmedioDePago.options[inputmedioDePago.selectedIndex].value
    console.log(medioDePagoElegido)

    switch (medioDePagoElegido) {

        case ("efectivo"):
            total = total / 2
            break;

        case ("tarjeta"):
            let inputCuotas = document.getElementById("cuotas")

            cuotas = inputCuotas.options[inputCuotas.selectedIndex].value

            console.log(cuotas)
            valorCuota = calcularCuotas(...[total, cuotas])
            console.log(valorCuota + " resultado de las cuotas")
            break;



    }



}

function finalizarCompra() {

    let finalizarCompra = document.getElementById("finalizarCompra")
    finalizarCompra.innerText = "total de la compra $" + precioFinalDeLaCompra + ".\n Los productos que estas llevando son:\n"
    carritoDeCompras.forEach(({modelo,}) => {
        finalizarCompra.innerText = finalizarCompra.innerText + modelo + ","

    })

    if (cuotas != 0) {
        let cuotasAPagar = document.getElementById("cuotasAPagar")
        cuotasAPagar.innerText = "vas a pagar " + cuotas + " cuotas de $" + valorCuota

        sumaDePreciosChango(carritoDeCompras)
    }

    borrarCarro()
}


let botonTeclado = document.getElementById("btnAgregarTeclado");
botonTeclado.addEventListener("click", agregarTecladoAlCarrito);

let botonMouse = document.getElementById("btnAgregarMouse");
botonMouse.addEventListener("click", agregarMouseAlCarrito);

let botonMonitor = document.getElementById("btnAgregarMonitor");
botonMonitor.addEventListener("click", agregarMonitorAlCarrito);

let botonCombo = document.getElementById("btnAgregarCombo");
botonCombo.addEventListener("click", agregarComboAlCarrito);

let botonContinuar = document.getElementById("btnContinuar");
botonContinuar.addEventListener("click", continuar);



function agregarTecladoAlCarrito() {
    total = total + mapaDeProductos.teclado.precio
    carritoDeCompras.push(mapaDeProductos.teclado)
    carritoDeCompras = [...carritoDeCompras,mapaDeProductos.teclado]
    actulizacionDelStorage();
}

function agregarMouseAlCarrito() {
    total = total + mapaDeProductos.mouse.precio
    carritoDeCompras.push(mapaDeProductos.mouse)
    actulizacionDelStorage();
}

function agregarMonitorAlCarrito() {
    total = total + mapaDeProductos.monitor.precio
    carritoDeCompras.push(mapaDeProductos.monitor)
    actulizacionDelStorage();
}

function agregarComboAlCarrito() {
    total = total + mapaDeProductos.combo.precio
    carritoDeCompras.push(mapaDeProductos.combo)
    actulizacionDelStorage();
}

function continuar() {
    realizarPago();
    sumaDePreciosChango(carritoDeCompras);
    finalizarCompra();
}


function actulizacionDelStorage() {
    localStorage.setItem("caritoDeCompras", JSON.stringify(carritoDeCompras));
    localStorage.setItem("total", total)

}

function borrarCarro() {
    localStorage.clear("total")
    total = 0

}