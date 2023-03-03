
const OrderSummary = () => {
    const cartArr = JSON.parse(localStorage.getItem('cartArr'));
  return(
<div>
    <h1>Order Summary</h1>
    {cartArr ? <h1>Total :{JSON.parse(localStorage.getItem('subtotalPrice'))}</h1>: null}
</div>
  )
}

export default OrderSummary;