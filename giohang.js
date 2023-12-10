
const btn = document.querySelectorAll(".btn-addcard");
btn.forEach(function(button, index){
    button.addEventListener("click", function(e){
        var button = e.target;
        var product = button.parentElement.parentElement.parentElement;
        var productType = product.querySelector(".type-product").innerHTML;
        var productName = product.querySelector(".product-name").innerHTML;
        var productImg = product.querySelector(".card-img-top").src;
        var productPrice = product.querySelector(".price-product").innerText;
        addCart(productType, productImg, productName, productPrice);
    })
})


function addCart(productType, productImg, productName, productPrice){
    let productInCart = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [];
    let checkProduct = productInCart.some(value => value.type === productType);
    console.log(checkProduct);
    console.log(productInCart);
    if(!checkProduct){
        productInCart.push({
        type: productType,
        img: productImg,
        name: productName,
        price: productPrice,  
        quantity: 1,
    });
    var json = JSON.stringify(productInCart);
    localStorage.setItem("Products", json);
    alert("Đã thêm: " + productType + " vào giỏ hàng");
    } else {
        alert("Sản phẩm đã tồn tại trong giỏ hàng!");
        return;
    }
    window.location.reload();
}

function numberCart(){
    const number_products = document.querySelector(".no-ordered-item");
    let numberOfproduct = 0;
    if(localStorage.Products != null){
        let list = JSON.parse(localStorage.getItem("Products"))
        list.forEach(item => {
        numberOfproduct += item.quantity;
    })
    number_products.innerHTML = numberOfproduct;
    }
}

const table_body = document.querySelector(".table-body");
function renderCart(){
    let productInCart = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [];
    let product = "";
    if(productInCart.length > 0){
        
        productInCart.map((value, index) => {
         product += `<tr id="${index}">
                        <td class="type-product">${value.type}</td>
                        <td class="img-product"><img src="${value.img}" alt=""></td>
                        <td class="info-product">${value.name}</td>
                        <td class="quantity-product"><input name="${value.type}" type="number" value="${value.quantity}" min="1" max="10" onchange="inputQuantity(${index})"></td>
                        <td class="price-product">${value.price}</td>
                        <td class="delete-product" onclick="deleteI(${index})">Delete</td>
                    </tr>`;
        
    })
    table_body.innerHTML = product;
    }
    totalPay();
    numberCart();
}

function deleteI(index){
    let productInCart = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [];
    productInCart.splice(index, 1);
    localStorage.setItem("Products", JSON.stringify(productInCart));
    renderCart();
    window.location.reload();
}

function totalPay(){
    let productInCart = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [];
    var total = 0;
    if(productInCart.length > 0){
        productInCart.forEach(item => {
            total += item.price*item.quantity;
        })
    }
    var total_price = document.querySelector(".total-price");
    total_price.innerHTML = total.toLocaleString('de-De');;
    
}

function inputQuantity(index){
    var CartItem = document.getElementById(index);
    var typeI = CartItem.querySelector(".type-product").innerHTML;
    var imgI = CartItem.querySelector(".img-product img").src;
    var infoI = CartItem.querySelector(".info-product").innerHTML;
    var priceI = CartItem.querySelector(".price-product").innerHTML;
    var temp = document.querySelector(".quantity-product input").value;
    let productInCart = localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [];
        
     productInCart[index] = {
        type: typeI,
        img: imgI,
        name: infoI,
        price: priceI,  
        quantity: temp++,
        }
    
    console.log(index)
    localStorage.setItem("Products", JSON.stringify(productInCart));
    totalPay();
    console.log(productInCart[index]);
    numberCart();
}

function payment(){
    var total = document.querySelector(".total-price").innerText;
    alert("Tổng tiền bạn cần thanh toán: "+ total);
}