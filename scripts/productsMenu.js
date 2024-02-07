let previews = {
    'bakery': [],
    'confection': []
}

let menuPage = '';

if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsBakery') menuPage = 'bakery';
if(location.href.match(/[^/]+\.html/i)[0].split('.')[0] == 'productsConfection') menuPage = 'confection';


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

    function addItem(name, price){
        // const
        const list = document.getElementById('products-list');
    
        const itemOptions = document.createElement('div');
        itemOptions.className = 'products-item-options';
    
        const itemButton = document.createElement('button');
        itemButton.innerText = 'В корзину'
        itemButton.className = 'normal-main-buttons';
    
        const itemSeparator = document.createElement('div');
        itemSeparator.className = 'products-separator';
    
        //let
        let item = document.createElement('div');
        item.className = 'products-item';

        itemButton.addEventListener('click', function(){
            showModalWindow(name, price);
            document.getElementById('backdrop').style.display = 'block';
            document.getElementById('products-modal-window').style.display = 'flex';
            document.getElementById('close-modal-window').style.display = 'flex';
            document.getElementById('body').style.overflow = 'hidden';
        });

        document.getElementById('close-modal-window').addEventListener('click', function(){
            document.getElementById('backdrop').style.display = 'none';
            document.getElementById('products-modal-window').style.display = 'none';
            document.getElementById('close-modal-window').style.display = 'none';
            document.getElementById('body').style.overflow = 'visible';
        });
        
        let itemImage = document.createElement('div');
        itemImage.className = 'products-item-image';

        let image = document.createElement('img');
        image.src = `styles/images/${name}.jpg`;
            
        let itemName = document.createElement('div');
        itemName.innerText = name
        itemName.className = 'big-text mobile-normal-text bold products-item-name';
            
        let itemPrice = document.createElement('div');
        itemPrice.innerText = price + ' руб.';
        itemPrice.className = 'big-text mobile-normal-text bold';
            
        //appendchild
        itemOptions.appendChild(itemPrice);
        itemOptions.appendChild(itemButton);

        itemImage.appendChild(image);
            
        item.appendChild(itemImage);
        item.appendChild(itemName);
        item.appendChild(itemOptions);
        item.appendChild(itemSeparator);

        list.appendChild(item);
    }
    
    function showElements(){
        previews[menuPage].forEach(item => {
            addItem(item.name, item.price)
        });
    }

    showElements();   

    // MODAL WINDOW
    let modalName = document.getElementById('modal-name');
    let modalDescription = document.getElementById('modal-description');
    let modalImage = document.getElementById('modal-image');
    let modalPrice = document.getElementById('modal-price');
    
    function showModalWindow(name, price){
        previews[menuPage].forEach(item => {
            if(item.name == name){
                modalName.innerText = item.name;
                modalDescription.innerText = item.description;
                modalImage.src = `styles/images/${item.name}.jpg`;
                modalPrice.innerText = item.price
            }
        })

        // QUANTITY
        document.getElementById('product-quantity').innerText = '1';

        let plus = document.getElementById('quantity-plus');
        let minus = document.getElementById('quantity-minus');
        let quantity = Number(document.getElementById('product-quantity').innerText);
        
        plus.addEventListener('click', function(){
            quantity = +quantity + 1;
            if(quantity > 20) quantity = 20;
            if(quantity <= 20){
                document.getElementById('modal-price').innerText = (price * quantity).toFixed(2);
            }
            document.getElementById('product-quantity').innerText = quantity;
        })
    
        minus.addEventListener('click', function(){
            quantity = +quantity - 1;
            if (quantity < 1) quantity = 1;
            if(quantity >= 1){
                document.getElementById('modal-price').innerText = (price * quantity).toFixed(2);
            }
            document.getElementById('product-quantity').innerText = quantity;
        })

        // ДОБАВИТЬ В КОРЗИНУ
        // Проверяем, есть ли уже массив в LocalStorage
        if (!localStorage.getItem('basketListData')) {
            // Если нет, создаем новый массив
            let basketListData = [];
            // Сохраняем массив в LocalStorage
            localStorage.setItem('basketListData', JSON.stringify(basketListData));
        }

        // Извлекаем объект из LocalStorage и преобразуем его обратно в объект
        let basketList = JSON.parse(localStorage.getItem('basketListData'));

        let addToBasketButton = document.getElementById('add-to-basket');

        // Удаляем все предыдущие обработчики событий
        addToBasketButton.replaceWith(addToBasketButton.cloneNode(true));
        addToBasketButton = document.getElementById('add-to-basket');

        // Теперь добавляем новый обработчик событий
        addToBasketButton.addEventListener('click', function(){
            console.log('Создали basketList:');
            console.log(basketList);

            console.log('start')
            let basketItem = {};
            console.log(basketItem)
            
            let basketQuantity = document.getElementById('product-quantity').innerText;
            
            previews[menuPage].forEach(item => {
                if(item.name == modalName.innerText){
                    basketItem.name = item.name;
                    basketItem.description = item.description;
                    basketItem.price = item.price;
                    basketItem.quantity = basketQuantity;
                }
            })

            console.log('Заполнили поля basketItem:');
            console.log(basketItem);

            // Добавляем элемент в объект
            let existingItem = basketList.find(element => element.name == basketItem.name);

            if (existingItem) {
                // Если элемент уже существует, увеличиваем его количество
                existingItem.quantity = Number(existingItem.quantity) + Number(basketItem.quantity);
            } else {
                // Если элемента еще нет, добавляем его в массив
                basketList.push(basketItem);
            }

            // Сохраняем обновленный объект обратно в LocalStorage
            localStorage.setItem('basketListData', JSON.stringify(basketList));

            console.log('Пуш basketItem в basketList:');
            console.log(basketList)

            // ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
            let modalWindow = document.getElementById('modal-window');
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;
            let modalWindowWidth = modalWindow.offsetWidth;
            let modalWindowHeight = modalWindow.offsetHeight;
        
            modalWindow.style.top = (screenHeight / 2 - modalWindowHeight / 2) + 'px';
            modalWindow.style.left = (screenWidth / 2 - modalWindowWidth / 2) + 'px';
            
            document.getElementById('backdrop').style.display = 'none';
            document.getElementById('products-modal-window').style.display = 'none';
            document.getElementById('close-modal-window').style.display = 'none';
            document.getElementById('body').style.overflow = 'visible';

            localStorage.setItem('basketList', JSON.stringify(basketList))
        });
    }
});