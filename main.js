
function mostrarProductos(mapaDeProductos) {
    document.getElementById("teclado").innerHTML = "Teclado $ " + mapaDeProductos.teclado.precio
    document.getElementById("mouse").innerHTML = "mouse $ " + mapaDeProductos.mouse.precio
    document.getElementById("monitor").innerHTML = "monitor $ " + mapaDeProductos.monitor.precio
    document.getElementById("combo").innerHTML = "combo $ " + mapaDeProductos.combo.precio
}


let mapaDeProductos;

fetch('productos.json')
.then(response =>response.json() )
.then(productos =>{
    mapaDeProductos = productos
    mostrarProductos(productos)})




let total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0;
let valorCuota = 0;
let cuotas = 0;
let carritoDeCompras = localStorage.getItem("carritoDeCompras") ? JSON.parse(localStorage.getItem("carritoDeCompras")) : [];

let productoingresado;


sumaDePreciosChango(carritoDeCompras);


function calcularCuotas(total, cuotas) {
    return total / cuotas

}

function sumaDePreciosChango(carritoDeCompras) {
    let sumasChango = 0;
    carritoDeCompras.forEach(({precio}) => {
        sumasChango += precio

    });
    return total = sumasChango
}

function realizarPago() {

    let inputmedioDePago = document.getElementById("medioDePago")

    let medioDePagoElegido = inputmedioDePago.options[inputmedioDePago.selectedIndex].value
    console.log(medioDePagoElegido)

    switch (medioDePagoElegido) {

        case ("debito"):
            total = total / 2
        
            break;

        case ("credito"):
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
    finalizarCompra.innerText = "total de la compra $" + total + ".\n Los productos que estas llevando son:\n"
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
botonTeclado.addEventListener("click", function(){agregarProductoAlCarrito(mapaDeProductos.teclado)});

let botonMouse = document.getElementById("btnAgregarMouse");
botonMouse.addEventListener("click", function(){agregarProductoAlCarrito(mapaDeProductos.mouse)});

let botonMonitor = document.getElementById("btnAgregarMonitor");
botonMonitor.addEventListener("click", function(){agregarProductoAlCarrito(mapaDeProductos.monitor)} );

let botonCombo = document.getElementById("btnAgregarCombo");
botonCombo.addEventListener("click", function (){agregarProductoAlCarrito(mapaDeProductos.combo)});

let botonContinuar = document.getElementById("btnContinuar");
botonContinuar.addEventListener("click", continuar);

function agregarProductoAlCarrito(producto){
    total = total + producto.precio
    carritoDeCompras.push(producto)
    actulizacionDelStorage();
    mostrarToast(producto.modelo)

}

function continuar() {
    realizarPago();
    sumaDePreciosChango(carritoDeCompras);
    finalizarCompra();
}


function actulizacionDelStorage() {
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
    localStorage.setItem("total", total)

}

function borrarCarro() {
    localStorage.clear("total")
    total = 0
    carritoDeCompras = []
}

function mostrarToast(nombreDelProducto){
    Toastify({
        text: "Se añadio al carrito" + nombreDelProducto,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        
      }).showToast();


}


