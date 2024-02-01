var products = {
    "bakery": [],
    "confection": []
}

var basketList = [];

let menuPage = '';

if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsBakery') menuPage = 'bakery';
if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsConfection') menuPage = 'confection';

fetch('./scripts/products.json')
.then(response => response.json())
.then(data => {

    data.forEach(item => {
        if(item.category == 'confection') products['confection'].push(item);
        if(item.category == 'bakery') products['bakery'].push(item);
    });

    function showModalWindow(name, description, price){
        console.log('aboba')
        document.getElementById('product-modal-window').innerHTML =
        `

        `

        document.getElementById('backdrop').style.display = 'block';
        document.getElementById('product-modal-window').style.display = 'flex';
        document.getElementById('close-modal-window').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';

        document.getElementById('close-modal-window').addEventListener('click', function(){
            document.getElementById('backdrop').style.display = 'none';
            document.getElementById('product-modal-window').style.display = 'none';
            document.getElementById('close-modal-window').style.display = 'none';
            document.getElementById('body').style.overflow = 'visible';
        })

        let modalWindow = document.getElementById('product-modal-window');
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let modalWindowWidth = modalWindow.offsetWidth;
        let modalWindowHeight = modalWindow.offsetHeight;
    
        modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
        modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';
        
        document.getElementById('backdrop').style.display = 'none';
        document.getElementById('product-modal-window').style.display = 'none';
        document.getElementById('close-modal-window').style.display = 'none';
        document.getElementById('body').style.overflow = 'visible';

        let modalPrice = document.getElementById('product-price');
        let modalQuantity = document.getElementById('product-quantity')
        let plus = document.getElementById('quantity-plus');
        let minus = document.getElementById('quantity-minus');
        let quantity = Number(modalQuantity.innerText);
    
        plus.addEventListener('click', function(){
            quantity = quantity + 1;
            if (quantity > 20) quantity = 20;
            if (quantity <= 20){
                modalPrice.innerText = (price * quantity).toFixed(2);
            }
            modalQuantity.innerText = quantity;
        });
    
        minus.addEventListener('click', function(){
            quantity = quantity - 1;
            if (quantity < 1) quantity = 1;
            if (quantity >= 1){
                modalPrice.innerText = (price * quantity).toFixed(2);
            }
            modalQuantity.innerText = quantity;
        });

        let basketList = [];

        document.getElementById('add-to-basket').addEventListener('click', function(){
            let basketItem = {};
    
            basketItem.name = document.getElementById('product-name').innerText;
            basketItem.description = document.getElementById('product-description').innerText;
            basketItem.price = document.getElementById('product-price').innerText;
            basketItem.quantity = document.getElementById('product-quantity').innerText;
    
            basketList.push(basketItem);
        });
    }

    function productsMenu(){
        products[menuPage].forEach(item => {
            var productsList = document.getElementById('products-list');
            
            let productsItem = document.createElement('div');
            productsItem.className = 'products-item';
            productsList.appendChild(productsItem);

            productsItem.innerHTML =
            `
                <div class="products-item-image">
                    <img src="styles/images/${item.name}.jpg">
                </div>
                <div class="big-text bold products-item-name">${item.name}</div>
                <div class="products-item-options">
                    <div class="big-text">${item.price} руб</div>
                    <button id="show-modal-window" class="modal-main-buttons small-text bold">В корзину</button>
                </div>
                <div class="products-separator"></div>
            `

            document.getElementById('show-modal-window').addEventListener('click', function(){
                showModalWindow(item.name, item.description, item.price);
            })
        })
    }

    productsMenu();
});