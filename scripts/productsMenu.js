let menuPage = '';

let previews = {
    'bakery': [],
    'confection': []
}

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
        itemButton.className = 'add-to-basket small-text bold';
    
        const itemSeparator = document.createElement('div');
        itemSeparator.className = 'products-separator';
    
        //let
        let item = document.createElement('div');
        item.className = 'products-item';
        
        let itemImage = document.createElement('div');
        itemImage.className = 'products-item-image';

        let image = document.createElement('img');
        image.src = `styles/images/${name}.jpg`;
            
        let itemName = document.createElement('div');
        itemName.innerText = name
        itemName.className = 'big-text bold products-item-name';
            
        let itemPrice = document.createElement('div');
        itemPrice.innerText = price + ' руб';
        itemPrice.className = 'big-text';
            
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
        previews['bakery'].forEach(element => {
            addItem(element.name, element.price)
        });
    }
    
    showElements();   
});

