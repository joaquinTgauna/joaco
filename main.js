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
        modelo: "red dragon"
    },
    mouse: {
        precio: 300,
        modelo: "logitech"
    },
    monitor: {
        precio: 1000,
        modelo: "samsung"

    },
    combo: {
        precio: 1900,
        componentes: "Teclado, Mouse, Monitor"
    }


}


let precioschango = [];
let precioFinalDeLaCompra = 0;
let listachango = [];
let total = 0;
let valorCuota = 0;
let cuotas = 0;

let productoingresado;

mostrarProductos(mapaDeProductos)
sumaDePreciosChango(precioschango);


function calcularCuotas(total, cuotas) {
    return total / cuotas

}

function sumaDePreciosChango(precioschango) {
    let sumasChango = 0;
    precioschango.forEach((numero) => {
        sumasChango += numero

    });
    return precioFinalDeLaCompra = sumasChango
}

function realizarPago() {
    medioDePago = prompt('ingrese efectivo o tarjeta para continuar,para finalizar su compra escriba "finalizar"')

    while (medioDePago != "finalizar") {
        switch (medioDePago) {

            case ("efectivo"):
                total = total / 2
                break;

            case ("tarjeta"):
                cuotas = prompt("indique cantida de cuotas")
                valorCuota = calcularCuotas(total, cuotas)
                console.log(valorCuota + " resultado de las cuotas")
                break;


            default:
                alert("medio de pago incorrecto")
                break;


        }

        medioDePago = prompt('ingrese Efectivo o Tarjeta,para finalizar su compra escriba "finalizar"')

    }



}

function finalizarCompra() {

    alert("Gracias por su compra")

    alert("total de la compra $" + precioFinalDeLaCompra + ".\n Los productos que estas llevando son:\n" + listachango)

    if (cuotas != 0) {
        alert("vas a pagar " + cuotas + " cuotas de $" + valorCuota)

        sumaDePreciosChango(precioschango)
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
    listachango.push(mapaDeProductos.teclado.modelo + "= $" + mapaDeProductos.teclado.precio);
    precioschango.push(mapaDeProductos.teclado.precio);
    actulizacionDelStorage();
}

function agregarMouseAlCarrito() {
    total = total + mapaDeProductos.mouse.precio
    listachango.push(mapaDeProductos.mouse.modelo + "= $" + mapaDeProductos.mouse.precio);
    precioschango.push(mapaDeProductos.mouse.precio);
    actulizacionDelStorage();
}

function agregarMonitorAlCarrito() {
    total = total + mapaDeProductos.monitor.precio
    listachango.push(mapaDeProductos.monitor.modelo + "= $" + mapaDeProductos.monitor.precio);
    precioschango.push(mapaDeProductos.monitor.precio);
    actulizacionDelStorage();
}

function agregarComboAlCarrito() {
    total = total + mapaDeProductos.combo.precio
    listachango.push(mapaDeProductos.combo.modelo + "= $" + mapaDeProductos.combo.precio);
    precioschango.push(mapaDeProductos.combo.precio);
    actulizacionDelStorage();
}

function continuar() {
    realizarPago();
    sumaDePreciosChango(precioschango);
    finalizarCompra();
}


function actulizacionDelStorage() {
    localStorage.setItem("precioschango", JSON.stringify(precioschango));
    localStorage.setItem("total", total)
    localStorage.setItem("listachango", JSON.stringify(listachango));

}


if (localStorage.getItem("listachango")) {
    listachango = JSON.parse(localStorage.getItem("listachango"));
}


if (localStorage.getItem("precioschango")) {
    precioschango = JSON.parse(localStorage.getItem("precioschango"));
}

if(localStorage.getItem("total")){
    total = JSON.parse(localStorage.getItem("total"))
}

function borrarCarro(){
    localStorage.clear("total")
    total = 0

}