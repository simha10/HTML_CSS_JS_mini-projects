function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        // Use the Function constructor to safely evaluate the expression
        const result = new Function('return ' + expression)();
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}