
const confirmButton = document.querySelector('#confirm');
confirmButton.addEventListener("click", checkoutFun)

function checkoutFun() {
    event.preventDefault()
    const name = document.querySelector('#name').value;
    const number = document.querySelector('#number').value;
    const address = document.querySelector('#address').value;
    if (name == "") {
        alert("Please Enter your Name")
    }
    else if (number == "") {
        alert("Please Enter your Number")
    }
    else if (address == "") {
        alert("Please Enter your Address")
    }
    else {
        alert("Your order is accepted")

        setTimeout(function () {
            alert("Your order is being Prepared")
        }, 3000)

        setTimeout(function () {
            alert("Your order is being packed")
        }, 8000)

        setTimeout(function () {
            alert("Your order is out for delivery")
        }, 10000)

        setTimeout(function () {
            alert("Order delivered")
        }, 12000)
    }
}