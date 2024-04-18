let productType = 'item';
let productCategory = 'bakery';
let productName;
let productDescription;

let confirmButton = document.getElementById('confirm-button');
confirmButton.disabled = true;

let infoContainer = document.getElementById('products-info');

let selectedRadioType;
let selectedRadioElementType

let radioButtonsType = document.getElementById('type-container').querySelectorAll('input[name="type"]');

let previewContainer = document.getElementById('preview');
let modalWindow = document.createElement('div');
previewContainer.appendChild(modalWindow);
modalWindow.innerHTML =
`
<div class="preview-product-modal-window" id="products-modal-window-item">
<div class="product-modal-window-image">
    <img id="modal-image-item" src="styles/images/image.png" alt="">
</div>
<div class="product-modal-window-info">
    <div>
        <div class="product-modal-window-description">
            <div class="big-text bold" id="preview-name">Название</div>
            <div class="small-text grey" id="preview-description">Описание</div>
        <div class="quantity">
            <div class="quantity-tool" id="quantity-minus-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                    <path d="M0 2.00002C0 1.41091 0.477563 0.93335 1.06667 0.93335H14.9333C15.5224 0.93335 16 1.41091 16 2.00002C16 2.58912 15.5224 3.06668 14.9333 3.06668H1.06667C0.477563 3.06668 0 2.58912 0 2.00002Z" fill="#323232"/>
                </svg>
            </div>
            <div class="big-text quantity-info" id="product-quantity-item">1</div>
            <div class="quantity-tool" id="quantity-plus-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477563 8.5891 0 8 0C7.4109 0 6.93333 0.477563 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z" fill="#323232"/>
                </svg>
            </div>
        </div>
        </div>
    </div>
    
    <div class="product-modal-window-options">
        <div class="product-modal-window-total big-text bold">
            <div>Сумма:</div>
            <div class="modal-price-container">
                <div><span id="preview-price">0</span> руб.</div>
            </div>
        </div>
        <button class="modal-main-buttons" id="add-to-basket-item">Добавить</button>
    </div>
</div>
</div>
`

// ПЕРЕКЛЮЧАТЕЛЬ ТИПА ТОВАРА
selectedRadioElementType = document.getElementById('type-container').querySelector('input[name="type"]:checked');
selectedRadioType = selectedRadioElementType ? selectedRadioElementType.id : null;
radioButtonsType.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        selectedRadioElementType = document.getElementById('type-container').querySelector('input[name="type"]:checked');
        selectedRadioType = selectedRadioElementType ? selectedRadioElementType.id : null;
        if (selectedRadioType == 'item'){
            productType = 'item';
            modalWindow.innerHTML =
            `
            <div class="preview-product-modal-window" id="products-modal-window-item">
            <div class="product-modal-window-image">
                <img id="modal-image-item" src="styles/images/image.png" alt="">
            </div>
            <div class="product-modal-window-info">
                <div>
                    <div class="product-modal-window-description">
                        <div class="big-text bold" id="preview-name">Название</div>
                        <div class="small-text grey" id="preview-description">Описание</div>
                    <div class="quantity">
                        <div class="quantity-tool" id="quantity-minus-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M0 2.00002C0 1.41091 0.477563 0.93335 1.06667 0.93335H14.9333C15.5224 0.93335 16 1.41091 16 2.00002C16 2.58912 15.5224 3.06668 14.9333 3.06668H1.06667C0.477563 3.06668 0 2.58912 0 2.00002Z" fill="#323232"/>
                            </svg>
                        </div>
                        <div class="big-text quantity-info" id="product-quantity-item">1</div>
                        <div class="quantity-tool" id="quantity-plus-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477563 8.5891 0 8 0C7.4109 0 6.93333 0.477563 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z" fill="#323232"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="product-modal-window-options">
                    <div class="product-modal-window-total big-text bold">
                        <div>Сумма:</div>
                        <div class="modal-price-container">
                            <div><span id="preview-price">0</span> руб.</div>
                        </div>
                    </div>
                    <button class="modal-main-buttons" id="add-to-basket-item">Добавить</button>
                </div>
            </div>
            </div>
            `
            infoContainer.innerHTML = 
            `
            <div>
                <div class="normal-text">Название</div>
                <input id="product-name" type="text">
            </div>
            <div>
                <div class="normal-text">Описание</div>
                <textarea id="product-description"></textarea>
            </div>
            <div>
                <div class="normal-text">Цена за 1 шт.</div>
                <input id="product-price" type="text">
            </div>
            <div>
                <input id="product-image" type="file">
                <label for="product-image" class="normal-main-buttons">Загрузить фото</label>
            </div>
            `
        }
        else if (selectedRadioType == 'kilograms'){
            modalWindow.innerHTML = 
            `
            <div class="preview-product-modal-window">
            <div class="product-modal-window-image">
                <img id="preview-image" src="styles/images/image.png" alt="">
            </div>
            <div class="product-modal-window-info">
                    <div class="product-modal-window-description-container">
                        <div class="product-modal-window-description">
                            <div class="big-text bold" id="preview-name">Название</div>
                            <div class="small-text grey" id="preview-description">Описание</div>
                        </div>
                        <div class="product-modal-window-options">
                            <div class="modal-radio">
                                <div class="modal-form-radio">
                                    <input type="radio" id="modal-weight-kg-1" name="radio" checked>
                                    <div class="radio-container">
                                        <div class="big-text product-modal-window-total">
                                            <label class="modal-radio " for="modal-weight-kg-1">Вес: <span id="preview-weight-1">0</span> кг.</label>
                                            <div><span id="preview-price">0</span> руб.</div>
                                        </div>
                                        <div class="grey normal-text price-kg">Цена за килограмм изделия - <span id="preview-price-kg-1">0</span> руб</div>
                                    </div>
                                </div>
                                <div class="modal-form-radio">
                                    <input type="radio" id="modal-weight-kg-2" name="radio">
                                    <div>
                                        <div class="big-text product-modal-window-total">
                                            <label class="modal-radio " for="modal-weight-kg-2">Вес: <span id="preview-weight-2">0</span> кг.</label>
                                            <div><span id="preview-price-2">0</span> руб.</div>
                                        </div>
                                        <div class="grey normal-text price-kg">Цена за килограмм изделия - <span id="preview-price-kg-2">0</span> руб</div>
                                    </div>
                                </div>
                            </div>
                            <button class="modal-main-buttons" id="add-to-basket-kg">Добавить</button>
                        </div>
                    </div>             
            </div>
            </div>
            `
            productType = 'kilograms';
            infoContainer.innerHTML =
            `
            <div>
                <div class="normal-text">Название</div>
                <input id="product-name" type="text">
            </div>
            <div>
                <div class="normal-text">Описание</div>
                <textarea id="product-description"></textarea>
            </div>
            <div class="text-params-container">
            <div class="text-params-columns">
                <div>
                    <div class="normal-text">Вес №1 (кг)</div>
                    <input style="width: 200px;" id="product-weight_1" type="text">
                </div>
                <div>
                    <div class="normal-text">Цена за вес №1</div>
                    <input style="width: 200px;" id="product-price_1" type="text">
                </div>
            </div>
            <div class="text-params-columns">
                <div>
                    <div class="normal-text">Вес №2 (кг)</div>
                    <input style="width: 200px;" id="product-weight_2" type="text">
                </div>
                <div>
                    <div class="normal-text">Цена за вес №2</div>
                    <input style="width: 200px;" id="product-price_2" type="text">
                </div>
            </div>
            </div>
            `
        }
    })
})

let productPrice;
let productPrice_1;
let productPrice_2;
let productWeight_1;
let productWeight_2;

// КНОПКА ПРИМЕНИТЬ ДЛЯ ПРЕДПРОСМОТРА
document.getElementById('apply').addEventListener('click', function(){
    let selectedRadioElementCategory = document.getElementById('category-container').querySelector('input[name="category"]:checked');
    let selectedRadioCategory = selectedRadioElementCategory ? selectedRadioElementCategory.id : null;
    if (selectedRadioCategory == 'bakery'){
        productCategory = 'bakery';
    }
    else if (selectedRadioCategory == 'confection'){
        productCategory = 'confection';
    }
    // ПОЛУЧЕНИЕ ВСЕХ БЛОКОВ С НАЗВАНИЕМ
    let productNameContainers = previewContainer.querySelectorAll('#preview-name');

    confirmButton.disabled = false;
    productName = document.getElementById('product-name').value;
    productDescription = document.getElementById('product-description').value;

    productNameContainers.forEach(element => {
        element.innerText = productName;
    });
    document.getElementById('preview-description').innerText = productDescription;
    let productPriceContainers = previewContainer.querySelectorAll('#preview-price');

    // ЕСЛИ ПОШТУЧНО
    if (selectedRadioType == 'item'){
        productPrice = Number(document.getElementById('product-price').value);
        productPriceContainers.forEach(element => {
            element.innerText = productPrice.toFixed(2); 
        });
    }
    // ЕСЛИ ПО КИЛОГРАММАМ
    else if (selectedRadioType == 'kilograms'){
        productPrice_1 = Number(document.getElementById('product-price_1').value);
        productPrice_2 = Number(document.getElementById('product-price_2').value);
        productWeight_1 = Number(document.getElementById('product-weight_1').value);
        productWeight_2 = Number(document.getElementById('product-weight_2').value);
        productPriceContainers.forEach(element => {
            element.innerText = productPrice_1.toFixed(2); 
        });    
        document.getElementById('preview-price-2').innerText = productPrice_2.toFixed(2);
        document.getElementById('preview-weight-1').innerText = productWeight_1.toFixed(2);
        document.getElementById('preview-weight-2').innerText = productWeight_2.toFixed(2);

        document.getElementById('preview-price-kg-1').innerText = (productPrice_1 / productWeight_1).toFixed(2);
        document.getElementById('preview-price-kg-2').innerText = (productPrice_2 / productWeight_2).toFixed(2);
    }

    function previewFile() {
        var preview = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result;
        }
      
        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
      }
});