'use strict';

const addBtn = document.getElementById('add-btn');
const substractBtn = document.getElementById('substract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const nb1 = document.getElementById('nb1');
const nb2 = document.getElementById('nb2');

const opsBtns = document.querySelectorAll('.ops-btn');

console.log(opsBtns);

const handleOps = (nb1, nb2, opsType) => {
    let res = '';

    if (opsType == 'add-btn') {
        res = `Résultat: ${parseFloat(nb1.value) + parseFloat(nb2.value)}`;
    } else if (opsType == 'substract-btn') {
        res = `Résultat: ${parseFloat(nb1.value) - parseFloat(nb2.value)}`;
    } else if (opsType == 'multiply-btn') {
        res = `Résultat: ${parseFloat(nb1.value) * parseFloat(nb2.value)}`;
    } else if (opsType == 'divide-btn') {
        res = `Résultat: ${parseFloat(nb1.value) / parseFloat(nb2.value)}`;
    } else {
        res = 'Opération inconnue';
        console.error('Error with ops type');
    }
    return res;
};

opsBtns.forEach((opsBtn) => {
    opsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const opsType = opsBtn.id;
        const r = document.getElementById('result');
        r.innerText = handleOps(nb1, nb2, opsType);
    });
});

opsBtns.forEach((opsBtn) => {
    opsBtn.addEventListener('keyup', function(e) {
        e.preventDefault();
        if (e.key === 'Enter'){
            const opsType = opsBtn.id;
            const r = document.getElementById('result');
            r.innerText = handleOps(nb1, nb2, opsType);
        }
    });
});

[nb1, nb2].forEach((nbInputField) => {
    nbInputField.addEventListener('focus', function() {
        if (this.value) {
            this.select();
        }
    })
});
