
import Product from "./Product";
import {Link} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

const Products = ({products}) => {



    return (

        <div>

            <div style={{display:'grid'}}>

                {products &&
                    products?.map((product, pindex) => {

                        // method 2: create son component

                        return <Product key={pindex} product={product} pindex={pindex}/>


                        // method 1: in the same component
                        // return <div key={pindex}>
                        // <Product key={pindex} product={product}/>

                        {/*{product?.images && product?.images[0]?.mainCarousel?.media &&*/
                        }

                        {/*    <img*/
                        }
                        {/*        src={parseInt(pindex) === parseInt(productId) ?*/
                        }
                        {/*            product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0] :*/
                        }
                        {/*            product?.images[0]?.mainCarousel?.media?.split('|')[0]*/
                        }
                        {/*        }*/
                        }
                        {/*        alt={product.name}*/
                        }
                        {/*        width='100px'*/
                        }
                        {/*        height='100px'*/
                        }
                        {/*        //onMouseHover img changes*/
                        }
                        {/*        onMouseEnter={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[1]}*/
                        }

                        {/*        onMouseLeave={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0]}*/
                        }
                        {/*    />*/
                        }
                        {/*}*/
                        }


                        {/* Swatch Color Circle */
                        }


                        {/*{product?.swatches && product?.swatches?.map((color, cindex) => {*/
                        }
                        {/*    return <img*/
                        }
                        {/*        src={color.swatch}*/
                        }
                        {/*        key={cindex}*/
                        }
                        {/*        id={`${pindex}|${cindex}`}*/
                        }
                        {/*        alt={color.swatchAlt}*/
                        }
                        {/*        style={{borderRadius: '50%', height: '20px', width: '20px'}}*/
                        }
                        {/*        onMouseEnter={(e) => {*/
                        }
                        {/*            setProductId(e.target.id.split('|')[0]);*/
                        }
                        {/*            setColorId(e.target.id.split('|')[1]);*/
                        }
                        {/*            console.log('productId', e.target.id.split('|')[0]);*/
                        }
                        {/*            console.log('colorId', e.target.id.split('|')[1])*/
                        }
                        {/*        }}*/
                        }
                        {/*    />*/
                        }
                        {/*})}*/
                        }


                        // <p>{product?.name}</p>
                        {/*</div>*/
                        }


                    })
                }


            </div>

        </div>


    )
};

export default Products;



