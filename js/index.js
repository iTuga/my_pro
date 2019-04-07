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


