var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDesc = document.getElementById('productDesc');
var tableBody = document.getElementById('productTableBody')
var addBtn = document.getElementById('addBtn')
var inputs =Array.from(document.getElementsByClassName('form-input'))
var products;

if (localStorage.getItem('products') != null) {
    products = JSON.parse(localStorage.getItem('products'))
    showProducts();
} else {
    products = []
}



addBtn.onclick = function () {
    // add product 
    addProduct();
    // display product 
    showProducts();
    // empty the inputs
    emptyInputs();
}

function addProduct(porduct_id) {

    if (isValid()) {
        
        var product = {
            name:productName.value,
            price:productPrice.value,
            category:productCategory.value,
            desc:productDesc.value,
        }
        if (addBtn.innerHTML == 'Add Product') {
        var id = porduct_id
        if (porduct_id === undefined)
        {
            products.push(product)
            // console.log(products)
        }
    }
    else if (addBtn.innerHTML == 'Edit Product') {
        console.log(id)
        products.splice(id,1,product)
        console.log(products)
        addBtn.innerHTML = 'Add Product'
        addBtn.className = 'btn btn-primary'
    }   
    localStorage.setItem('products',JSON.stringify(products))
    // if the innerhtml was edit product
    }
    else{

    }

}


function showProducts() {
    var i = 0;
    var trs = ''
    products.forEach(product => {
            trs+=`<tr>
                    <td>${i+1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                    <td>${product.desc}</td>
                    <td><button onclick='editProduct(${i})' class="btn btn-outline-warning">Edit</button></td>
                    <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
                    </tr>`
                    i+=1
                });
    tableBody.innerHTML = trs
}

function emptyInputs(){
    inputs.forEach(input => {
        input.value = ''
    });
}

// function to delete product
function deleteProduct(porduct_id) {
    products.splice(porduct_id,1)
    // console.log(products)
    localStorage.setItem('products',JSON.stringify(products))
    showProducts();
}

function editProduct(porduct_id) {
    productValues = Object.values(products[porduct_id])
    var i = 0
    inputs.forEach(input => {
        input.value = productValues[i];
        i+=1
    });
    addProduct(porduct_id)
    addBtn.innerHTML = 'Edit Product'
    addBtn.className = 'btn btn-warning'
}

// function to search products 

function searchProducts(term) {
    // for loop -> loop on the products
    var trs = ''
    var i = 0;
    products.forEach(product => {
        if (product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
                    trs+=`<tr>
                            <td>${i+1}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.category}</td>
                            <td>${product.desc}</td>
                            <td><button onclick='editProduct(${i})' class="btn btn-outline-warning">Edit</button></td>
                            <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
                            </tr>`
                        }
                i+=1
            });
    tableBody.innerHTML = trs
}

// i need to make a validaiton ==> is an important step in software engineering and js

//  i made the regex 

function isValid() {
    var regexName = /^[a-zA-Z]{2,}\w*$/;
    var regexPrice = /^\d+$/gm
    var regexDesc = /^[a-zA-Z]+ {1,}/gm
    var is_true = regexName.test(productName.value) && regexPrice.test(productPrice.value) && regexName.test(productCategory.value) && regexDesc.test(productDesc.value) ;
    if (is_true) {
        addBtn.disabled = false;
        console.log(true)
        return true;
    }
    else{
        addBtn.disabled = true;
        return false;
    }
}

inputs.forEach(function(input) {
    input.addEventListener('keyup', isValid);
  });