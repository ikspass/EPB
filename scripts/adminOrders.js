let orders = document.getElementById('orders');

let order = document.createElement('div');
order.className = 'order';

orders.appendChild(order);

order.innerHTML =
`
    <div class="order-info">
        <div class="bold big-text">ID 12736</div>
            <div class="normal-text">polinaruchkova@gmail.com</div>
            <div class="normal-text">+375256085506</div>
        </div>

        <div class="order-info">
            <div class="bold big-text">Список товаров:</div>
            <div id="order-list" class="order-list">
                
            </div>
            <div>
                <button class="normal-main-buttons">Отправить письмо</button>
                <div class="products-separator"></div>
            </div>
        </div>
`;

let orderList = document.getElementById('order-list');

let orderItem = document.createElement('div');
orderItem.className = 'order-item';

orderItem.innerHTML = 
`
    <div class="order-image">
        <img src="styles/images/${name}.jpg" alt="">
    </div>
    <div class="order-description">
        <div class="normal-text">${name}</div>
        <div class="normal-text">${quantity} шт.</div>
    </div>
`;