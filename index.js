window.addEventListener('load', function (event) {
    const resetButton = document.querySelector('.resetButton');
    const calculateButton = document.querySelector('.calculateButton');
    const calculateForm = document.querySelector('.calculateForm');
    const initialInput = document.getElementById('initial');
    const lengthInput = document.getElementById('length');
    const rateInput = document.getElementById('rate');
    const freqInput = document.getElementById('freq');

    resetButton.addEventListener('click', () => calculateForm.reset());
    calculateButton.addEventListener("click", function () {
        let initialP = parseInt(initialInput.value); 
        let lengthT = parseInt(lengthInput.value);
        let rateR = parseFloat(rateInput.value);
        let freqN = parseInt(freqInput.value);
        const amount =  initialP * Math.pow(1 + rateR / (100 * freqN), freqN * lengthT);
        console.log(amount);

        const form = document.querySelector('form');
        const newDiv = document.createElement('div');
        form.append(newDiv);
        newDiv.innerText = amount;
        newDiv.style.padding = '10px';
        newDiv.style.border = '1px solid #081c15';        
    })
});