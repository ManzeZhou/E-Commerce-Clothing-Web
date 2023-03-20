import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import GenderFilter from "./GenderFilter";
import CategoryFilter from "./CategoryFilter";
import TypeFilter from "./TypeFilter";
import ActivityFilter from "./ActivityFilter";
import SizeFilter from "./SizeFilter";
import CheckBoxFilter from "./CheckBoxFilter";
import checkBoxFilter from "./CheckBoxFilter";
import {fetchFilteredProducts, updateFilterCriteria} from "../../action/action";


export const Filter = ({filtersData}) => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    console.log('filtersData',filtersData);

    // const filterTitleArr = Object.keys(filtersData);
    // console.log('filterTitleArr',filterTitleArr)

    const entries = Object.entries(filtersData);
    console.log('entries',entries)

    const gender = filtersData?.Gender;
    console.log('gender',gender)



    const category = filtersData?.Category;

    const type = filtersData?.Type;

    const activity = filtersData?.Activity;

    const size = filtersData?.Size;

    const [filters, setFilters] = useState();
    useEffect(() => {
        setFilters(filtersData)
    }, [filtersData])


    const dispatch = useDispatch();

    useEffect(() => {
        if(filters) {
            console.log('filters ---->',filters);
            dispatch(updateFilterCriteria(filters));
            dispatch(fetchFilteredProducts(filters));
        }
    }, [filters])












// todo use template for box filter and color filter

    return (
       <div>
           {/*{*/}
           {/*    rawData &&*/}

           {/*    <div>*/}
           {/*        <GenderFilter gender={gender} filters={filtersData} selectedFilters={selectedFilters}/>*/}
           {/*        /!*<CategoryFilter category={category} filters={filtersData}/>*!/*/}
                   {/*/!*<CheckBoxFilter category={category} filters={filtersData}/>*!/*/}
           {/*        /!*<TypeFilter type={type} filters={filtersData} />*!/*/}
           {/*        /!*<ActivityFilter activity={activity}/>*!/*/}
           {/*        /!*<SizeFilter size={size}/>*!/*/}
           {/*    </div>*/}
           {/*}*/}

           {rawData && entries.map(([key, value], index) => {return <CheckBoxFilter filterTitle={key} titleValue={value} filters={filters} setFilters={setFilters} key={index}/>}
           )}

       </div>
    )
}