// ВЫБРАННАЯ КАТЕГОРИЯ
let menuPage = '';

if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsBakery') menuPage = 'bakery';
if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsConfection') menuPage = 'confection';

// ОПРЕДЕЛЕНИЕ МАССИВОВ
let previews = {
    'bakery': [],
    'confection': []
}

let quantity;

let modalNameItem = document.getElementById('modal-name-item');
let modalDescriptionItem = document.getElementById('modal-description-item');
let modalImageItem = document.getElementById('modal-image-item');
let modalPriceItem = document.getElementById('modal-price-item');
let modalQuantityItem = document.getElementById('product-quantity-item');

let modalNameKg = document.getElementById('modal-name-kg');
let modalDescriptionKg = document.getElementById('modal-description-kg');
let modalImageKg = document.getElementById('modal-image-kg');
let modalPriceKg_1 = document.getElementById('modal-price-kg-1');
let modalWeightKg_1 = document.getElementById('modal-weight-kg-1');
let modalPriceKg_2 = document.getElementById('modal-price-kg-2');
let modalWeightKg_2 = document.getElementById('modal-weight-kg-2');

function closeProductModalWindow(type){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById(`products-modal-window-${type}`).style.display = 'none';
    document.getElementById(`close-modal-window-${type}`).style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
}
    

function openProductModalWindowKg(name){
    let modalWindow = document.getElementById('modal-window-item');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('products-modal-window-kg').style.display = 'flex';
    document.getElementById('close-modal-window-kg').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden';

    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';

    previews[menuPage].forEach(item => {
        if(item.name == name){
            modalNameKg.innerText = item.name;
            modalDescriptionKg.innerText = item.description;
            modalImageKg.src = `styles/images/${item.name}.jpg`;
            modalPriceKg_1.innerText = item.price_1;
            modalPriceKg_2.innerText = item.price_2;
            modalWeightKg_1.innerText = item.weight_1;
            modalWeightKg_2.innerText = item.weight_2;
        }
    });

    document.getElementById('close-modal-window-kg').addEventListener('click', function(){
        closeProductModalWindow('kg')
    })
}

function openProductModalWindowItem(name){
    quantity = 1;

    let modalWindow = document.getElementById('modal-window-item');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;

    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('products-modal-window-item').style.display = 'flex';
    document.getElementById('close-modal-window-item').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden';

    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';

    let price;

    previews[menuPage].forEach(item => {
        if(item.name == name){
            modalNameItem.innerText = item.name;
            modalDescriptionItem.innerText = item.description;
            modalImageItem.src = `styles/images/${item.name}.jpg`;
            modalPriceItem.innerText = item.price;
            price = item.price;
        }
    });

    // КНОПКИ КОЛИЧЕСТВА
    modalQuantityItem.innerText = quantity;

    let plusButton = document.getElementById('quantity-plus-item');
    plusButton.replaceWith(plusButton.cloneNode(true));
    plusButton = document.getElementById('quantity-plus-item');

    let minusButton = document.getElementById('quantity-minus-item');
    minusButton.replaceWith(minusButton.cloneNode(true));
    minusButton = document.getElementById('quantity-minus-item');

    plusButton.addEventListener('click', function(){
        quantity += 1;
        if(quantity > 20) quantity = 20;
        else if(quantity < 1) quantity = 1;
        else{
            modalPrice.innerText = (price * quantity).toFixed(2);
        }
        modalQuantityItem.innerText = quantity;
    })    

    minusButton.addEventListener('click', function(){
        quantity -= 1;
        if(quantity > 20) quantity = 20;
        else if(quantity < 1) quantity = 1;
        else{
            modalPrice.innerText = (price * quantity).toFixed(2);
        }
        modalQuantityItem.innerText = quantity;
    })

    document.getElementById('close-modal-window-item').addEventListener('click', function(){
        closeProductModalWindow('item');
    })
}

// ДОБАВИТЬ ЭЛЕМЕНТ
function addItem(name, price, type){
    let productType;
    if(type == 'item'){
        productType = 'Item'
    }
    else if(type == 'kilograms'){
        productType = 'Kg'
    }
    let productsList = document.getElementById('products-list');
    let productsItem = document.createElement('div');

    productsItem.className = 'products-item';
    productsList.appendChild(productsItem);

    productsItem.innerHTML = 
    `
    <div onclick="openProductModalWindow${productType}('${name}')" class="products-item-image">
        <img src="styles/images/${name}.jpg" alt="${name}">
    </div>
    <div class="big-text mobile-normal-text bold products-item-name">${name}</div>
        <div class="products-item-options">
            <div class="big-text mobile-normal-text bold"><span>${price.toFixed(2)}</span> руб.</div>
            <button class="normal-main-buttons" onclick="openProductModalWindow${productType}('${name}')">В корзину</button>
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
    
    // KG
    let addToBasketButtonKg = document.getElementById('add-to-basket-kg');
    addToBasketButtonKg.replaceWith(addToBasketButtonKg.cloneNode(true));
    addToBasketButtonKg = document.getElementById('add-to-basket-kg');

    addToBasketButtonKg.addEventListener('click', function(){
        let basketItem = {};
                    
        previews[menuPage].forEach(item => {
            if(item.name == modalNameItem.innerText){
                basketItem.name = item.name;
                basketItem.description = item.description;
                basketItem.price = item.price; //тут поменять
                basketItem.quantity = quantity; // тут поменять
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
            existingItem.price = price;
            existingItem.quantity = quantity;
        }
        else {
            // Если элемента еще нет, добавляем его в массив
            basketList.push(basketItem);
        }
        localStorage.setItem('basketListData', JSON.stringify(basketList));

        closeProductModalWindow('kg');
    });
    
    // СОБЫТИЕ НАЖАТИЯ ITEM
    let addToBasketButtonItem = document.getElementById('add-to-basket-item');
    addToBasketButtonItem.replaceWith(addToBasketButtonItem.cloneNode(true));
    addToBasketButtonItem = document.getElementById('add-to-basket-item');

    addToBasketButtonItem.addEventListener('click', function(){
        console.log('нажал кнопку')
        let basketItem = {};
                    
        previews[menuPage].forEach(item => {
            if(item.name == modalNameItem.innerText){
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
            console.log('уже есть в корзине')
            // Если элемент уже существует, увеличиваем его количество
            if ((existingItem.quantity + basketItem.quantity) > 20){
                console.log('сумма больше 20')
                existingItem.quantity = 20;
            }
            else{
                console.log('сумма меньше 20')
                existingItem.quantity += basketItem.quantity;
            }
        }
        else {
            // Если элемента еще нет, добавляем его в массив
            basketList.push(basketItem);
        }
        console.log(basketList);
        localStorage.setItem('basketListData', JSON.stringify(basketList));

        closeProductModalWindow('item');
    });
    
    previews[menuPage].forEach(element => {
        if (element.type == 'item'){
            addItem(element.name, element.price, element.type);
        }
        else if(element.type == 'kilograms'){
            addItem(element.name, element.price_1, element.type);
        }
    });
});

