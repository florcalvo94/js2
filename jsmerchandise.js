//----------merchandise--------------------//
$(document).ready(function () {

    const URLSTOCKITEMS = "data/stockItems.json";
 $.getJSON(URLSTOCKITEMS, function (response,status){
     if(status==="success"){
        for(const stockItem of response.stockItems){
            $(".allProducts").prepend(`<div class="product col">
            <img class="product-image" src="${stockItem.image}">
            <h6 class="product-title">${stockItem.name}</h6>
            <p class="product-price">${stockItem.price}</p>
            <button class="addToCart btn btn-success">comprar</button>
        </div>`)
        }
     }
 })

    const addToCartBtns = document.querySelectorAll(".addToCart");
addToCartBtns.forEach((addBtn) =>{
    addBtn.addEventListener('click', addToCartClicked);
})

const cartContainer = document.querySelector(".cartContainer");

function addToCartClicked(event){
const merchButton = event.target;
const merchProduct = merchButton.closest(".product");

const productTitle = merchProduct.querySelector(".product-title").textContent;
const productPrice = merchProduct.querySelector(".product-price").textContent;
const productImage = merchProduct.querySelector(".product-image").src;

addProductToCart(productTitle, productPrice, productImage);
}

function addProductToCart(productTitle, productPrice, productImage){
   const cartRow = document.createElement("div");
   const rowContent = ` 
    <div class="row cartItem">
        <div class="col">
            <div class="d-flex">
                <img class="cartImage" src=${productImage}>
                <h6 class="cartTitle">${productTitle}</h6>
            </div>
        </div>
        <div class="col">
            <div>Price:
                <p class="cartPrice"> ${productPrice}</p>
            </div>
        </div>
        <div class="col">
            <div>
                qUantity: <input class="cartQuantity" value="1"></input>
                <button class="btn btn-danger btnDelete" type="button">delete</button>
            </div>   
        </div> 
    </div>`;

   cartRow.innerHTML = rowContent;
   cartContainer.append(cartRow);

   cartRow.querySelector(".btnDelete").addEventListener("click",removeCartItem);

   updateCartTotal ();
 
}

function updateCartTotal (){
    let total = 0;
    const cartTotal = document.querySelector(".cartTotal");
   
    const cartItems = document.querySelectorAll(".cartItem");
        
    cartItems.forEach(cartItem =>{

        const cartPriceElement = cartItem.querySelector(".cartPrice");
        const cartPrice = Number(cartPriceElement.textContent.replace('$',''));
        
        const cartQuantityElement = cartItem.querySelector('.cartQuantity');
        const cartQuantity = Number(cartQuantityElement.value);

        total =  total + cartPrice * cartQuantity;
        console.log(total);
               
    });

cartTotal.innerHTML = `$${total.toFixed(2)}`;
}

function removeCartItem(event){
    const deleteClicked = event.target;
    deleteClicked.closest(".cartItem").remove();
    updateCartTotal();
}


});



