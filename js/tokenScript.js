const insertedInput = document.getElementById('insertedInput');
const submitInput = document.getElementById('submitInput');
const invalidText = document.getElementById('invalidText');
const token = 'glassesusa';

insertedInput.addEventListener('input', () => {
    insertedInput.classList.remove('invalidInput');
    invalidText.innerHTML = '';
});

submitInput.addEventListener('click', checkToken);

function checkToken() {
    alternativeFetch(productsData, {
        method: 'POST',
        token: insertedInput.value
    });
}

// The Service for the JSON is not working for me. Here is an alternative fetch() simulation.
function alternativeFetch(API, settings) {
    if (settings.token === token) {
        sessionStorage.setItem('products', JSON.stringify(API));
        window.location.href = './index3.html';
    } else {
        insertedInput.classList.add('invalidInput');
        invalidText.innerHTML = 'INVALID TOKEN - TRY AGAIN';
        console.error('INVALID TOKEN');
    }
}