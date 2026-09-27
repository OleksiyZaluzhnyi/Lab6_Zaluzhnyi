const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");
const resetColorBtn = document.getElementById("resetColorBtn");
const errorMessage = document.getElementById("errorMessage");
const presetButtons = document.querySelectorAll(".preset-btn");

function isValidColor(color) {
    const testStyle = new Option().style;
    testStyle.color = color;
    return testStyle.color !== "";
}

function applyBackgroundColor(color) {
    if (isValidColor(color)) {
        document.body.style.backgroundColor = color;
        errorMessage.classList.add("d-none");
    } else {
        errorMessage.classList.remove("d-none");
    }
}

changeColorBtn.addEventListener("click", function () {
    const newColor = colorInput.value.trim();
    if (newColor) {
        applyBackgroundColor(newColor);
    }
});

colorInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        changeColorBtn.click();
    }
});

resetColorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#f8f9fa";
    colorInput.value = "";
    errorMessage.classList.add("d-none");
});

presetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedColorName = button.getAttribute("data-color");
        colorInput.value = selectedColorName;
        applyBackgroundColor(selectedColorName);
    });
});