import React from 'react';
import {toSliderByIaActionCreator} from "../../../../redux/sliderReducer";
import Slider__Pagination from "./Slider__Pagination";
import {connect} from "react-redux";


let mapSStateToProps = (state) => {
    return {
        sliderData: state.sliderData.slides
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        switchSlide: (id) => {
            dispatch(toSliderByIaActionCreator(id))
        }
    }
}
const Slider__PaginationContainer = connect(mapSStateToProps, mapDispatchToProps)(Slider__Pagination);

export default Slider__PaginationContainer;