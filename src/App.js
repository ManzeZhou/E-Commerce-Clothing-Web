import './App.css';


import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDataInAction, fetchProductAPI} from "./action/action";
import {Filter} from "./component/Filter/Filter";



function App() {
    const dispatch = useDispatch()


    // method 1

// useEffect( () => {
//      async function fetchData() {
//          axios.get('http://api-lulu.hibitbyte.com/product/allProducts?mykey=Rfm0EUSj65L0PPLEQPxIXNgmIQX1QrP2Op2pqJLrpdBPrJO1EhE9YIPA1yOv9tXhjamor5vGwY6cnzQ7hRVy7Q==')
//              .then(response => {
//                  const raw = response.data.rs;
//                  const {filters} = raw;

//                  dispatch(fetchAllDataInAction(raw))
//
//              })
//              .catch(e => console.log(e))
//      }
//      fetchData();
// }, [])


    //method 2

    useEffect(() => {
        dispatch(fetchAllDataInAction())
    }, [])
    const rawData = useSelector(state => state?.LuLuReducer?.rawData)


    const products = rawData?.products;


    const [colorId, setColorId] = useState(null);

    const [productId, setProductId] = useState(null);





    return (
        <div className='app'>

            {rawData &&
                <div className='main-content'>
                    <Filter/>
                    <div>
                        {
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
                                            onMouseEnter={(e) =>
                                            {
                                                colorId ? e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[1] : e.target.src = product?.images[0]?.mainCarousel?.media?.split('|')[1]
                                            }
                                            }

                                            onMouseLeave={(e) => {
                                                colorId ? e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0] : e.target.src = product?.images[0]?.mainCarousel?.media?.split('|')[0]
                                            }}
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
                </div>}

        </div>


    );
}

export default App;
