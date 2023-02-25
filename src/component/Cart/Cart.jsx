


const Cart = () => {
    const cartArr = JSON.parse(localStorage.getItem('cartArr'));

    console.log(cartArr);

  return (
      <div>
          <h1>Your Cart</h1>
          {cartArr ? cartArr.map((i, index) => {
              return <div key={index}>
                  <p>{i.productName}</p>
                  <p>{i.price}</p>
                  <p>{i.swatch}</p>
                  <p>{i.qty}</p>
              </div>
          }) : 'Your cart is empty'}
      </div>
  )
}

export default Cart;