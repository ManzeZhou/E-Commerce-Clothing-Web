import CartContent from "./CartContent";
import OrderSummary from "./OrderSummary";


const Cart = () => {
    const cartArr = JSON.parse(localStorage.getItem('cartArr'));

    console.log(cartArr);

  return (
      <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
          <div>
              <h1>Your Cart</h1>
              {cartArr ? cartArr.map((i, index) => {
                  return <CartContent key={index} i={i}/>
              }) : 'Give your bag some love!'}

          </div>


              <OrderSummary/>

      </div>
  )
}

export default Cart;