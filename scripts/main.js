document.getElementById('vacancies').addEventListener('click', function(){
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('vacancies-modal-window').style.display = 'flex';
    document.getElementById('close-modal-window').style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';
});

document.getElementById('delivery').addEventListener('click', function(){
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('delivery-modal-window').style.display = 'flex';
    document.getElementById('close-modal-window').style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';
});

document.getElementById('close-modal-window').addEventListener('click', function(){
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('delivery-modal-window').style.display = 'none';
    document.getElementById('vacancies-modal-window').style.display = 'none';
    document.getElementById('close-modal-window').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
});