function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// delegation technique
document.getElementById("product-box").addEventListener("click", function (e) {
  if (e.target.className.includes("cart-button")) {
    // alert("clicked");
    const cartButton = e.target;
    const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;
    const productTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;
    const productPrice =
      cartButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = getElement("total-price").innerText;

    const currentPrice = Number(productPrice) + Number(totalPrice);
    // console.log(productPrice, totalPrice, currentPrice);

    getElement("total-price").innerText = currentPrice.toFixed(2);

    const cartContainer = getElement("cart-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
        <div class="bg-gray-100 flex justify-between p-5 ">
                <div>
                  <img src="${productImg}" alt="" class="w-10" />
                </div>
                <div>
                  <h2 class="font-bold">${productTitle}</h2>
                  <h2>${productPrice} TK</h2>
                </div>
              </div>

    `;
    cartContainer.appendChild(newCart);

    const totalQuantity = getElement("total-quantity").innerText;
    const currentQuantity = Number(totalQuantity) + 1;

    getElement("total-quantity").innerText = currentQuantity;
    console.log(totalQuantity, currentQuantity);
  }
});

// eksathe sob button gula dhore
// traverse technique
// const cartButtons = document.getElementsByClassName("cart-button");

// for (let cartButton of cartButtons) {
//   cartButton.addEventListener("click", function () {
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;
//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentPrice = Number(productPrice) + Number(totalPrice);
//     // console.log(productPrice, totalPrice, currentPrice);

//     getElement("total-price").innerText = currentPrice.toFixed(2);

//     const cartContainer = getElement("cart-container");
//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//         <div class="bg-gray-100 flex justify-between p-5 ">
//                 <div>
//                   <img src="${productImg}" alt="" class="w-10" />
//                 </div>
//                 <div>
//                   <h2 class="font-bold">${productTitle}</h2>
//                   <h2>${productPrice} TK</h2>
//                 </div>
//               </div>

//     `;
//     cartContainer.appendChild(newCart);

//     const totalQuantity = getElement("total-quantity").innerText;
//     const currentQuantity = Number(totalQuantity) + 1;

//     getElement("total-quantity").innerText = currentQuantity;
//     console.log(totalQuantity, currentQuantity);
//   });
// }

document.getElementById("clear-btn").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";

  getElement("total-quantity").innerText = 0;
  getElement("total-price").innerText = 0;
});

// Traditional way
// document.getElementById("product-btn-1").addEventListener("click", function () {
//   const title = getElement("product-title-1").innerText;
//   const price = getElement("product-price-1").innerText;
//   const totalPrice = getElement("total-price").innerText;

//   const currentTotal = Number(price) + Number(totalPrice);

//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   //   to add cart
//   const cartContainer = getElement("cart-container");
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//    <div class="bg-gray-100 flex justify-between p-5 ">
//   <div>
//     <img src="./assets/kitchen-1.png" alt="" class="w-10" />
//   </div>
//   <div>
//     <h2 class="font-bold">${title}</h2>
//     <h2>${price} TK</h2>
//   </div>
// </div>
//   `;
//   cartContainer.appendChild(newCart);
// });
