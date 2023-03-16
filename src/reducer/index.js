import {combineReducers} from "redux";
import {LuLuReducer} from "./LuLuReducer";
import {FiltersReducer} from "./FiltersReducer";




 const rootReducer = combineReducers (
    {LuLuReducer, FiltersReducer}
)

export default rootReducer;