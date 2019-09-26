import {combineReducers, createStore} from "redux";
import sliderReducer from "./sliderReducer";
import menuReducer from "./menuReducer";
import activitiesReducer from "./activitiesReducer";

let reducers = combineReducers({
    sliderData: sliderReducer,
    menuData: menuReducer,
    activitiesData: activitiesReducer
})

let store = createStore(reducers)

export default store