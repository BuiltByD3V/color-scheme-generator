import {menuArray} from './data.js'

const order = []

document.addEventListener('click', function(e){
    let itemId = 0
    if (e.target.dataset.add) {
        addItemToOrder(Number(e.target.dataset.add))
        itemId = Number(e.target.dataset.add)
    } 
    else if (e.target.dataset.remove) {
        removeItemFromOrder(Number(e.target.dataset.remove))
        itemId = Number(e.target.dataset.remove)
    }
    else if (e.target.dataset.completeorder)
        document.getElementById('payment-modal').classList.toggle('hidden')

    return itemId
})

function addItemToOrder(itemId) {
    document.getElementById('success-modal').classList.add('hidden')
    menuArray.filter(item => {
        if (item.id === itemId){
            order.push(item)
        }
    })
    renderOrder(order)
}

function removeItemFromOrder(index) {
    order.splice(index, 1)
    renderOrder(order)
}

function renderMenu() {
    const menuHTML = menuArray.map(function(item){
        return `
            <div class="menu-item">
                <div class="item-graphic">${item.emoji}</div>
                <div class="item-details">
                    <h2 class="item-title">${item.name}</h2>
                    <p class="item-ingredients">${item.ingredients.join(', ')}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="add-btn" aria-label="Add ${item.name} to order" data-add="${item.id}">+</button>
            </div>
        `
    }).join('')
    document.getElementById('menu-items').innerHTML = menuHTML
    return menuHTML
}

renderMenu()

function renderOrder() {
    const orderToggle = document.getElementById('order-section')
    const yourOrder = document.getElementById('order-list')
    const totalHTML = document.getElementById('total-price')
    let totalPrice = 0

    order.forEach(item => totalPrice += item.price)
    
    if (order.length == 0) {
        orderToggle.classList.add('hidden')
    } 
    else if (!order.length == 0) {
        orderToggle.classList.remove('hidden')
    }

    yourOrder.innerHTML = order.map((item, index) => {
        return `
        <div class="order-line">
            <div class="order-line-left">
                <span class="order-item-name">${item.name}</span>
                <button class="remove-btn" data-remove="${index}">remove</button>
            </div>
                <span class="order-item-price">$${item.price}</span>
        </div>`
    }).join('')

    totalHTML.innerHTML = `
            <span class="total-label">Total price:</span>
            <span class="total-price">$${totalPrice}</span>
            `
}

const paymentForm = document.getElementById('payment-form')

paymentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const paymentModal = document.getElementById('payment-modal')
    const successModal = document.getElementById('success-modal')
    const fullName = document.getElementById('fullName')

    paymentModal.classList.add('hidden')

    order.length = 0
    document.getElementById('order-section').classList.add('hidden')

    successModal.classList.remove('hidden')
    successModal.innerHTML = `Thanks, ${document.getElementById('fullName').value}. Your order is on its way!`

    fullName.value = ''
    document.getElementById('cardNumber').value = ''
    document.getElementById('cvv').value = ''

})