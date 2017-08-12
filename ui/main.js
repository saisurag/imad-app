console.log('Loaded!');


// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// Move the image

var img = ('https://i.ytimg.com/vi/pJXDzvmOrqw/hqdefault.jpg');
var marginLeft = 0;
function moveRight () {
    marginLeft += 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
