// On clicking remove button the item should be removed from DOM as well as localstorage.

let addedItems = JSON.parse(localStorage.getItem("addedItems"))


let amount = addedItems.reduce(function (acc, elem) {
    return acc + elem.price
}, 0)

const total_amount = document.querySelector('#total_amount');
total_amount.innerText = amount

display(addedItems)

function display(data) {

    data.forEach(function (elem, index) {
        const bucket = document.querySelector('#bucket');

        const coffeebox = document.createElement('div');
        coffeebox.setAttribute("id", "coffeebox")

        const image = document.createElement('img');
        image.setAttribute("id", "coffeeImage")
        image.src = elem.image

        const title = document.createElement('h4');
        title.setAttribute("id", "title")
        title.innerText = `Coffee type: ${elem.title}`

        const price = document.createElement('p');
        price.setAttribute("id", "price")
        price.innerText = `Price: ${elem.price}/- Rs.`

        const remove_coffee = document.createElement('button');
        remove_coffee.setAttribute("id", "remove_coffee")
        remove_coffee.innerText = "Remove Item"
        remove_coffee.addEventListener("click", function () {
            removeCoffee(elem, index)
        })

        coffeebox.append(image, title, price, remove_coffee)

        bucket.append(coffeebox)
    })
}

function removeCoffee(elem, index) {
    addedItems.splice(index, 1)
    localStorage.setItem("addedItems", JSON.stringify(addedItems))
    window.location.reload()
}

const confirm_checkout = document.querySelector('#confirm_checkout');
confirm_checkout.addEventListener("click", function () {
    window.location.href = "./checkout.html"
})