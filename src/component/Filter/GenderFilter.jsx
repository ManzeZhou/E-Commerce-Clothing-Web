import {useSelector} from "react-redux";



export const GenderFilter = () => {
    const rawData = useSelector(state => state?.LuLuReducer?.rawData)



    const genderFilter = rawData?.filters?.Gender;


    return (
        <div>
            <h1>Gender</h1>
            {genderFilter && genderFilter.map((i, index) => {

                        return <div key={index}>
                            <input type="checkbox"/>
                            <label>{i.name}</label>
                        </div>

                })
            }
        </div>
    )


}

export default GenderFilter;