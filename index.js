window.addEventListener('load', function (event) {
    const resetButton = document.querySelector('.btn-danger');
    const calculateButton = document.querySelector('.btn-success');
    const calculateForm = document.querySelector('.calculateForm');
    const initialInput = document.getElementById('initial');
    const lengthInput = document.getElementById('length');
    const rateInput = document.getElementById('rate');
    const freqInput = document.getElementById('freq');

    resetButton.addEventListener('click', () => calculateForm.reset());
    calculateButton.addEventListener('click', () => {
        const initialP = parseInt(initialInput.value);
        const lengthT = parseInt(lengthInput.value);
        const rateR = parseFloat(rateInput.value);
        const freqN = parseInt(freqInput.value);
        const amount = initialP * Math.pow(1 + rateR / (100 * freqN), freqN * lengthT);

        if (isNaN(initialP) || isNaN(lengthT) || isNaN(rateR)) {
            alert('Invalid Input, Only Numbers!')
        } else {
            const form = document.querySelector('form');
            const newDiv = document.createElement('div');
            form.append(newDiv);
            newDiv.innerText = `In ${lengthT} years your amount will be $${amount}`;
            newDiv.className = 'result';
        }
    })
});