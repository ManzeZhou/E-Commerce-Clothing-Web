import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkFilterIsChecked} from "../../Helper/Helper";

const InputFilter = ({i, filters, filterTitle}) => {

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false)


    const filterCriteria = useSelector(state => state?.LuLuReducer?.filterCriteria);

    useEffect(() => {
        // if(selected){
        //     let newFilters = {...filters}
        //     let GenderArr = newFilters.Gender;
        //
        //     const indexToChange = GenderArr.findIndex(item => item.name === i.name);
        //     if(indexToChange !== -1) {
        //         GenderArr[indexToChange].isChecked = true;
        //         dispatch(updateFilterCriteria(newFilters));
        //         dispatch(fetchFilteredProducts(newFilters));
        //     }
        // } else {
        //     let newFilters = {...filters}
        //     let GenderArr = newFilters.Gender;
        //
        //     const indexToChange = GenderArr.findIndex(item => item.name === i.name);
        //     if(indexToChange !== -1) {
        //         GenderArr[indexToChange].isChecked = false;
        //         dispatch(updateFilterCriteria(newFilters));
        //         dispatch(fetchFilteredProducts(newFilters));
        //     }
        // }

        checkFilterIsChecked(selected, filters,filterTitle,dispatch, i.name);

    }, [selected]);



    return (
        <div>
            <input type="checkbox" onClick={() => {setSelected(!selected)}}/>
            <label>{i.name}</label>
        </div>
    )
}

export default InputFilter;