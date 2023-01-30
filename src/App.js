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

    console.log('rawData', rawData);

    const products = rawData?.products;
    console.log('products', products);


    return (
        <div className='app'>

            {rawData &&
                <div className='main-content'>
                    <Filter/>
                    <div>
                        {products.map((product, index) => {
                            return <div key={index}>
                                {product?.images && <img src={product.images[0].mainCarousel?.media.split('|')[0]} alt={product.name} width='100px' height='100px'/>}
                                <span>{product?.name}</span>
                            </div>
                        })
                            }

                            </div>
                            </div>}

                    </div>


                    );
                    }

            export default App;
