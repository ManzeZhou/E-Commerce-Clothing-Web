import {useSelector} from "react-redux";



export const GenderFilter = ({gender}) => {




    return (
        <div>
            <h1>Gender</h1>
            {gender && gender.map((i, index) => {

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