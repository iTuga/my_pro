const message = document.querySelector('.message button');
message.addEventListener('click', sendMessage);


function sendMessage(e) {
    e.preventDefault();
    let userMessage = prompt('Напишіть ваше повідомлення');
}

const pictures = document.querySelector('.foto-objects img');
pictures.addEventListener('mouseover', bigPictures);

function bigPictures(e) {
    e.preventDefault();
    return document.getElementsByClassName('.big');
}

const bestButton = document.querySelector('.best-button');
bestButton.addEventListener('click', dontClick);

function dontClick(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            document.querySelector('.simple-ajax').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}
