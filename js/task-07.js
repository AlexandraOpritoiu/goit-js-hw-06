const fontSizeControl = document.getElementById('font-size-control');
const textInput = document.getElementById('text');

fontSizeControl.addEventListener("input", () => {
    const fontSizeValue = fontSizeControl.value;
    textInput.style.fontSize = `${fontSizeValue}px`;
});

