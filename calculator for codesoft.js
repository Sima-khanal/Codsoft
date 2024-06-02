document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const btnValue = button.textContent;

            if (btnValue === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            }else if (btnValue === '=') {
                if (previousInput && currentInput && operator) {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } 
            else if (btnValue === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || '0';
            } else if (btnValue === '%') {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            } else if ('+-*/'.includes(btnValue)) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = btnValue;
                }
            } else {
                currentInput += btnValue;
                display.textContent = currentInput;
            }
        });
    });
});
