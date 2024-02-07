let basket = document.getElementById('basket-list');

let basketItem = document.createElement('div');
basketItem.className = 'basket-item';
basket.appendChild(basketItem);

if (!localStorage.getItem('basketListData')) {
    // Если нет, создаем новый массив
    let basketListData = [];
    // Сохраняем массив в LocalStorage
    localStorage.setItem('basketListData', JSON.stringify(basketListData));
}

let basketList = JSON.parse(localStorage.getItem('basketListData'));

console.log(basketList);

function totalSum(){
    let total = 0;
    let allElements = document.getElementsByTagName("*");
    
    for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].id.startsWith('product-price-')) {
        total += parseFloat(allElements[i].innerText);
    }
    }
    document.getElementById('total-price').innerText = total.toFixed(2)
}

function plus(name, price){
    let quantity = document.getElementById(`quantity-${name}`).innerText;
    quantity = +quantity + 1;
    if(quantity > 20) quantity = 20;
    else {
        document.getElementById(`product-price-${name}`).innerText = (price * (+quantity)).toFixed(2);
    }
    document.getElementById(`quantity-${name}`).innerText = quantity;

    totalSum();
}

function minus(name, price){
    let quantity = document.getElementById(`quantity-${name}`).innerText;
    quantity = +quantity - 1;

    if (quantity < 1) quantity = 1;
    else {
        document.getElementById(`product-price-${name}`).innerText = (price * (+quantity)).toFixed(2);
    }
    document.getElementById(`quantity-${name}`).innerText = quantity;

    totalSum();
}



function resetItems(){
    basket.innerHTML = ``;

    basketList.forEach(item => {
        let basketItem = document.createElement('div');
        basketItem.className = 'basket-item';
        basket.appendChild(basketItem);
        basketItem.innerHTML =
        `
            <div class="basket-item-image">
                <img src="styles/images/${item.name}.jpg" alt="${item.name}">
            </div>
            <div class="basket-item-info">
                <div class="basket-item-description">
                    <div class="basket-item-text">
                        <div class="basket-title-row big-text bold">
                            <div class="big-text bold">${item.name}</div>
                            <div><span id="product-price-${item.name}">${(item.price * item.quantity).toFixed(2)}</span> руб.</div>
                        </div>
                        <div class="desktop product-description big-text grey">${item.description}</div>
                    </div>
                </div>
                <div class="basket-item-options">
                    <div class="quantity">

                        <div class="quantity-tool" onclick="minus('${item.name}', '${item.price}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M0 2.00002C0 1.41091 0.477563 0.93335 1.06667 0.93335H14.9333C15.5224 0.93335 16 1.41091 16 2.00002C16 2.58912 15.5224 3.06668 14.9333 3.06668H1.06667C0.477563 3.06668 0 2.58912 0 2.00002Z" fill="#323232"/>
                            </svg>
                        </div>
                        <div class="big-text quantity-info" id="quantity-${item.name}">
                            <div>${item.quantity}</div>
                        </div>

                        <div class="quantity-tool" onclick="plus('${item.name}', '${item.price}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477563 8.5891 0 8 0C7.4109 0 6.93333 0.477563 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z" fill="#323232"/>
                            </svg>
                        </div>

                    </div>
                    <button class="modal-main-buttons big-text bold" onclick="deleteItem('${item.name}')">Удалить</button>
                </div>                    
            </div>
        `
    });
}

// УДАЛИТЬ ТОВАР ИЗ КОРЗИНЫ

function deleteItem(name) {
    // Удаляем элемент из массива
    basketList = basketList.filter(item => item.name !== name);

    // Обновляем массив в localStorage
    localStorage.setItem('basketListData', JSON.stringify(basketList));
    resetItems();
    totalSum();
}

if (basketList.length != 0){
    resetItems();
}
else{
    document.getElementById('checkout-button').style.visibility = 'hidden';
}

totalSum();

// ОФОРМИТЬ ЗАКАЗ
document.getElementById('checkout-button').addEventListener('click', function(){
    let modalWindow = document.getElementById('modal-window-container');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;

    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('checkout-modal-window').style.display = 'flex';
    document.getElementById('close-modal-window').style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';

    document.getElementById('close-modal-window').addEventListener('click', function(){
        document.getElementById('backdrop').style.display = 'none';
        document.getElementById('checkout-modal-window').style.display = 'none';
        document.getElementById('close-modal-window').style.display = 'none';
        document.getElementById('body').style.overflow = 'visible';
    });
    
    document.getElementById('aссept-checkout').addEventListener('click', function(){
        let phoneNumber = document.getElementById('phone-number').value;
        let email = document.getElementById('email').value;
        // это нужно будет передать через локал сторадж

        if (!localStorage.getItem('orderData')) {
            // Если нет, создаем новый массив
            let orderData = {};
            // Сохраняем массив в LocalStorage
            localStorage.setItem('orderData', JSON.stringify(orderData));
        }

        // Извлекаем объект из LocalStorage и преобразуем его обратно в объект
        let order = JSON.parse(localStorage.getItem('orderData'));
        order.email = email;
        order.phone = phoneNumber;
        order.list = [];

        basketList.forEach(element => {
            order.list.push(element);
        });

        localStorage.setItem('orderData', JSON.stringify(order));

        document.getElementById('backdrop').style.display = 'none';
        document.getElementById('checkout-modal-window').style.display = 'none';
        document.getElementById('close-modal-window').style.display = 'none';
        document.getElementById('body').style.overflow = 'visible';

        localStorage.removeItem('orderData');


        resetItems();
    });
});