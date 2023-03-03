import {useEffect, useState} from "react";

const CartContent = ({i}) => {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [qty, setQty] = useState(parseInt(i.qty));

    const handleChangeQty = (e) => {
        setQty(e.target.value)
    }

    useEffect(() => {
        console.log(qty)
    }, [qty]);

    // todo write down the changed qty and price into localstorage

     return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <img src={i.imgURL} alt="" style={{width: '200px', height: '239px'}}/>
            </div>

            <div>
                <h3>{i.productName}</h3>
                <p>{i.swatch}</p>
                <p>Size {i.size}</p>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <button>Edit</button>

                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <span>Item Price</span>
                        <span>$ {i.price}</span>
                    </div>

                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <span>Quantity</span>
                        <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            value={qty}
                            onChange={handleChangeQty}
                        >
                            {options.map((option, index) => {
                                return <option value={option} key={index}>{option}</option>
                            })}
                        </select>
                    </div>

                    <div style={{display: 'flex', flexDirection:'column'}}>
                        <span>Total Price </span>
                        <span>${parseInt(i.price) * parseInt(qty)}.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContent;
