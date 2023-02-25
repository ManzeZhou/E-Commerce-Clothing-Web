import './App.css';


import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDataInAction, fetchProductAPI} from "./action/action";
import {Filter} from "./component/Filter/Filter";
import Products from "./component/Products/Products";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/Home";
import ProductPage from "./component/Products/ProductPage";
import home from "./component/Home/Home";
import Header from "./component/Header";
import Cart from "./component/Cart/Cart";



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
    }, []);

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);


    return (

        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Home />}/>
                <Route path='/product/:id' element={<ProductPage />}/>
                <Route path='/cart' element={<Cart />}></Route>
            </Route>




        </Routes>








    );
}

export default App;
