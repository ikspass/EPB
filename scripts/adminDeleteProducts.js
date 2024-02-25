let productsList = document.getElementById('products-list');

// ОТОБРАЖЕНИЕ ТОВАРА ИЗ БД
function addItem(name, price){
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
            <div class="big-text mobile-normal-text bold"><span>${price.toFixed(2)}</span> руб.</div>
            <button class="normal-main-buttons">Удалить</button>
        </div>
    <div class="products-separator"></div>
    `
}

// МАСИВ ИЗ БД
fetch('./scripts/products.json')
.then(response => response.json())
.then(data => {
    let productsData = [];

    data.forEach(element => {
        productsData.push(element)
    });

    productsData.forEach(item => {
        if(item.type == 'item'){
            addItem(item.name, item.price)
        }
        else if(item.type == 'kilograms'){
            addItem(item.name, item.price_1)
        }
    })
});