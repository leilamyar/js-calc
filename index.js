'use strict';

const addBtn = document.getElementById('add-btn');
const nb1 = document.getElementById('nb1');
const nb2 = document.getElementById('nb2');

addBtn.addEventListener('click', (e) => {
    console.log('CLICKED !');
    e.preventDefault();
    const result = document.getElementById('result');
    result.innerText = `Résultat: ${parseInt(nb1.value) + parseInt(nb2.value)}`;
    console.log('result:', result);
});

addBtn.addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.key === 'Enter'){
        const result = document.getElementById('result');
        result.innerText = `Résultat: ${parseInt(nb1.value) + parseInt(nb2.value)}`;
    }
});

[nb1, nb2].forEach((nbInputField) => {
    nbInputField.addEventListener('focus', function() {
        if (this.value) {
            this.select();
        }
    })
});
