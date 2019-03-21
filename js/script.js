const data = JSON.parse(sessionStorage.getItem('products'));
let products = [...data];

const squares = document.getElementById('squares');
const sorting = document.getElementById('sorting');

sorting.addEventListener('change', () => {
    if (sorting.selectedIndex === 0) {
        products = [...data];
        showProducts();
    } else if (sorting.selectedIndex === 1) {
        products.sort((a,b) => b.price - a.price);
        showProducts();
    } else if (sorting.selectedIndex === 2) {
        products.sort((a,b) => a.price - b.price);
        showProducts();
    }
});

showProducts();

function showProducts() {
    let output = '';
    products.forEach(product => {
        output += `
        <div class="col-4">
            <div class="square">
                <img src="${product.badge}" alt="Premium">
                <img src="${product.image}" alt="Premium">
                <div class="namePrice">
                    <p>${product.name}</p>
                    <p>${product.price}$</p>
                </div>
            </div>
        </div>
        `;
    });
    squares.innerHTML = output;
}
