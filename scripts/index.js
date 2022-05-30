// Add the coffee to local storage with key "coffee"

// API key for coffee menu``
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

// fetch for catching data from server
fetch(url).then(function (res) {
    return res.json()
}).then(function (res) {
    let coffee = res.menu.data
    localStorage.setItem("coffee", JSON.stringify(coffee))
    display(res.menu.data)
}).catch(function (err) {
    console.log(err)
})

let coffee = JSON.parse(localStorage.getItem("coffee"))

// array and local Storage for saving data in local storage of add to cart items
let addedItems = JSON.parse(localStorage.getItem("addedItems")) || []

const bucketCountDiv = document.querySelector('#coffee_count');
const buckerCount = document.createElement('h2');
buckerCount.innerText = addedItems.length
bucketCountDiv.append(buckerCount)

function display(data) {

    data.forEach(function (elem) {
        const coffeeList = document.querySelector('#menu');

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

        const addBucket = document.createElement('button');
        addBucket.setAttribute("id", "add_to_bucket")
        addBucket.innerText = "Add to Bucket"
        addBucket.addEventListener("click", function () {
            addBucketFunc(elem)
        })

        coffeebox.append(image, title, price, addBucket)

        coffeeList.append(coffeebox)
    })
}

function addBucketFunc(elem) {
    addedItems.push(elem)

    buckerCount.innerText = addedItems.length

    localStorage.setItem("addedItems", JSON.stringify(addedItems))
}
