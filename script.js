const slider = document.getElementById("slider");
const preview = document.getElementById("preview");
const hexCode = document.getElementById("hexCode");
const manualInput = document.getElementById("manualInput");

function updateColor(hex){

    const color = "#" + hex;

    document.body.style.backgroundColor = color;
    preview.style.backgroundColor = color;
    hexCode.textContent = "Color Hex Code: " + color;

}

slider.addEventListener("input", function(){

    updateColor(slider.value);

});

manualInput.addEventListener("input", function(){

    let value = manualInput.value.toUpperCase();

    if(/^[0-9A-F]{6}$/.test(value)){

        updateColor(value);

    }

});

updateColor(slider.value);