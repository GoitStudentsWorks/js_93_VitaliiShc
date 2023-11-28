
const cartValue = localStorage.getItem('cart');
if (cartValue !== null) {
} else {
  localStorage.setItem('cart', JSON.stringify([]));
}
const buyClick = document.querySelectorAll('.buy-btn');
buyClick.forEach(button => {
  button.addEventListener('click', addToCart);
});

export function addToCart(event) {
  let buyingProd = event.target;
  let productId = buyingProd.dataset.buythis;
  console.log('productId', productId);

  const savedProduct1 = JSON.parse(localStorage.getItem('res.data'));
  console.log('savedProduct1', savedProduct1);

  const prodInCart = savedProduct1.find(option => option._id === productId);
  console.log('prodInCart', prodInCart);

  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('currentCart', currentCart);

  const productAlreadyInCart = currentCart.find(
    item => item._id === prodInCart._id
  );

  console.log('productAlreadyInCart', productAlreadyInCart);


  if (!productAlreadyInCart) {
    currentCart.push(prodInCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));

  } 
// =======
//     console.log('added to cart', event.currentTarget.id);
//   } else {
//     console.log('already in cart', event.currentTarget.id);
//   }
// >>>>>>> main
}
