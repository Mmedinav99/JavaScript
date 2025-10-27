// --------------------
// WDV221 - IF Statements and Validations
// compareFunctions.js
// --------------------

// Helper: Show or hide error messages
function showError(id, show) {
    document.getElementById(id).style.display = show ? "block" : "none";
}

// --------------------
// Exercise 1: Compare Names (Enhanced)
// --------------------
function compareNames() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("nameResult");

    let valid = true;

    if (name1 === "") {
        showError("name1Error", true);
        valid = false;
    } else {
        showError("name1Error", false);
    }

    if (name2 === "") {
        showError("name2Error", true);
        valid = false;
    } else {
        showError("name2Error", false);
    }

    if (!valid) {
        result.textContent = "";
        return;
    }

    // Compare names
    if (name1 === name2) {
        result.textContent = "Same (exact match)";
        result.style.color = "green";
    } else if (name1.toLowerCase() === name2.toLowerCase()) {
        result.textContent = "Same letters, different capitalization";
        result.style.color = "orange";
    } else {
        result.textContent = "Different";
        result.style.color = "blue";
    }
}

// Reset function for names
function resetNames() {
    document.getElementById("nameResult").textContent = "";
    showError("name1Error", false);
    showError("name2Error", false);
}

// --------------------
// Exercise 2: Compare Numbers
// --------------------
function compareNumbers() {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const result = document.getElementById("numResult");

    let valid = true;

    // Validate integers only
    if (num1 === "" || isNaN(num1) || !Number.isInteger(Number(num1))) {
        showError("num1Error", true);
        valid = false;
    } else {
        showError("num1Error", false);
    }

    if (num2 === "" || isNaN(num2) || !Number.isInteger(Number(num2))) {
        showError("num2Error", true);
        valid = false;
    } else {
        showError("num2Error", false);
    }

    if (!valid) {
        result.textContent = "";
        return;
    }

    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    // Compare numbers
    if (n1 === n2) {
        result.textContent = "Equal";
        result.style.color = "green";
    } else if (n1 > n2) {
        result.textContent = `${n1} is larger`;
        result.style.color = "blue";
    } else {
        result.textContent = `${n2} is larger`;
        result.style.color = "blue";
    }
}

// Reset function for numbers
function resetNumbers() {
    document.getElementById("numResult").textContent = "";
    showError("num1Error", false);
    showError("num2Error", false);
}
