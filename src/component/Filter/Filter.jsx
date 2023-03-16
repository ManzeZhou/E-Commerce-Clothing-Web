import {useSelector} from "react-redux";
import {useState} from "react";
import GenderFilter from "./GenderFilter";
import CategoryFilter from "./CategoryFilter";
import TypeFilter from "./TypeFilter";
import ActivityFilter from "./ActivityFilter";
import SizeFilter from "./SizeFilter";


export const Filter = ({filtersData}) => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    const gender = filtersData?.Gender;

    const category = filtersData?.Category;

    const type = filtersData?.Type;

    const activity = filtersData?.Activity;

    const size = filtersData?.Size;












    return (
       <div>
           {
               rawData &&

               <div>
                   <GenderFilter gender={gender} filters={filtersData}/>
                   <CategoryFilter category={category}/>
                   <TypeFilter type={type}/>
                   <ActivityFilter activity={activity}/>
                   <SizeFilter size={size}/>
               </div>
           }
       </div>
    )
}