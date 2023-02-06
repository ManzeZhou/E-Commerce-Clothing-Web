import {useState} from "react";
import {useSelector} from "react-redux";

const Product = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData)

    const products = rawData?.products;

    const [colorId, setColorId] = useState(0);

    const [productId, setProductId] = useState(null);

    return (
        <div>

            <div>

                {products &&
                    products?.map((product, pindex) => {

                        return <div key={pindex}>

                            {product?.images && product?.images[0]?.mainCarousel?.media &&

                                <img
                                    src={parseInt(pindex) === parseInt(productId) ?
                                        product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0] :
                                        product?.images[0]?.mainCarousel?.media?.split('|')[0]
                                    }
                                    alt={product.name}
                                    width='100px'
                                    height='100px'
                                    //onMouseHover img changes
                                    onMouseEnter={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[1]}

                                    onMouseLeave={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0]}
                                />
                            }


                            {/* Swatch Color Circle */}
                            {product?.swatches && product?.swatches?.map((color, cindex) => {
                                return <img
                                    src={color.swatch}
                                    key={cindex}
                                    id={`${pindex}|${cindex}`}
                                    alt={color.swatchAlt}
                                    style={{borderRadius: '50%', height: '20px', width: '20px'}}
                                    onMouseEnter={(e) => {
                                        setProductId(e.target.id.split('|')[0]);
                                        setColorId(e.target.id.split('|')[1]);
                                        console.log('productId', e.target.id.split('|')[0]);
                                        console.log('colorId', e.target.id.split('|')[1])
                                    }}
                                />
                            })}


                            <p>{product?.name}</p>
                        </div>


                    })
                }


            </div>

        </div>


    )
};

export default Product;



