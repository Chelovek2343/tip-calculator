const numberInput = document.getElementById('numberInput');
const billInput = document.getElementById('billInput');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const customInput = document.getElementById('customInput');
const fiveProcent = document.getElementById('fiveProcent');
const tenProcent = document.getElementById('tenProcent');
const fiveteenProcent = document.getElementById('fiveteenProcent');
const twentyfiveProcent = document.getElementById('twentyfiveProcent');
const fiftyProcent = document.getElementById('fiftyProcent');
const amount = document.getElementById('amount');
const total = document.getElementById('total');
const reset = document.getElementById('reset');

form.addEventListener('input', (e) => {
    e.preventDefault();
    five();
    ten();
    fifteen();
    twenty();
    fifty();
    custom();
});

form2.addEventListener('input', (e) => {
    e.preventDefault();

    five();
    ten();
    fifteen();
    twenty();
    fifty();
    custom();
});

function five() {
    fiveProcent.addEventListener('click', () => {
        let number =
            (Number(billInput.value) * 0.05) / Number(numberInput.value);
        const result = number.toFixed(2);
        const totalResult = Number(billInput.value) + Number(result);

        amount.textContent = `$${result}`;
        total.textContent = `$${totalResult}`;
    });
}

function ten() {
    tenProcent.addEventListener('click', () => {
        let number =
            (Number(billInput.value) * 0.1) / Number(numberInput.value);
        const result = number.toFixed(2);
        const totalResult = Number(billInput.value) + Number(result);

        amount.textContent = `$${result}`;
        total.textContent = `$${totalResult}`;
    });
}

function fifteen() {
    fiveteenProcent.addEventListener('click', () => {
        let number =
            (Number(billInput.value) * 0.15) / Number(numberInput.value);
        const result = number.toFixed(2);
        const totalResult = Number(billInput.value) + Number(result);

        amount.textContent = `$${result}`;
        total.textContent = `$${totalResult}`;
    });
}

function twenty() {
    twentyfiveProcent.addEventListener('click', () => {
        let number =
            (Number(billInput.value) * 0.25) / Number(numberInput.value);
        const result = number.toFixed(2);
        const totalResult = Number(billInput.value) + Number(result);

        amount.textContent = `$${result}`;
        total.textContent = `$${totalResult}`;
    });
}

function fifty() {
    fiftyProcent.addEventListener('click', () => {
        let number =
            (Number(billInput.value) * 0.5) / Number(numberInput.value);
        const result = number.toFixed(2);
        const totalResult = Number(billInput.value) + Number(result);

        amount.textContent = `$${result}`;
        total.textContent = `$${totalResult}`;
    });
}

function custom() {
    let number =
        (Number(billInput.value) * customInput.value) /
        100 /
        Number(numberInput.value);
    const result = number.toFixed(2);
    const totalResult = Number(billInput.value) + Number(result);

    amount.textContent = `$${result}`;
    total.textContent = `$${totalResult}`;
}

reset.addEventListener('click', () => {
    if (reset.click) {
        amount.textContent = `$0.00`;
        total.textContent = `$0.00`;
        billInput.value = 0;
        numberInput.value = 0;
        customInput.value = 0;
    }
});
