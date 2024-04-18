if (!localStorage.getItem('basketListData')) {
    let basketListData = [];
    localStorage.setItem('basketListData', JSON.stringify(basketListData));
}

let basketList = JSON.parse(localStorage.getItem('basketListData'));

// ОБЩАЯ СУММА КОРЗИНЫ
function countTotalSum(){
    let totalSum = 0;
    let allElements = document.getElementsByTagName("*");
    
    for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].id.startsWith('product-price-')) {
        totalSum += parseFloat(allElements[i].innerText);
    }
    }
    document.getElementById('total-price').innerText = totalSum.toFixed(2)
}
// ОТОЮРАЖЕНИЕ ЭЛЕМЕНТА КОРЗИНЫ
function addBasketItem(name, price, description, quantity, type){
    let basketListContainer = document.getElementById('basket-list');

    let basketItemContainer = document.createElement('div');
    basketItemContainer.className = 'basket-item';
    basketListContainer.appendChild(basketItemContainer);

    if(type == 'item'){
        basketItemContainer.innerHTML = 
    `
    <div class="basket-item-image">
        <img src="styles/images/${name}.jpg" alt="${name}">
    </div>
    <div class="basket-item-info">
        <div class="basket-item-description">
            <div class="basket-item-text">
                <div class="basket-title-row big-text bold">
                    <div class="big-text bold">${name}</div>
                    <div><span id="product-price-${name}">${(price * quantity).toFixed(2)}</span> руб.</div>
                </div>
                <div class="desktop product-description big-text grey">${description}</div>
            </div>
        </div>
        <div class="basket-item-options">
            <div class="quantity">
            <div class="quantity-tool" onclick="minusProducts('${name}', '${price}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M0 2.00002C0 1.41091 0.477563 0.93335 1.06667 0.93335H14.9333C15.5224 0.93335 16 1.41091 16 2.00002C16 2.58912 15.5224 3.06668 14.9333 3.06668H1.06667C0.477563 3.06668 0 2.58912 0 2.00002Z" fill="#323232"/>
                    </svg>
                </div>
                <div class="big-text quantity-info" id="product-quantity-${name}">
                    <div>${quantity}</div>
                </div>
            <div class="quantity-tool" onclick="plusProducts('${name}', '${price}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477563 8.5891 0 8 0C7.4109 0 6.93333 0.477563 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z" fill="#323232"/>
                    </svg>
                </div>
        </div>
            <button class="modal-main-buttons big-text bold" onclick="deleteBasketItem('${name}')">Удалить</button>
        </div>                    
    </div>
    `
    }
    else if(type == 'kilograms'){
        basketItemContainer.innerHTML =
        `
        <div class="basket-item-image">
            <img src="styles/images/${name}.jpg" alt="${name}">
        </div>
        <div class="basket-item-info">
            <div class="basket-item-description">
                <div class="basket-item-text">
                    <div class="basket-title-row big-text bold">
                        <div class="big-text bold">${name}</div>
                        <div><span id="product-price-${name}">${price}</span> руб.</div>
                    </div>
                    <div class="desktop product-description big-text grey">${description}</div>
                </div>
            </div>
            <div class="basket-item-options">
                <div class="quantity">
                    <div class="big-text"><span>${quantity}</span> г.</div>
                </div>
                <button class="modal-main-buttons big-text bold" onclick="deleteBasketItem('${name}')">Удалить</button>
            </div>                    
        </div>
        `
    }
}

// КНОПКИ КОЛИЧЕСТВА
// КНОПКА ПЛЮС
function plusProducts(name, price){
    let existingItem = basketList.find(element => element.name == name);

    let quantity = existingItem.quantity;

    quantity += 1;
    if(quantity > 20) {
        quantity = 20;
    }
    else if(quantity < 1){
        quantity = 1;
    }
    else{
        document.getElementById(`product-price-${name}`).innerText = (price * quantity).toFixed(2);
    }

    document.getElementById(`product-quantity-${name}`).innerText = quantity;

    if(existingItem){
        existingItem.quantity = quantity;
    }

    countTotalSum();
    localStorage.setItem('basketListData', JSON.stringify(basketList));
}
// КНОПКА МИНУС
function minusProducts(name, price){
    let existingItem = basketList.find(element => element.name == name);

    let quantity = existingItem.quantity;

    quantity -= 1;
    if(quantity > 20) {
        quantity = 20;
    }
    else if(quantity < 1){
        quantity = 1;
    }
    else{
        document.getElementById(`product-price-${name}`).innerText = (price * quantity).toFixed(2);
    }

    document.getElementById(`product-quantity-${name}`).innerText = quantity;

    if(existingItem){
        existingItem.quantity = quantity;
    }

    countTotalSum();
    localStorage.setItem('basketListData', JSON.stringify(basketList));
}
// УДАЛИТЬ ТОВАР ИЗ КОРЗИНЫ
function deleteBasketItem(name){
    basketList = basketList.filter(item => item.name !== name);
    localStorage.setItem('basketListData', JSON.stringify(basketList));

    resetItems();
    countTotalSum();
}
// ОТОБРАЖЕНИЕ ВСЕХ ЭЛЕМЕНТОВ КОРЗИНЫ
function resetItems(){
    document.getElementById('basket-list').innerHTML = ``;

    if(basketList.length > 0){
        basketList.forEach(element => {
            addBasketItem(element.name, element.price, element.description, element.quantity, element.type);
        })

        document.getElementById('checkout-button').style.visibility = 'visible';
        document.getElementById('empty').style.visibility = 'hidden';
        document.getElementById('empty').style.position = 'absolute';
        countTotalSum();
    }
    else{
        document.getElementById('checkout-button').style.visibility = 'hidden';
        document.getElementById('empty').style.visibility = 'visible';
        document.getElementById('empty').style.position = 'static';
    }
}
function closeModalWindow(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('checkout-modal-window').style.display = 'none';
    document.getElementById('close-modal-window').style.display = 'none';
    document.getElementById(`mobile-close-modal-window`).style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';

    document.getElementById('phone-number').value = '+375';
    document.getElementById('email').value = '';
}
// ОТОБРАЖЕНИЕ ОКНА С ВВОДОМ ПОЧТЫ И НОМЕРА ТЕЛЕФОНА
function checkout(){
    let modalWindow = document.getElementById('modal-window-container');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;
    // РАСПОЛОЖЕНИЕ В ЦЕНТРЕ
    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';
    // ОТОБРАЖЕНИЕ МОДАЛЬНОГО ОКНА
    if (window.matchMedia("(max-width: 694px)").matches){
        document.getElementById(`mobile-close-modal-window`).style.display = 'block';
    }
    else{
        document.getElementById('close-modal-window').style.display = 'flex';
    }
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('checkout-modal-window').style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';

    // ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО ПО КНОПКЕ
    document.getElementById('close-modal-window').addEventListener('click', function(){
        closeModalWindow();
    });
    document.getElementById('mobile-close-modal-window').addEventListener('click', function(){
        closeModalWindow();
    });
}

// ЗАКРЫТЬ ОКНО С ПОЧТОИ И НОМЕРОМ ТЕЛЕФОНА ПОСЛЕ НАЖАТИЯ НА КНОПКУ ПОДТВЕРДИТЬ
function acceptCheckout(){
        document.getElementById('backdrop').style.display = 'none';
        document.getElementById('checkout-modal-window').style.display = 'none';
        document.getElementById('close-modal-window').style.display = 'none';
        document.getElementById('body').style.overflow = 'visible';
        
        countTotalSum();        
        resetItems();
}

resetItems();