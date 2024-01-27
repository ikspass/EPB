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
            showModalWindow(name);
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
        itemName.className = 'big-text bold products-item-name';
            
        let itemPrice = document.createElement('div');
        itemPrice.innerText = price + ' руб';
        itemPrice.className = 'big-text bold';
            
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
    

    function showModalWindow(name){
        previews[menuPage].forEach(item => {
            if(item.name == name){
                modalName.innerText = item.name;
                modalDescription.innerText = item.description;
                modalImage.src = `styles/images/${item.name}.jpg`;
                modalPrice.innerText = `${item.price} руб.`
            }
        })
}
});

// QUANTITY
let plus = document.getElementById('quantity-plus');
let minus = document.getElementById('quantity-minus');
let quantity = document.getElementById('quantity-info').innerText;

plus.addEventListener('click', function(){
    quantity = +quantity + 1;
    if(quantity > 20) quantity = 20;
    document.getElementById('quantity-info').innerText = quantity;
})

minus.addEventListener('click', function(){
    quantity = +quantity - 1;
    if (quantity < 0) quantity = 0;
    document.getElementById('quantity-info').innerText = quantity;
})

