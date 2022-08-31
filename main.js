let total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0;
let paymentValue = 0;
let dues = 0;
let shoppingCart = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];
let enteredProduct;

fetch('productos.json')
    .then(response => response.json())
    .then(product => {

        showProducts(product.product_list)
    })

additionOfPricesCart(shoppingCart);

function showProducts(products) {

    let divProductList = document.getElementById("product_list")

    products.forEach((product) => {
        let textProductName = document.createTextNode(product.name + " $ " + product.price);

        let btnAddProduct = document.createElement("button");
        btnAddProduct.innerText = "Añadir Producto"

        btnAddProduct.addEventListener("click", function () { addProductsToCart(product) });

        divProductList.appendChild(textProductName)
        divProductList.appendChild(document.createElement("br"))
        divProductList.appendChild(btnAddProduct)
        divProductList.appendChild(document.createElement("br"))
        divProductList.appendChild(document.createElement("br"))
    });

}

function calculatedues(total, dues) {
    return total / dues

}

function additionOfPricesCart(shoppingCart) {
    let additionCart = 0;
    shoppingCart.forEach(({ price }) => {
        additionCart += price

    });
    return total = additionCart
}

function makePayment() {

    let inputMeansOfPayment = document.getElementById("paymentMethod")

    let chosenMethodOfPayment = inputMeansOfPayment.options[inputMeansOfPayment.selectedIndex].value

    switch (chosenMethodOfPayment) {

        case ("debit"):
            total = total

            break;

        case ("credit"):
            let inputDues = document.getElementById("dues")

            dues = inputDues.options[inputDues.selectedIndex].value

            paymentValue = calculatedues(...[total, dues])

            break;

    }

}

function checkout() {

    let checkout = document.getElementById("checkout")
    checkout.innerText = "total de la compra $" + total + ".\n Los productos que estas llevando son:\n"
    shoppingCart.forEach(({ model }) => {
        checkout.innerText = checkout.innerText + model + ","

    })

    if (dues != 0) {
        let duesPay = document.getElementById("duesPay")
        duesPay.innerText = "vas a pagar " + dues + " cuotas de $" + paymentValue

        additionOfPricesCart(shoppingCart)
    }

    deleteCart()
    finishToast()
}

function addProductsToCart(product) {
    total = total + product.price
    shoppingCart.push(product)
    updateStorage();
    showToast(product.model)

}

function onNextClicked() {
    makePayment();
    additionOfPricesCart(shoppingCart);
    checkout();
}


function updateStorage() {
    localStorage.setItem("carritoDeCompras", JSON.stringify(shoppingCart));
    localStorage.setItem("total", total)

}

function deleteCart() {
    localStorage.clear("total")
    total = 0
    shoppingCart = []
}

function showToast(productName) {
    Toastify({
        text: "Se añadio al carrito" + productName,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,

    }).showToast();

}

function finishToast() {
    Toastify({
        text: "Gracias por su compra",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,

    }).showToast();

}

let btnNext = document.getElementById("btnNext");
btnNext.addEventListener("click", function () { onNextClicked() }); 
