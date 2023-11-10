document.addEventListener('DOMContentLoaded', function() {
    var currentElement = null;

    function changeColors(element) {
        var bgColor = getRandomColor();
        var textColor = getRandomColor();

        element.style.backgroundColor = bgColor;
        element.style.color = textColor;
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    function handleClick(event) {
        var elements = document.querySelectorAll('ol li');

        for (var i = 0; i < elements.length; i++) {
            if (currentElement === elements[i]) {
                changeColors(currentElement);
            }
        }

        currentElement = event.target;
    }

    document.addEventListener('click', handleClick);
});

function addImage() {
    var img = document.createElement('img');
    img.src = 'dublin-ireland-DUBLINTG0721-e1066115faf74b958a7b1d792ba13c1c.jpg';
    img.alt = 'Вулиця в Дубліні';
    document.body.appendChild(img);
    currentImage = img;
}

function increaseImageSize() {
    if (currentImage) {
        var currentSize = parseInt(window.getComputedStyle(currentImage).width);
        currentImage.style.width = (currentSize + 10) + 'px';
    }
}

function decreaseImageSize() {
    if (currentImage) {
        var currentSize = parseInt(window.getComputedStyle(currentImage).width);
        currentImage.style.width = (currentSize - 10) + 'px';
    }
}

function deleteImage() {
    if (currentImage) {
        currentImage.parentNode.removeChild(currentImage);
        currentImage = null;
    }
}