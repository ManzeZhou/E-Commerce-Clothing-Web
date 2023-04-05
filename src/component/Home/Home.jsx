import {useSelector} from "react-redux";
import {Filter} from "../Filter/Filter";
import Products from "../Products/Products";



const Home = () => {

    // const rawData = useSelector(state => state?.LuLuReducer?.rawData);
    const rawData = useSelector(state => state?.LuLuReducer?.filteredData);

    // const filters = useSelector(state => state?.LuLuReducer?.rawData.filters);
    const filters = useSelector(state => state?.LuLuReducer?.filteredData.filters);


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
                                <button>Show all products</button>
                            </div>
                            : <Products products={products}/>
                        }
                    </div>

                </div>}
        </div>
    )
}

export default Home;