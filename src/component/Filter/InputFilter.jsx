import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllDataInAction, fetchFilteredProducts} from "../../action/action";

const InputFilter = ({i, filterTitle, filtersData}) => {


    const dispatch = useDispatch();


    const handleCheck = (e) => {
        console.log('button checked ?',e.target.checked)
        console.log(`${filterTitle}  ${i.name} isChecked`, e.target.checked);

        let newFilters = {...filtersData}

        let arrToChange = newFilters[filterTitle]

        const indexToChange = arrToChange.findIndex(item => item.name === i.name);

        if (indexToChange !== -1) {
            arrToChange[indexToChange].isChecked = e.target.checked;
            console.log('newFilters', newFilters)
            // dispatch(fetchFilteredProducts(newFilters));

            const isAllFalse = Object.values(newFilters).every(filterArray => filterArray.every(filterObj => !filterObj.isChecked));
            console.log('isAllFalse', isAllFalse)
            if (isAllFalse) {
                console.log("All filters are unchecked");
                dispatch(fetchAllDataInAction())
            } else {
                console.log("At least one filter is checked");
                dispatch(fetchFilteredProducts(newFilters));
            }
        }

    }


    return (
        <div>
            <input type="checkbox" defaultChecked={i.isChecked} onClick={(e) => {
                handleCheck(e)
            }}/>
            <label>{i.name}</label>
        </div>
    )
}

export default InputFilter;