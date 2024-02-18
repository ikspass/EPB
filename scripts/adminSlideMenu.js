let slidesList = [];

let slidesListContainer = document.getElementById('slides-list-container');


fetch('./scripts/slides.json')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        slidesList.push(element);
    });
    console.log(slidesList)
    slidesList.forEach(item => {
        let slideItem = document.createElement('div');
        slideItem.className = 'slide-item'
        slideItem.innerHTML =
        `
        <div>
            <div class="slide-description">
                <div class="heading">${item.title}</div>
                <div class="line"></div>
                <div class="slide-text big-text">${item.text}</div>
            </div>
            <div class="slide-image-container">
                <div class="slide-image">
                    <img src="styles/images/image.png" alt="">
                </div>
            </div>
        </div>
        <div class="slide-item-button">
            <button class="modal-main-buttons">Удалить</button>
        </div>
        `
        slidesListContainer.appendChild(slideItem);
    });    

});