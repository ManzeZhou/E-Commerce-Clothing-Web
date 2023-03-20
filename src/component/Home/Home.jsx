import {useSelector} from "react-redux";
import {Filter} from "../Filter/Filter";
import Products from "../Products/Products";
import {Link} from "react-router-dom";


const Home = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);


    const filters = useSelector(state => state?.LuLuReducer?.filterCriteria);


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