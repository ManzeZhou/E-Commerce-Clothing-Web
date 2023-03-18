import {useSelector} from "react-redux";
import {useState} from "react";
import InputFilter from "./InputFilter";

 const TypeFilter = ({type, filters}) => {

     const filterTitle = 'Type'

    const [hide, setHide] = useState(true)

    const handleHide = () => {
        setHide(!hide)
    };

    return (
        <div>
            <h1>{filterTitle}</h1>
            {type && type.map((i, index) => {

                // todo aad more icon

                if (!hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
                    // return <div key={index}>
                    //     <input type="checkbox"/>
                    //     <label>{i.name}</label>
                    // </div>
                } else if(index < 5 && hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
                    // return <div key={index}>
                    //     <input type="checkbox"/>
                    //     <label>{i.name}</label>
                    // </div>
                }

            })
            }

            <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        </div>
    )


}

export default TypeFilter;