import {useSelector} from "react-redux";
import {useState} from "react";
import GenderFilter from "./GenderFilter";
import CategoryFilter from "./CategoryFilter";
import TypeFilter from "./TypeFilter";
import ActivityFilter from "./ActivityFilter";
import SizeFilter from "./SizeFilter";


export const Filter = ({filtersData}) => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    console.log('filtersData from filter',filtersData);

    const gender = filtersData.Gender;
    console.log(gender)











    return (
       <div>
           {
               rawData &&

               <div>
                   <GenderFilter gender={gender}/>
                   <CategoryFilter />
                   <TypeFilter />
                   <ActivityFilter />
                   <SizeFilter />
               </div>
           }
       </div>
    )
}