window.onload = function() {

    const text = document.getElementById('text');
    const slider = document.getElementById('slider');
    const code = document.getElementById('color');

    slider.addEventListener('input', changeColor);

    function changeColor() {
        text.style.backgroundColor = '#'+slider.value;
        code.textContent = "Color Hex Code: #" + slider.value;
    }

};