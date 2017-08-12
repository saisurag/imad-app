console.log('Loaded!');


// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// Move the image

var img = document.getElementById('madi');
img.oneclick = function () {
    img.style.marginLeft = '1000px';
};