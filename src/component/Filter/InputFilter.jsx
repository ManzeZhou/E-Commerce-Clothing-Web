import {useEffect, useState} from "react";
import {fetchAllDataInAction, fetchAllFiltersInAction, fetchFilteredProducts} from "../../action/action";
import {useDispatch, useSelector} from "react-redux";

const InputFilter = ({i, filters}) => {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false)
    // console.log('filters', filters)
    // todo build a global store to store filter data and change isChecked if filter checked, then post request


    // useEffect(() => {
    //     if (selected) {
    //         let newFilters = {...filters}
    //         console.log(newFilters)
    //         let GenderArr = newFilters.Gender
    //         const indexToChange = GenderArr.findIndex(item => item.name === i.name)
    //         console.log(indexToChange)
    //         if(indexToChange !== -1) {
    //             GenderArr[indexToChange].isChecked = true
    //             dispatch(fetchAllFiltersInAction(newFilters))
    //         }
    //         console.log('newFilters --->', newFilters)
    //     } else {
    //         let newFilters = {...filters}
    //         console.log(newFilters)
    //         let GenderArr = newFilters.Gender
    //         const indexToChange = GenderArr.findIndex(item => item.name === i.name)
    //         console.log(indexToChange)
    //         if(indexToChange !== -1) {
    //             GenderArr[indexToChange].isChecked = false
    //             // todo if selected both women and men, then unclick one of them, the other one need to be filtered
    //             // dispatch(fetchAllDataInAction())
    //             // dispatch(fetchAllFiltersInAction(newFilters))
    //         }
    //     }
    // }, [selected]);


    const rawData = useSelector(state => state?.LuLuReducer?.rawData);
    const filtersInStore = useSelector(state => state?.FiltersReducer?.allFilters);

    // useEffect(() =>{
    //     dispatch(fetchFilteredProducts(filtersInStore))
    //     console.log('filtersInStore',filtersInStore)
    //     console.log('rawData --->',rawData)
    // }, [selected, filtersInStore, rawData]);


    return (
        <div>
            <input type="checkbox" onClick={() => {setSelected(!selected)}}/>
            <label>{i.name}</label>
        </div>
    )
}

export default InputFilter;