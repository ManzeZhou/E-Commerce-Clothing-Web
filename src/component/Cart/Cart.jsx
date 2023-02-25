


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
          }) : 'Give your bag some love!'}
      </div>
  )
}

export default Cart;