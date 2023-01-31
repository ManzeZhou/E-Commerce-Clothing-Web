import {useSelector} from "react-redux";
import {useState} from "react";
import GenderFilter from "./GenderFilter";
import CategoryFilter from "./CategoryFilter";
import TypeFilter from "./TypeFilter";
import ActivityFilter from "./ActivityFilter";
import SizeFilter from "./SizeFilter";


export const Filter = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    const {filters} = rawData



    // const filterNameArr = Object.keys(filters);
    // console.log('filterNameArr', filterNameArr)


    return (
        <div>
            <GenderFilter />
            <CategoryFilter />
            <TypeFilter />
            <ActivityFilter />
            <SizeFilter />
        </div>
    )
}