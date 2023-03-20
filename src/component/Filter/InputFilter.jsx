import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkFilterIsChecked} from "../../Helper/Helper";
import {fetchFilteredProducts, updateFilterCriteria} from "../../action/action";

const InputFilter = ({i, filters, filterTitle, setFilters}) => {


    const [selected, setSelected] = useState(false);

    // todo selected changed at the first time and fetch 45 products at the first render
    // first null , then false?


    useEffect(() => {
        console.log(selected);

// todo check if more than one of the checkbox is checked, otherwise do no fetch filter data
        // checkFilterIsChecked(selected, filters,filterTitle,dispatch, i.name);
        if (filters) {
            if (selected) {
                console.log('filters', filters)
                let newFilters = {...filters}

                let arrToChange = newFilters[filterTitle]

                const indexToChange = arrToChange.findIndex(item => item.name === i.name);
                if (indexToChange !== -1) {
                    arrToChange[indexToChange].isChecked = true;
                    // dispatch(updateFilterCriteria(newFilters));
                    // dispatch(fetchFilteredProducts(newFilters));
                    setFilters(newFilters)
                    console.log('filters', filters)
                }
            } else {
                // todo if all of the ischecked are false, do nothing

                let newFilters = {...filters}
                console.log('test', newFilters, filterTitle)
                let arrToChange = newFilters[filterTitle]

                const indexToChange = arrToChange.findIndex(item => item.name === i.name);
                if (indexToChange !== -1) {
                    // arrToChange[indexToChange].isChecked = true;
                    if (arrToChange[indexToChange].isChecked) {
                        arrToChange[indexToChange].isChecked = false
                        setFilters(newFilters);
                        console.log('filters', filters)
                    }


                }
            }
        }

    }, [selected]);


    return (
        <div>
            <input type="checkbox" onClick={() => {
                setSelected(!selected)
            }}/>
            <label>{i.name}</label>
        </div>
    )
}

export default InputFilter;