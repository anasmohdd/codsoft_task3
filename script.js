let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById("result").value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("result").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("result").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("result").value = displayValue;
    }
}
