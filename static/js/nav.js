$(document).ready(function () {
  $(".fa-search").click(function () {
    $(".search-box").toggle();
    $(".text").focus();
  });
});


  const wishShow = document.createElement("p")
  const cartShow = document.createElement("p")
  const addCart = document.querySelectorAll(".cart, #shopping-cart, .add_cart_button");
  const addWish = document.querySelectorAll(".wish, #heart, .add_to_wishlist");

  wishShow.classList.add("count")
  cartShow.classList.add("count2");
  wishShow.innerHTML = "0"
  cartShow.innerHTML = "0";
  document.getElementById("wish").appendChild(wishShow)
  document.getElementById("cart").appendChild(cartShow);
  
  
  for (var i = 0; i < addCart.length; i++){
    addCart[i].addEventListener('click', () => {
      cartCount()
    })
  }

  function cartCount() {
    let prdCount = localStorage.getItem('cartsCount');
    prdCount = parseInt(prdCount);

    if(prdCount){
      localStorage.setItem('cartsCount', prdCount + 1)
      cartShow.textContent = prdCount +1
    }else{
      localStorage.setItem('cartsCount', 1)
      cartShow.textContent = prdCount = 1;
    }
  }

  function displayCart() {
    let prdCount = localStorage.getItem("cartsCount")
    if(prdCount){
      cartShow.textContent = prdCount;
    }
  }

  displayCart()

//wishlist 

  for (var i = 0; i < addWish.length; i++) {
    addWish[i].addEventListener("click", () => {
      wishCount();
    });
  }

  function wishCount() {
    let prdCount = localStorage.getItem("wishCount");
    prdCount = parseInt(prdCount);

    if (prdCount) {
      localStorage.setItem("wishCount", prdCount + 1);
      wishShow.textContent = prdCount + 1;
    } else {
      localStorage.setItem("wishCount", 1);
      wishShow.textContent = prdCount = 1;
    }
  }

  function displayWish() {
    let prdCount = localStorage.getItem("wishCount");
    if (prdCount) {
      wishShow.textContent = prdCount;
    }
  }

  displayWish();

// wishlist = () => {
//   let prdCount = JSON.parse(localStorage.getItem("wishCount"));
  
//   if(localStorage.getItem("wishCount")){
//     document.querySelector(".card-1").innerHTML = "";
//     prdCount.forEach(product => {
//       document.querySelector(".card-1").innerHTML += `
//       <i class="fas fa-times-circle"></i>
//       <img src="./../static/img/dell-laptop.png" alt="dell-laptop">
//       <div class="product-details">
//       <div class="product-name">${product.product_name}</div>
//       <div class="product-price">${product.product_price}</div>
//       <div class="stock-info">Availability:<span>In Stock</span></div>
//       </div>
//       `;
//     })
//   }
// }

// wishlist()






  // clickMe.onclick = function(){
  //   count.innerHTML++
  //   count2.innerHTML++;
  // }





