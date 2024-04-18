let slideTitle;
let slideText;

let confirmButton = document.getElementById('confirm-button');
confirmButton.disabled = true;

let slideTitleContainer = document.getElementById('preview-title');
let slideTextContainer = document.getElementById('preview-text');
let slideImageContainer = document.getElementById('preview-image');

let applyButton = document.getElementById('apply-button');

// СДЕЛАТЬ ОТОБРАЖЕНИЕ В ПРЕДПРОСМОТРЕ ЗАГРУЖЕННОЙ КАРТИНКИ

// КНОПКА ПРИМЕНИТЬ ДЛЯ ПРЕДПРОСМОТРА
applyButton.addEventListener('click', function(){
    confirmButton.disabled = false;
    slideTitle = document.getElementById('slide-title').value;
    slideText = document.getElementById('slide-text').value;

    slideTitleContainer.innerText = slideTitle;
    slideTextContainer.innerText = slideText;
});
