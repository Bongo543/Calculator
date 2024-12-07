const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input; // Append input to the display
}

// Attach the function to the window object
window.appendToDisplay = appendToDisplay;

function clearDisplay() {
    display.value = ''; // Clear the display
}

window.clearDisplay = clearDisplay;

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = "Error"; // Show "Error" for invalid expressions
    }
}

window.calculate = calculate;
