import {useSelector} from "react-redux";
import {useState} from "react";
import GenderFilter from "./GenderFilter";
import CategoryFilter from "./CategoryFilter";


export const Filter = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    const {filters} = rawData

    console.log(filters)

    const filterNameArr = Object.keys(filters);
    console.log('filterNameArr', filterNameArr)


    return (
        <div>
            <GenderFilter/>
            <CategoryFilter/>
        </div>
    )
}