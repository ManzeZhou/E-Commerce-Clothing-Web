import {useEffect, useState} from "react";

const OrderSummary = ({subtotal}) => {
    const cartArr = localStorage.getItem('cartArr');


  return(
<div>
    <h1>Order Summary</h1>
    {cartArr ? <h1>Total :{subtotal}</h1>: null}
</div>
  )
}

export default OrderSummary;