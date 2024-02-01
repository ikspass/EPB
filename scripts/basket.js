let basket = document.getElementById('basket-list');

let retrievedData = localStorage.getItem('basketList');
let basketList = JSON.parse(retrievedData);

console.log(basketList);

if (basketList.length != 0){
    basketList.forEach(item => {
        basket.innerHTML =
        `
            <div class="basket-item">
                <div class="basket-item-image">
                    <img src="styles/images/${item.name}.jpg" alt="${item.name}">
                </div>
                <div class="basket-item-info">
                    <div class="basket-item-description">
                        <div class="basket-item-text">
                            <div class="basket-title-row">
                                <div class="big-text bold">${item.name}</div>
                                <div class="big-text bold">${(item.price * item.quantity).toFixed(2)} руб</div>
                            </div>
                            <div class="desktop product-description big-text grey">${item.description}</div>
                        </div>
                    </div>
                    <div class="basket-item-options">
                        <div class="quantity">
                            <div class="quantity-tool" id="quantity-minus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                    <path d="M0 2.00002C0 1.41091 0.477563 0.93335 1.06667 0.93335H14.9333C15.5224 0.93335 16 1.41091 16 2.00002C16 2.58912 15.5224 3.06668 14.9333 3.06668H1.06667C0.477563 3.06668 0 2.58912 0 2.00002Z" fill="#323232"/>
                                </svg>
                            </div>
                            <div class="big-text quantity-info" id="quantity-info">
                                <div>${item.quantity}</div>
                            </div>
                            <div class="quantity-tool" id="quantity-plus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477563 8.5891 0 8 0C7.4109 0 6.93333 0.477563 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z" fill="#323232"/>
                                </svg>
                            </div>
                        </div>
                        <button class="modal-main-buttons big-text bold">Удалить</button>
                    </div>                    
                </div>
            </div>
        `
    });
}


let plus = document.getElementById('quantity-plus');
let minus = document.getElementById('quantity-minus');
let quantity = Number(document.getElementById('quantity-info').innerText);

plus.addEventListener('click', function(){
    quantity = quantity + 1;
    if(quantity > 20) quantity = 20;
    if(quantity <= 20){
        document.getElementById('modal-price').innerText = (price * quantity).toFixed(2);
    }
    document.getElementById('quantity-info').innerText = quantity;
})

minus.addEventListener('click', function(){
    quantity = quantity - 1;
    if (quantity < 1) quantity = 1;
    if(quantity >= 1){
        document.getElementById('modal-price').innerText = (price * quantity).toFixed(2);
    }
    document.getElementById('quantity-info').innerText = quantity;
})

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
});