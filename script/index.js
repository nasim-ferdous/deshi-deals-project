function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document.getElementById("product-btn-1").addEventListener("click", function () {
  const title = getElement("product-title-1").innerText;
  const price = getElement("product-price-1").innerText;
  const totalPrice = getElement("total-price").innerText;

  const currentTotal = Number(price) + Number(totalPrice);

  getElement("total-price").innerText = currentTotal.toFixed(2);

  //   to add cart
  const cartContainer = getElement("cart-container");
  const newCart = document.createElement("div");
  newCart.innerHTML = `
                 <div class="bg-gray-100 flex justify-between p-5 ">
                <div>
                  <img src="./assets/kitchen-1.png" alt="" class="w-10" />
                </div>
                <div>
                  <h2 class="font-bold">${title}</h2>
                  <h2>${price} TK</h2>
                </div>
              </div>
  `;
  cartContainer.appendChild(newCart);
});
