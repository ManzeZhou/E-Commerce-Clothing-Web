import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ProductPage from "./ProductPage";
import {useDispatch} from "react-redux";


const Products = ({product, pindex}) => {



    const [colorId, setColorId] = useState(0);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div
            // to={`product/${product?.productId}`}
            //     onClick={() => {
            //     navigate(`product/${product?.productId}`)
            // }}

        >
            {product?.images && product?.images[`${colorId}`]?.mainCarousel?.media &&
                <div>
                    <img
                        onClick={() => {
                        navigate(`product/${pindex}`)
                        }}

                        src={
                            product?.images[colorId]?.mainCarousel?.media?.split('|')[0]
                        }
                        alt={product.name}
                        width='100px'
                        height='100px'

                        onMouseEnter={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[1]}

                        onMouseLeave={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0]}
                    />

                    {product?.swatches && product?.swatches?.map((color, cindex) => {
                        return <img
                            src={color.swatch}
                            key={cindex}
                            id={cindex}
                            alt={color.swatchAlt}
                            style={{borderRadius: '50%', height: '20px', width: '20px'}}
                            onMouseEnter={(e) => {

                                setColorId(e.target.id);

                            }}
                        />
                    })}

                    <span>{product?.name}</span>
                    <p>{product?.price}</p>

                </div>
            }
        </div>

    )
}

export default Products;