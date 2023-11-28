import basket from '../images/basket.png';
import basket2x from '../images/basket-2x.png';
import icons from '../images/icons.svg';

// import Scrollbar from 'smooth-scrollbar';

const basketCart = document.querySelector('.full-cart-container');
const cartProductQuantity = document.querySelector('.quantity-carts');
console.log(cartProductQuantity.textContent);

const FULLDATA = JSON.parse(localStorage.getItem('res.data'));

const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
console.log('cart array', YOUR_CART);

// let testValue = 'Test Value';

let TOTAL_PRICE = 0;

function calcTotalPrice(objArr) {
  console.log('cart array for calcTotalPrice', objArr);

  for (const product of objArr) {
    TOTAL_PRICE += product.price;
  }
  console.log('total price', TOTAL_PRICE);
}

calcTotalPrice(YOUR_CART);

renderPage(YOUR_CART);

function renderPage(YOUR_CART) {
  if (YOUR_CART.length === 0) {
    console.log('empty');
    basketCart.innerHTML = `
    <picture>
      <source srcset="${basket} 1x, ${basket2x} 2x" />
      <img src="${basket}" alt="basket" class="basket-img" />
    </picture>
    <h3 class="basket-title">
      Your basket is
      <a href="./index.html" class="basket-title-link"> empty... </a>
    </h3>
    <p class="basket-text">
      Go to the main page to select your favorite products and add them to the
      cart.
    </p>`;
  } else if (YOUR_CART.length !== 0) {
    console.log('no empty');
    createCartMarkup(YOUR_CART);
  }
}
// Hello

function createCartMarkup(array) {
  calcTotalPrice(YOUR_CART);

  const cartMarkup = array
    .map(
      ({
        category,
        img,
        is10PercentOff,
        name,
        popularity,
        price,
        size,
        _id,
      }) => `<div class="yourcart-product-card" data-product-id=${_id}>
      <img class="yourcart-product-img" src=${img} alt=${name} />
      <div class="yourcart-product-card-discription">
        <div class="yourcart-product-card-info">
          <p class="yourcart-product-name">${name}</p>
          <div class="yourcart-product-features">
            <p class="yourcart-product-category">Category: <span>${category}</span></p>
            <p class="yourcart-product-size">Size: <span>${size}</span></p>
          </div>
          <p class="yourcart-product-price">${price}</p>
        </div>
        <button type="button" class="delete-btn"><svg class="delete-icon"><use href="${icons}#icon-remove"></use>/svg></button>
        <!-- <div class="yourcart-product-card-controls">
            <div class="yourcart-product-remove-btn"></div>
            <div class="counter"></div>
        </div> -->
      </div>
    </div>`
    )
    .join('');

  const fullCartMarkup =
    `            <div class="delete-all">
                <p class="delete-all-text">Delete all</p>
                <button type="button" class="delete-all-btn">
                    <svg class="delete-all-icon">
                        <use href="${icons}#icon-remove"></use>
                    </svg>
                </button>
            </div><div class="js-basket">` +
    cartMarkup +
    `</div>    <div class="order">
      <h2 class="order-title">Your Order</h2>
      <div class="order-total">
        <p class="order-total">Total</p>
        <div class="order-sum">
          <p class="order-text-sum">Sum:</p>
          <span class="order-total-sum">${TOTAL_PRICE}</span>
        </div>
      </div>
      <form class="form-input">
        <input
          type="email"
          name="user-email"
          id="user-email"
          class="mail-input"
          placeholder="Enter your email"
          pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
          required
        />
        <button type="submit" class="form-btn">Checkout</button>
      </form>
    </div>`;

  // console.log(fullCartMarkup);

  basketCart.innerHTML = fullCartMarkup;

  //   const order = document.querySelector('.order-total-sum');
  //   let total = 0
  //   cartMarkup.forEach((price) => {
  //     total += price

  //   })

  // console.log(total)
}

// ---------------- draft
// basketCart.innerHTML = `<div class="yourcart-product-card">
//       <img class="yourcart-product-img" src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png" alt="product" />
//       <div class="yourcart-product-card-discription">
//         <div class="yourcart-product-card-info">
//           <p class="yourcart-product-name">Name</p>
//           <div class="yourcart-product-features">
//             <p class="yourcart-product-category">Category: <span>Fresh Produce</span></p>
//             <p class="yourcart-product-size">Size: <span>Each</span></p>
//           </div>
//           <p class="yourcart-product-price">$1.99</p>
//         </div>
//         <!-- <div class="yourcart-product-card-controls">
//             <div class="yourcart-product-remove-btn"></div>
//             <div class="counter"></div>
//         </div> -->
//       </div>
//     </div>`;

// if (cartProductQuantity.textContent === '0') {
//   basketCart.innerHTML = `<picture>
//       <source srcset="${basket}   1x, ${basket2x} 2x" />
//       <img src="${basket}" alt="basket" class="basket-img" />
//     </picture>
//     <h3 class="basket-title">
//       Your basket is
//       <a href="/src/index.html" class="basket-title-link">
//         empty...
//       </a>
//     </h3>
//     <p class="basket-text">
//       Go to the main page to select your favorite products and add them to the
//       cart.
//     </p>`;
//   console.log(basketCart);
//   // basketCart.classList.remove('.visually-hidden')
// }
// if (cartProductQuantity.textContent !== '0') {
//   basketCart.innerHTML = `
// <div class="product-cart">
//         <div class="products-cart-container">
// <div class="delete-all">
//     <p class="delete-all-text">Delete all</p>
//     <button type="button" class="delete-all-btn">
//         <svg class="delete-all-icon">
//             <use href="${icons}#icon-remove"></use>
//         </svg>
//     </button>
// </div>
//             <ul class="product-list">
//                 <li class="product-item">
//                     <div class="product-cart-container">
//                         <img src="" alt="" class="product-cart-img" />
//                     </div>
//                     <div class="product-info">
//                         <h3 class="product-cart-title">Title</h3>
//                         <ul class="product-list-info">
//                             <li class="product-info-item">
//                                 <p class="product-cart-category">
//                                     Category<span class="product-cart-category-name"></span>
//                                 </p>
//                             </li>
//                             <li>
//                                 <p class="product-cart-size">
//                                     Size: <span class="product-cart-size-value"></span>
//                                 </p>
//                             </li>
//                         </ul>
//                         <p class="cart-product-price">00</p>
//                     </div>
//                     <button type="button" class="delete-btn">
//                         <svg class="delete-icon">
//                             <use href="${icons}#icon-remove"></use>
//                         </svg>
//                     </button>
//                 </li>
//             </ul>
//         </div>
// <div class="order">
//     <h2 class="order-title">Your Order</h2>
//     <div class="order-total">
//         <p class="order-total">Total</p>
//         <div class="order-sum">
//             <p class="order-text-sum">Sum:</p>
//             <span class="order-total-sum">$12,94</span>
//         </div>
//     </div>
//     <form class="form-input">
//         <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" required />
//         <button type="submit" class="form-btn">Checkout</button>
//     </form>
// </div>
//     </div>
// `;
//   console.log(basketCart);
//   // basketCart.classList.add('.visually-hidden')
// }

// Scrollbar.init(document.querySelector('#my-scrollbar'), {
//   alwaysShowTracks: true,
// });
