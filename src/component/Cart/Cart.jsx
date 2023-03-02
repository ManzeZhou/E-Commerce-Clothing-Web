


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

          {cartArr ? <h1>Total :{JSON.parse(localStorage.getItem('subtotalPrice'))}</h1>: null}
      </div>
  )
}

export default Cart;