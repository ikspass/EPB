// ВЫБРАННАЯ КАТЕГОРИЯ
// ПЕРЕМЕННЫЕ PRICE И QUANTITY СКОРЕЕ ВСЕГО ТЕБЕ НЕ ПОНАДОБЯТСЯ, КАК И ВНОПКИ КОЛИЧЕСТВА
let menuPage = '';

if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsBakery') menuPage = 'bakery';
if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsConfection') menuPage = 'confection';

// ОПРЕДЕЛЕНИЕ МАССИВОВ
let previews = {
    'bakery': [],
    'confection': []
}

let quantity;

let modalName = document.getElementById('modal-name');
let modalDescription = document.getElementById('modal-description');
let modalImage = document.getElementById('modal-image');

let modalWindowOptions = document.getElementById('product-modal-window-options');

// ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО ТОВАРА
function closeProductModalWindow(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById(`products-modal-window`).style.display = 'none';
    document.getElementById(`close-modal-window`).style.display = 'none';
    document.getElementById(`mobile-close-modal-window`).style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
}

// ОТКРЫТЬ МОДАЛЬНОЕ ОКНО ТОВАРА
function openProductModalWindow(name, type){
    let modalWindow = document.getElementById('modal-window');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let modalWindowWidth = modalWindow.offsetWidth;
    let modalWindowHeight = modalWindow.offsetHeight;

    modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
    modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';

    console.log(modalName)
    modalName.innerText = name;
    modalImage.src = `styles/images/${name}.jpg`;

    if (type == 'item'){
        document.getElementById('quantity-tools').style.display = 'flex';

        modalWindowOptions.innerHTML = 
        `
        <div class="product-modal-window-total big-text bold">
            <div>Сумма:</div>
            <div class="modal-price-container">
                <div><span id="modal-price-item"></span> руб.</div>
            </div>
        </div>
        `
        let modalPriceItem = document.getElementById('modal-price-item');
        let modalQuantityItem = document.getElementById('product-quantity-item');

        quantity = 1;
    
        if (window.matchMedia("(max-width: 694px)").matches){
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('products-modal-window').style.display = 'flex';
            document.getElementById('mobile-close-modal-window').style.display = 'block';
            document.getElementById('body').style.overflow = 'hidden';
        }
        else{
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('products-modal-window').style.display = 'flex';
            document.getElementById('close-modal-window').style.display = 'block';
            document.getElementById('body').style.overflow = 'hidden';
        }
    
        let price;
    
        previews[menuPage].forEach(item => {
            if(item.name == name){
                modalDescription.innerText = item.description;
                modalPriceItem.innerText = item.price.toFixed(2);
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
        // КНОПКА ПЛЮС
        plusButton.addEventListener('click', function(){
            quantity += 1;
            if(quantity > 20) quantity = 20;
            else if(quantity < 1) quantity = 1;
            else{
                modalPriceItem.innerText = (price * quantity).toFixed(2);
            }
            modalQuantityItem.innerText = quantity;
        })    
        // КНОПКА МИНУС
        minusButton.addEventListener('click', function(){
            quantity -= 1;
            if(quantity > 20) quantity = 20;
            else if(quantity < 1) quantity = 1;
            else{
                modalPriceItem.innerText = (price * quantity).toFixed(2);
            }
            modalQuantityItem.innerText = quantity;
        })
        
        // КНОПКИ ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
        document.getElementById('close-modal-window').addEventListener('click', function(){
            closeProductModalWindow();
        })
        document.getElementById('backdrop').addEventListener('click', function(){
            closeProductModalWindow();
        })
        document.getElementById('mobile-close-modal-window').addEventListener('click', function(){
            closeProductModalWindow()
        })
        document.getElementById('add-to-basket').addEventListener('click', function(){
            let basketItem = {};
                    
        previews[menuPage].forEach(item => {
            if(item.name == modalName.innerText){
                basketItem.name = item.name;
                basketItem.description = item.description;
                basketItem.price = item.price;
                basketItem.quantity = quantity;
                basketItem.type = 'item';
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

        document.getElementById('quantity-tools').style.display = 'none';

            modalWindowOptions.innerHTML = 
            `
            <div class="product-modal-window-total big-text bold">
                <div>Товар добавлен в корзину</div>
            </div>
            `
        })
    }
    else if (type == 'kilograms'){
        document.getElementById('quantity-tools').style.display = 'none';

        modalWindowOptions.innerHTML = 
        `
        <div class="modal-radio">
            <div class="modal-form-radio">
                <input type="radio" id="modal-weight-radio-1" name="radio" checked>
                <div class="radio-container">
                    <div class="big-text product-modal-window-total">
                        <label class="modal-radio " for="modal-weight-radio-1">Вес: <span id="modal-weight-kg-1"></span> кг.</label>
                        <div><span id="modal-price-kg-1">0</span> руб.</div>
                    </div>
                    <div class="grey normal-text price-kg">Цена за килограмм изделия - <span id="modal-price-for-kg-1">0</span> руб</div>
                </div>
            </div>
            <div class="modal-form-radio">
                <input type="radio" id="modal-weight-radio-2" name="radio">
                <div>
                    <div class="big-text product-modal-window-total">
                        <label class="modal-radio " for="modal-weight-radio-2">Вес: <span id="modal-weight-kg-2"></span> кг.</label>
                        <div class="modal-price"><span id="modal-price-kg-2">0</span> руб.</div>
                    </div>
                    <div class="grey normal-text price-kg">Цена за килограмм изделия - <span id="modal-price-for-kg-2">0</span> руб</div>
                </div>
            </div>
        </div>
        `
        
        let modalPriceKg_1 = document.getElementById('modal-price-kg-1');
        let modalWeightKg_1 = document.getElementById('modal-weight-kg-1');
        let modalPriceKg_2 = document.getElementById('modal-price-kg-2');
        let modalWeightKg_2 = document.getElementById('modal-weight-kg-2');
        let modalPriceForKg_1 = document.getElementById('modal-price-for-kg-1');
        let modalPriceForKg_2 = document.getElementById('modal-price-for-kg-2');

        let modalWindow = document.getElementById('modal-window');
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let modalWindowWidth = modalWindow.offsetWidth;
        let modalWindowHeight = modalWindow.offsetHeight;
    
        if (window.matchMedia("(max-width: 694px)").matches){
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('products-modal-window').style.display = 'flex';
            document.getElementById('mobile-close-modal-window').style.display = 'block';
            document.getElementById('body').style.overflow = 'hidden';
        }
        else{
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('products-modal-window').style.display = 'flex';
            document.getElementById('close-modal-window').style.display = 'block';
            document.getElementById('body').style.overflow = 'hidden';
        }
    
        modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
        modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';
    
        previews[menuPage].forEach(item => {
            if(item.name == name){
                modalDescription.innerText = item.description;
                modalPriceKg_1.innerText = item.price_1.toFixed(2);
                modalPriceKg_2.innerText = item.price_2.toFixed(2);
                modalWeightKg_1.innerText = item.weight_1;
                modalWeightKg_2.innerText = item.weight_2;
                modalPriceForKg_1.innerText = (item.price_1 / item.weight_1).toFixed(2);
                modalPriceForKg_2.innerText = (item.price_2 / item.weight_2).toFixed(2);
            }
        });

        // КНОПКИ ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
        document.getElementById('close-modal-window').addEventListener('click', function(){
            closeProductModalWindow();
        })
        document.getElementById('backdrop').addEventListener('click', function(){
            closeProductModalWindow();
        })
        document.getElementById('mobile-close-modal-window').addEventListener('click', function(){
            closeProductModalWindow()
        })
        document.getElementById('add-to-basket').addEventListener('click', function(){

                    let basketItem = {};
        let weight;
        let price;

        let selectedRadioElement = document.querySelector('input[name="radio"]:checked');
        console.log(selectedRadioElement)
        let selectedRadio = selectedRadioElement ? selectedRadioElement.id : null;
        console.log(selectedRadio)
   
        if (selectedRadio == 'modal-weight-radio-1'){
            weight = 'weight_1';
            price = 'price_1';
        }
        else if (selectedRadio == 'modal-weight-radio-2'){
            weight = 'weight_2';
            price = 'price_2';
        }

        previews[menuPage].forEach(item => {
            if(item.name == name){
                basketItem.name = item.name;
                basketItem.description = item.description;
                basketItem.price = item[price]; 
                basketItem.quantity = item[weight];
                basketItem.type = 'kilograms';
            }
        })
        console.log(basketItem);

    
        //JSON ЧАСТЬ
        if (!localStorage.getItem('basketListData')) {
            let basketListData = [];
            localStorage.setItem('basketListData', JSON.stringify(basketListData));
        }
        let basketList = JSON.parse(localStorage.getItem('basketListData'));

        let existingItem = basketList.find(element => element.name == basketItem.name);

        if (existingItem) {
            previews[menuPage].forEach(item => {
                if(item.name == name){
                    existingItem.price = item[price]; 
                    existingItem.quantity = item[weight]; 
                }
            })

        }
        else {
            // Если элемента еще нет, добавляем его в массив
            basketList.push(basketItem);
        }
        localStorage.setItem('basketListData', JSON.stringify(basketList));

        document.getElementById('quantity-tools').style.display = 'none';

        modalWindowOptions.innerHTML = 
        `
        <div class="product-modal-window-total big-text bold">
            <div>Товар добавлен в корзину</div>
        </div>
        `
        })
    }
}

// ДОБАВИТЬ ЭЛЕМЕНТ НА СТРАНИЦУ
function addItem(name, price, type){
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
    <div onclick="openProductModalWindow('${name}','${type}')" class="products-item-image">
        <img src="styles/images/${name}.jpg" alt="${name}">
    </div>
    <div class="big-text mobile-normal-text bold products-item-name">${name}</div>
        <div class="products-item-options">
            <div class="big-text mobile-normal-text bold"><span>${price.toFixed(2)}</span> руб.</div>
            <button class="normal-main-buttons desktop-tablet" onclick="openProductModalWindow('${name}','${type}')">В корзину</button>
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
    
    previews[menuPage].forEach(element => {
        if (element.type == 'item'){
            addItem(element.name, element.price, element.type);
        }
        else if(element.type == 'kilograms'){
            addItem(element.name, element.price_1, element.type);
        }
    });
});