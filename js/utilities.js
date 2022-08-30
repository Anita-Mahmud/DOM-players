function getExpenseValueByInput(inputId) {
    const perMember = document.getElementById(inputId);
    const perMemberExpenseString = perMember.value;
    const perMemberExpense = parseFloat(perMemberExpenseString);
    if (isNaN(perMemberExpense)) {
        alert('Please provide a valid number');

        return perMemberExpense = $0;
    }
    return perMemberExpense;
}

function getExpenseValueByElement(inputId) {
    const element = document.getElementById(inputId);
    const elementExpenseString = element.innerText;
    const elementExpense = parseFloat(elementExpenseString);
    if (isNaN(elementExpense)) {
        alert('Please provide a valid number');
        return;
    }
    return elementExpense;
}

function setValue(inputId, newValue) {
    const inputElement = document.getElementById(inputId);
    inputElement.innerText = newValue;
}