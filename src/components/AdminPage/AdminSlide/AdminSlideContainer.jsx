import React from 'react';
import {deleteSlideCreator, updateSlideContentCreator} from "../../../redux/sliderReducer";
import AdminSlide from "./AdminSlide";
import {connect} from "react-redux";

let mapSStateToProps = (state, props) => {
    return {
        slide: props.slide
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSlideContent: (slide) => {
            dispatch(updateSlideContentCreator(slide))
        },
        onDeleteSlide: (id) => {
            dispatch(deleteSlideCreator(id))
        }
    }
}

const AdminSlideContainer = connect(mapSStateToProps, mapDispatchToProps)(AdminSlide);

export default AdminSlideContainer;