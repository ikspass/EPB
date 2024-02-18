let ordersInfoListContainer = document.getElementById('orders-info-list');
let ordersItemListContainer;
let ordersInfoList = [];

function addOrderItem(name, price, type, quantity){
    let orderItemContainer = document.createElement('div');
    orderItemContainer.className = 'order-item';
    if(type == 'item'){
        orderItemContainer.innerHTML =
        `
            <div class="order-image">
                <img src="styles/images/${name}.jpg" alt="">
            </div>
            <div class="order-description">
                <div class="normal-text">${name}</div>
                <div class="normal-text"><span>${quantity}</span> шт.</div>
                <div class="normal-text"><span id="order-price">${price.toFixed(2)}</span> руб.</div>
            </div>
        `
    }
    else if(type == 'kilograms'){
        orderItemContainer.innerHTML =
        `
            <div class="order-image">
                <img src="styles/images/${name}.jpg" alt="">
            </div>
            <div class="order-description">
                <div class="normal-text">${name}</div>
                <div class="normal-text"><span>${quantity}</span> кг.</div>
                <div class="normal-text"><span id="order-price">${price.toFixed(2)}</span> руб.</div>
            </div>
        `
    }
    ordersItemListContainer.appendChild(orderItemContainer);
}

fetch('./scripts/orders.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        ordersInfoList.push(element);
    });

    ordersInfoList.forEach(item => {
        let orderInfoItem = document.createElement('div');
        orderInfoItem.className = 'order'
        orderInfoItem.innerHTML =
        `
        <div class="bold big-text">ID <span>${item.id}</span></div>
        <div class="order-info">
            <div class="normal-text">${item.email}</div>
            <div class="normal-text">${item.phone}</div>
        </div>
        <div class="order-info">
            <div class="bold big-text">Список товаров:</div>
            <div id="order-items-list-${item.id}" class="order-list">
                
            </div>

            <div class="big-text bold">Сумма заказа: <span id="order-total-${item.id}">0</span> руб.</div>

            <div>
                <div class="order-buttons-container">
                    <button class="normal-main-buttons" id="send-mail-button">Отправить письмо</button>
                    <button class="normal-main-buttons" id="delete-order-button">Удалить</button>
                </div>
                <div class="products-separator"></div>
            </div>
        </div>
        `
        ordersInfoListContainer.appendChild(orderInfoItem);

        ordersItemListContainer = document.getElementById(`order-items-list-${item.id}`);
        item.products.forEach(item => {
            addOrderItem(item.name, item.price, item.type, item.quantity)
        })

        let totalSum = 0;
        let allElements = ordersItemListContainer.getElementsByTagName("*");
        
        for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].id.startsWith('order-price')) {
            totalSum += parseFloat(allElements[i].innerText);
        }
        }
        document.getElementById(`order-total-${item.id}`).innerText = totalSum.toFixed(2);
    });   
});