import {useDispatch, useSelector} from "react-redux";
import {Filter} from "../Filter/Filter";
import Products from "../Products/Products";
import {fetchAllDataInAction} from "../../action/action";
import {useEffect, useState} from "react";



const Home = () => {

    // const rawData = useSelector(state => state?.LuLuReducer?.rawData);
    const rawData = useSelector(state => state?.LuLuReducer?.filteredData);

    console.log(rawData)

    // const filters = useSelector(state => state?.LuLuReducer?.rawData.filters);
    // const filters = useSelector(state => state?.LuLuReducer?.filteredData.filters);

    const filters = rawData.filters;

    console.log('filters',filters)


    const products = rawData?.products;



    return (
        <div>

            {rawData &&
                <div
                    className='main-content'
                    style={{display: 'flex'}}
                >

                    <Filter filtersData={filters}/>

                    <div>
                        {products.length === 0 ?
                            <div>
                                <h1>Sorry, not matching products</h1>
                                {/*todo remove all checkbox checked*/}
                                <button onClick={() => {
                                    window.location.reload()
                                }
                                }>Show all products</button>
                            </div>
                            : <Products products={products}/>
                        }
                    </div>

                </div>}
        </div>
    )
}

export default Home;