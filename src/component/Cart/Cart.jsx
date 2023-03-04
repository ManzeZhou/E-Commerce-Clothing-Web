import CartContent from "./CartContent";
import OrderSummary from "./OrderSummary";
import {useState} from "react";


const Cart = () => {

    //update cartArr and CartContent display when remove item from cart
    const [cartArr, setCartArr] = useState(JSON.parse(localStorage.getItem('cartArr')));

    // update subtotal price when changing items qty and remove items from cart
    const [subtotal, setSubtotal] = useState(JSON.parse(localStorage.getItem('subtotalPrice')));

    console.log(cartArr);
    const handleClear = () => {
        localStorage.clear();
    }

  return (

      <div>
          <button onClick={handleClear}>clear cart</button>

          <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
              <div>
                  <h1>Your Cart</h1>
                  {cartArr ? cartArr.map((i, index) => {
                      return <CartContent key={index} i={i} setCartArr={setCartArr} setSubtotal={setSubtotal}/>
                  }) : 'Give your bag some love!'}

              </div>


              <OrderSummary subtotal={subtotal}/>

          </div>
      </div>

  )
}

export default Cart;