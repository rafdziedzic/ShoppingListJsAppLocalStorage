const form = document.querySelector('#product-form');
const productList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-products');
const filter = document.querySelector('#filter');
const productInput = document.querySelector('#product');


loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addProducts);
}

function addProducts(e) {
    if(productInput.value === ''){
        alert('Add a product');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(productInput.value)); 

    productList.appendChild(li);


    e.preventDefault();
}