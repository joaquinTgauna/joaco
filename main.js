let total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0;
let paymentValue = 0;
let dues = 0;
let shoppingCart = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];
let enteredProduct;


fetch('productos.json')
    .then(response => response.json())
    .then(product => {

        showproducts(product.product_list)
    })

additionOfPricesCart(shoppingCart);


function showproducts(products) {
    products.forEach((product) => {
        document.getElementById(product.id).innerHTML = product.name + " $ " + product.price
        let newButton = document.getElementById("btnAdd" + product.id);
        newButton.addEventListener("click", function () { addProductsToCart(product) });
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
    console.log(chosenMethodOfPayment)

    switch (chosenMethodOfPayment) {

        case ("debit"):
            total = total / 2

            break;

        case ("credit"):
            let inputDues = document.getElementById("dues")

            dues = inputDues.options[inputDues.selectedIndex].value

            console.log(dues)
            paymentValue = calculatedues(...[total, dues])
            console.log(paymentValue + " resultado de las cuotas")
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

function Next() {
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

let newButton = document.getElementById("btnNext");
newButton.addEventListener("click", function () { Next() }); 
