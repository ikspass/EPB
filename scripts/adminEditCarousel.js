document.getElementById('apply').addEventListener('click', function(){
    let title = document.getElementById('slide-title').value;
    let text = document.getElementById('slide-text').value;

    document.getElementById('preview-title').innerText = title;
    document.getElementById('preview-text').innerText = text;
});