import React from 'react';
import MainMenu from "./MainMenu";
import StoreContext from "../../../StoreContext";
import {deleteSlideCreator, updateSlideContentCreator} from "../../../redux/sliderReducer";
import {connect} from "react-redux";
import AdminSlide from "../../AdminPage/AdminSlide/AdminSlide";



let mapSStateToProps = (state) => {
    return {
        menuData: state.menuData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const MainMenuContainer = connect(mapSStateToProps, mapDispatchToProps)(MainMenu);


export default MainMenuContainer;