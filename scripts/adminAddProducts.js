document.getElementById('apply').addEventListener('click', function(){
    let name = document.getElementById('product-name').value;
    let description = document.getElementById('product-description').value;
    let price = document.getElementById('product-price').value;

    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-price').innerText = price;
});
