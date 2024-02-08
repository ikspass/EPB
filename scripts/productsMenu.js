// ВЫБРАННАЯ КАТЕГОРИЯ
let menuPage = '';

if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsBakery') menuPage = 'bakery';
if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsConfection') menuPage = 'confection';

// ОПРЕДЕЛЕНИЕ МАССИВОВ
let previews = {
    'bakery': [],
    'confection': []
}

localStorage.clear();

let modalName = document.getElementById('modal-name');
let modalDescription = document.getElementById('modal-description');
let modalImage = document.getElementById('modal-image');
let modalPrice = document.getElementById('modal-price');
let modalQuantity = document.getElementById('product-quantity');

let quantity = 1;

function closeProductModalWindow(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('products-modal-window').style.display = 'none';
    document.getElementById('close-modal-window').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
}

function openProductModalWindow(name){
    let modalWindow = document.getElementById('modal-window');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('products-modal-window').style.display = 'flex';
    document.getElementById('close-modal-window').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden';

    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';

    let price;

    previews[menuPage].forEach(item => {
        if(item.name == name){
            modalName.innerText = item.name;
            modalDescription.innerText = item.description;
            modalImage.src = `styles/images/${item.name}.jpg`;
            modalPrice.innerText = item.price;
            price = item.price;
        }
    });

    // КНОПКИ КОЛИЧЕСТВА
    let plusButton = document.getElementById('quantity-plus');
    let minusButton = document.getElementById('quantity-minus');

    modalQuantity.innerText = quantity;

    plusButton.addEventListener('click', function(){
        quantity += 1;
        if(quantity > 20) quantity = 20;
        else if(quantity < 1) quantity = 1;
        else{
            modalPrice.innerText = (price * quantity).toFixed(2);
        }
        modalQuantity.innerText = quantity;
    })    

    minusButton.addEventListener('click', function(){
        quantity -= 1;
        if(quantity > 20) quantity = 20;
        else if(quantity < 1) quantity = 1;
        else{
            modalPrice.innerText = (price * quantity).toFixed(2);
        }
        modalQuantity.innerText = quantity;
    })
}

// ДОБАВИТЬ ЭЛЕМЕНТ
function addItem(name, price){
    let productsList = document.getElementById('products-list');
    let productsItem = document.createElement('div');

    productsItem.className = 'products-item';
    productsList.appendChild(productsItem);

    productsItem.innerHTML = 
    `
    <div class="products-item-image">
        <img src="styles/images/${name}.jpg" alt="${name}">
    </div>
    <div class="big-text mobile-normal-text bold products-item-name">${name}</div>
        <div class="products-item-options">
            <div class="big-text mobile-normal-text bold"><span>${price}</span> руб.</div>
            <button class="normal-main-buttons" onclick="openProductModalWindow('${name}')">В корзину</button>
        </div>
    <div class="products-separator"></div>
    `
}

// JSON
fetch('./scripts/products.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        if(element.category == 'confection'){
            previews['confection'].push(element);
        }
        if(element.category == 'bakery'){
            previews['bakery'].push(element);
        }
    });
    
    // ДОБАВИТЬ В КОРЗИНУ
    
    // СОБЫТИЕ НАЖАТИЯ
    let addToBasketButton = document.getElementById('add-to-basket');
    addToBasketButton.replaceWith(addToBasketButton.cloneNode(true));
    addToBasketButton = document.getElementById('add-to-basket');

    addToBasketButton.addEventListener('click', function(){
        console.log('нажал кнопку')
        let basketItem = {};
                    
        previews[menuPage].forEach(item => {
            if(item.name == modalName.innerText){
                basketItem.name = item.name;
                basketItem.description = item.description;
                basketItem.price = item.price;
                basketItem.quantity = quantity;
            }
        })
    
        //JSON ЧАСТЬ
        if (!localStorage.getItem('basketListData')) {
            let basketListData = [];
            localStorage.setItem('basketListData', JSON.stringify(basketListData));
        }
    
        let basketList = JSON.parse(localStorage.getItem('basketListData'));
    
        let existingItem = basketList.find(element => element.name == basketItem.name);

        if (existingItem) {
            // Если элемент уже существует, увеличиваем его количество
            if ((existingItem.quantity + basketItem.quantity) > 20){
                existingItem.quantity = 20;
            }
            else{
                existingItem.quantity = existingItem.quantity + basketItem.quantity;
            }
        }
        else {
            // Если элемента еще нет, добавляем его в массив
            basketList.push(basketItem);
        }

        localStorage.setItem('basketListData', JSON.stringify(basketList));

        closeProductModalWindow();
    });
    
    previews[menuPage].forEach(element => {
        addItem(element.name, element.price);
    });
});

